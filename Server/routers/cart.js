import express from 'express';
import { verifyToken } from '../middleware/Token/verifyToken.js';
import { addCart, getCart } from '../controllers/carts.js';

const router = express.Router();

//get user cart
router.get('/get/:userId', verifyToken, getCart);

//create cart
router.post('/add', verifyToken, addCart);

export default router;
