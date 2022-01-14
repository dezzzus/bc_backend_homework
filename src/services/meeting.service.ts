import { getRepository } from 'typeorm';
import { Meeting } from '../entities/meeting/meeting.entity';

const getMeetingById = async (meetingId: number) => {
  try {
    return await getRepository(Meeting).findOne({ id: meetingId });
  } catch (e) {
    return null;
  }
};

const getMeetingByHost = async (
  host: string,
) => {
  try {
    return await getRepository(Meeting).findOne({ host });
  } catch (e) {
    return null;
  }
};

const createMeeting = async (
  host: string,
  name: string,
  when: string,
  attendees: string,
) => {
  const newMeeting = new Meeting();
  newMeeting.host = host;
  newMeeting.name = name;
  newMeeting.when = when;
  newMeeting.attendees = attendees;
  return await getRepository(Meeting).save(newMeeting);
};

const updateMeeting = async (meeting: Meeting) => {
  return await getRepository(Meeting).save(meeting);
};

const deleteMeeting = async (meeting: Meeting) => {
  return await getRepository(Meeting).remove(meeting);
};

const allMeetings = async () => {
  try {
    return await getRepository(Meeting).find();
  } catch (e) {
    return null;
  }
};

export default {
  getMeetingById,
  getMeetingByHost,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  allMeetings
};
