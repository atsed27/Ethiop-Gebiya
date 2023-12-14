import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productsId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: { type: String },
    state: { type: String, default: 'pending' },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model('Order', ordersSchema);
