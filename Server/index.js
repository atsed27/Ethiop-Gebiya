import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.js';
import userRouter from './routers/user.js';
import productRouter from './routers/product.js';
import cartRouter from './routers/cart.js';
import orderRouter from './routers/order.js';
import stripeRouter from './router/stripe.js';
const app = express();

//dotenv config
dotenv.config();

// mongo db connection
const connect = () => {
  mongoose
    .connect(process.env.DataBase)
    .then(() => {
      console.log('mongo db is connect');
    })
    .catch((error) => {
      throw error;
    });
};

//router on based express

app.use(
  cors({
    origin: 'https://e-gebiya.vercel.app',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get('/', async (req, res) => {
  res.send('server is deploy');
});
//Router
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/pay', stripeRouter);

//error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message =
    err.message || "something wrong! their don't no servers this error ";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

//Listen to server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log('port is connect at ' + port);
});
