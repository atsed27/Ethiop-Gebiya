import express from 'express';
import { verifyToken } from '../middleware/Token/verifyToken.js';
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  update,
} from '../controllers/products.js';

const router = express.Router();

//get product
router.get('/get/:id', getProduct);

//get product all
router.get('/get', getAllProduct);

//add product
router.post('/add', verifyToken, addProduct);

//update product
router.put('/update/:id', verifyToken, update);

//delete product
router.delete('/delete/:id', verifyToken, deleteProduct);

export default router;
