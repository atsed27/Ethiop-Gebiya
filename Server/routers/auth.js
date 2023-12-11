import express from 'express';
import { signIn, signUp } from '../controllers/auth.js';

const router = express.Router();

//sign up
router.post('/signup', signUp);

//sign in
router.post('/signIn', signIn);

export default router;
