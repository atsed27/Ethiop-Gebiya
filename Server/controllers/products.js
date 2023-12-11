import { CreateError } from '../middleware/Error/error.js';
import Product from '../model/Product.js';

export const getProduct = async (req, res, next) => {
  try {
    const findProduct = await Product.findById(req.params.id);
    if (!findProduct) return next(CreateError(404, 'product is not found'));
    res.status(200).json(findProduct);
  } catch (error) {
    next(error);
  }
};
export const getAllProduct = async (req, res, next) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    if (qNew) {
      const findProduct = await Product.find().sort({ createdAt: -1 }).limit(5);
      res.status(200).json(findProduct);
    } else if (qCategory) {
      const findProduct = await Product.find({
        category: {
          $in: [qCategory],
        },
      });
      res.status(200).json(findProduct);
    } else {
      const findProduct = await Product.find();
      res.status(200).json(findProduct);
    }
  } catch (error) {
    next(error);
  }
};
export const addProduct = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const newProduct = new Product(req.body);
      const product = await newProduct.save();
      res.status(200).json('product is added successfully');
    } else {
      next(CreateError(403, 'create post only admin'));
    }
  } catch (error) {
    next(error);
  }
};

//update the product
export const update = async (req, res, next) => {
  try {
    const findProduct = await Product.findById(req.params.id);
    if (!findProduct) return next(CreateError(404, 'product  is not found'));
    if (req.user.isAdmin) {
      const update = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(update);
    } else {
      next(CreateError(403, 'update only by admin'));
    }
  } catch (error) {
    next(error);
  }
};

//delete product
export const deleteProduct = async (req, res, next) => {
  try {
    const findProduct = await Product.findById(req.params.id);
    if (!findProduct) return next(CreateError(404, 'product  is not found'));
    if (req.user.isAdmin) {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json('product is deleted');
    } else {
      next(CreateError(403, 'delete only by admin'));
    }
  } catch (error) {
    next(error);
  }
};
