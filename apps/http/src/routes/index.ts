import { Router } from 'express';
import { spaceRouter } from './space';
import { adminRouter } from './admin';
import { userRouter } from './user';

export const router = Router();

router.post('/signin', (req, res) => {
  res.json({
    message: 'signin',
  });
});
router.post('/signup', (req, res) => {
  res.json({
    message: 'signup',
  });
});

router.get('/elements', (req, res) => {});

router.get('/avatars', (req, res) => {});

router.use('/user', userRouter);
router.use('/space', spaceRouter);
router.use('/admin', adminRouter);
