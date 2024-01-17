import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
  error: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity = state.quantity + action.payload.quantity;
      state.products.push(action.payload);
      state.total =
        state.total + action.payload.price * action.payload.quantity;
    },
    addFiler: (state) => {
      state.error = true;
    },
    RestProduct: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.error = false;
    },
  },
});

export const { addProduct, addFiler, RestProduct } = cartSlice.actions;

export default cartSlice.reducer;
