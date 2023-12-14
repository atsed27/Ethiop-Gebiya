import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Pay() {
  const cart = useSelector((state) => state.cart);
  const chapaClick = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 1000000);
      const randomString = 'daniel-chap' + randomNumber;
      const res = await axios.post(
        'https://e-gebiya-k75e.onrender.com/api/pay/chapa',
        {
          amount: cart.total,
          tx_ref: randomString,
        }
      );
      //console.log(JSON.parse(res.data));
      let x = JSON.parse(res.data);
      let url = x.data.checkout_url;
      window.location.href = url;
      const res1 = await axios.post(
        'https://e-gebiya-k75e.onrender.com/api/pay/chapa/vi',
        {
          tx_ref: randomString,
        }
      );
      console.log(res1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="mb-5">
          <button className="px-3 py-2 text-xl text-white bg-blue-700 rounded-lg">
            <Link to={'/stripe'}>Pay With Stripe</Link>
          </button>
        </div>
        <div className="">
          <button
            onClick={chapaClick}
            className="px-3 py-2 text-xl text-white bg-green-700 rounded-lg"
          >
            Pay With Chapa
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
