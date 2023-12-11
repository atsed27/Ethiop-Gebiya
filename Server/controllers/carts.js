import { CreateError } from '../middleware/Error/error.js';
import Cart from '../model/Cart.js';

export const getCart = async (req, res, next) => {
  try {
    let findCart = await Cart.findOne({ userId: req.params.userId });
    if (!findCart) return next(CreateError(404, 'product is not found'));
    if (req.user.id === findCart.userId || req.isAdmin) {
      res.status(200).json(findCart);
    } else return next(CreateError(403, 'you can not  see this'));
  } catch (error) {
    next(error);
  }
};

//get all cart
export const getAllCart = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const cart = await Cart.find();
      res.status(200).json(cart);
    } else {
      return next(CreateError(403, 'only admin access this carts'));
    }
  } catch (error) {
    next(error);
  }
};

//add ro cart
export const addCart = async (req, res, next) => {
  try {
    const newCart = new Cart(req.body);
    await newCart.save();
    res.status(200).json('cart is added successfully');
  } catch (error) {
    next(error);
  }
};

//update the cart
export const update = async (req, res, next) => {
  try {
    const findCart = await Cart.findById(req.params.id);
    if (!findCart) return next(CreateError(404, 'cart  is not found'));
    if (req.user.id === findCart.userId) {
      const update = await Cart.findByIdAndUpdate(
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
      return next(CreateError(403, 'update only by own user'));
    }
  } catch (error) {
    next(error);
  }
};

//delete cart
export const deleteCart = async (req, res, next) => {
  try {
    const findCart = await Cart.findById(req.params.id);
    if (!findCart) return next(CreateError(404, 'cart  is not found'));
    if (req.user.id === findCart.userId) {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json('cart is deleted');
    } else {
      return next(CreateError(403, 'delete only by own user'));
    }
  } catch (error) {
    next(error);
  }
};
