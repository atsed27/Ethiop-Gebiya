import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },

    category: {
      type: [String],
      default: [],
    },
    size: {
      type: [String],
      default: [],
    },
    color: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Product', productSchema);
