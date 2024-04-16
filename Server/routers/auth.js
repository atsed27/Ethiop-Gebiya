import express from 'express';
import { signIn, SignOut, signUp } from '../controllers/auth.js';

const router = express.Router();

//sign up
router.post('/signup', signUp);

//sign in
router.post('/signIn', signIn);

//sign out
router.get('/signOut', SignOut);

export default router;
