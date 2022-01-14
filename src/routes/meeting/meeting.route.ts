import express from 'express';

import meetingController from '../../controllers/meeting.controller';
import meetingSchema from '../../constants/schema/meeting.schema';

const router = express.Router();
import { celebrate } from 'celebrate';

router.get(
  '/',
  meetingController.allMeetings,
)

router.post(
  '/',
  celebrate(meetingSchema.create),
  meetingController.createMeeting,
);

router.get(
  '/:id',
  meetingController.getMeetingById,
);

router.put(
  '/:id',
  celebrate(meetingSchema.update),
  meetingController.updateMeeting,
);

router.delete(
  '/:id',
  meetingController.deleteMeeting,
);

export default router;
