import Orders from '../model/Orders.js';
import { CreateError } from '../middleware/Error/error.js';

//get order
export const getOrder = async (req, res, next) => {
  try {
    let findOrder = await Orders.find({ userId: req.params.userId });
    if (!findOrder) return next(CreateError(404, 'product is not found'));
    if (req.user.id === findOrder.userId || req.isAdmin) {
      res.status(200).json(findOrder);
    } else return next(CreateError(403, 'you can not  see this'));
  } catch (error) {
    next(error);
  }
};
//get all orders
export const getAllOrders = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const order = await Orders.find();
      res.status(200).json(order);
    } else {
      return next(CreateError(403, 'only admin access this orders'));
    }
  } catch (error) {
    next(error);
  }
};
//create orders
export const addOrder = async (req, res, next) => {
  try {
    const newOrder = new Orders(req.body);
    await newOrder.save();
    res.status(200).json('cart is added successfully');
  } catch (error) {
    next(error);
  }
};

//update order
export const update = async (req, res, next) => {
  try {
    const findOrder = await Orders.findById(req.params.id);
    if (!findOrder) return next(CreateError(404, 'order  is not found'));
    if (req.user.id === findOrder.userId || req.isAdmin) {
      const update = await Orders.findByIdAndUpdate(
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

//delete order
export const deleteOrder = async (req, res, next) => {
  try {
    const findOrder = await Orders.findById(req.params.id);
    if (!findOrder) return next(CreateError(404, 'order  is not found'));
    if (req.user.id === findCart.userId || req.user.isAdmin) {
      await Orders.findByIdAndDelete(req.params.id);
      res.status(200).json('order is deleted');
    } else {
      return next(CreateError(403, 'delete only by own user'));
    }
  } catch (error) {
    next(error);
  }
};

//get Monthly income

export const MonthlyIncome = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
