import { Router } from 'express';

export const router = Router();

router.get('/signin', (req, res) => {
  res.json({
    message: 'signin',
  });
});
router.get('/signup', (req, res) => {
  res.json({
    message: 'signup',
  });
});
