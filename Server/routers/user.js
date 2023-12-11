import express from 'express';
import { deleteUser, getAllUser, getUser, update } from '../controllers/users.js';
import { verifyToken } from '../middleware/Token/verifyToken.js';

const router = express.Router();

//Get user
router.get('/get/:id', verifyToken, getUser);

//Get all user
router.get('/get', verifyToken, getAllUser);

//update user
router.put('/update/:id', verifyToken, update);

//delete user
router.delete('/delete/:id', verifyToken, deleteUser);

export default router;
