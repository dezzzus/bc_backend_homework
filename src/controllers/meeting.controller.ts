import httpStatusCodes from 'http-status-codes';

import meetingService from '../services/meeting.service';
import apiResponse from '../utilities/apiResponse';
import constants from '../constants';
import locale from '../constants/locale';
import { Request, Response } from 'express';

const allMeetings = async (req: Request, res: Response) => {
  const meetings = await meetingService.allMeetings();
  if (meetings) {
    apiResponse.result(res, meetings, httpStatusCodes.OK);
  } else {
    apiResponse.error(
      res,
      httpStatusCodes.BAD_REQUEST
    );
  }
};

const getMeetingById = async (req: Request, res: Response) => {
  const meeting = await meetingService.getMeetingById(
    Number(req.params.id),
  );

  if (meeting) {
    apiResponse.result(res, meeting, httpStatusCodes.OK);
  } else {
    apiResponse.error(
      res,
      httpStatusCodes.BAD_REQUEST,
      locale.MEETING_NOT_EXISTS,
    );
  }
};

const createMeeting = async (req: Request, res: Response) => {
  let meeting;
  try {
    meeting = await meetingService.createMeeting(
      req.body.host,
      req.body.name,
      req.body.when,
      req.body.attendees,
    );
  } catch (e) {
    if (e.code === constants.ErrorCodes.DUPLICATE_ENTRY) {
      apiResponse.error(
        res,
        httpStatusCodes.BAD_REQUEST,
        locale.EMAIL_ALREADY_EXISTS,
      );
      return;
    }
  }
  if (meeting) {
    apiResponse.result(res, meeting, httpStatusCodes.CREATED);
  } else {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST);
  }
};

const updateMeeting = async (req: Request, res: Response) => {
  let meeting = await meetingService.getMeetingById(
    Number(req.params.id),
  );

  if (meeting) {
    meeting.host = req.body.host;
    meeting.name = req.body.name;
    meeting.when = req.body.when;
    meeting.attendees = req.body.attendees;

    try {
      meeting = await meetingService.updateMeeting(meeting);
      apiResponse.result(res, meeting, httpStatusCodes.OK);
    } catch (e) {
      apiResponse.error(res, httpStatusCodes.BAD_REQUEST);
    }
  } else {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST, locale.MEETING_NOT_EXISTS);
  }
};

const deleteMeeting = async (req: Request, res: Response) => {
  let meeting = await meetingService.getMeetingById(
    Number(req.params.id),
  );

  if (meeting) {
    try {
      await meetingService.deleteMeeting(meeting);
      apiResponse.result(res, meeting, httpStatusCodes.OK);
    } catch (e) {
      apiResponse.error(res, httpStatusCodes.BAD_REQUEST);
    }
  } else {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST, locale.MEETING_NOT_EXISTS);
  }
};

export default {
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  allMeetings
};
