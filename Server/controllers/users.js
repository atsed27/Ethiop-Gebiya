import { CreateError } from '../middleware/Error/error.js';
import User from '../model/User.js';

export const getUser = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const findUser = await User.findById(req.params.id);
      if (!findUser) return next(CreateError(404, 'user is not found'));
      const { password, ...other } = findUser._doc;
      res.status(200).json(other);
    } else return next(CreateError(403, 'only access admin'));
  } catch (error) {
    next(error);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const findUser = await User.find();
      res.status(200).json(findUser);
    } else return next(CreateError(403, 'only access admin'));
  } catch (error) {
    next(error);
  }
};
export const update = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    if (!findUser) return next(CreateError(404, 'user is not found'));
    if (req.params.id === req.user.id || req.user.isAdmin) {
      const update = await User.findByIdAndUpdate(
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
      return next(CreateError(403, 'you can update only your account'));
    }
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    if (!findUser) return next(CreateError(404, 'user is not found'));
    if (req.params.id === req.user.id || req.user.isAdmin) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json(' account is deleted');
    } else {
      return next(CreateError(403, 'you can delete only your account'));
    }
  } catch (error) {
    next(error);
  }
};
