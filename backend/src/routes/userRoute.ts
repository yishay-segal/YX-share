import { Router } from 'express';
import { login, signup } from './../controllers/authController';

const router = Router();

router.post('/users/signup', signup);
router.post('/users/login', login);

export default router;
