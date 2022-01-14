import * as express from 'express';

import userAuth from './user/auth.route';
import meeting from './meeting/meeting.route';

const router = express.Router();

router.use('/user/auth', userAuth);
router.use('/meetings/', meeting);

export default router;
