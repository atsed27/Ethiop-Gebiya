import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Pay() {
  const chapaClick = async () => {
    try {
      const res = await axios.post(
        'https://e-gebiya-k75e.onrender.com/api/pay/chapa'
      );
      //console.log(JSON.parse(res.data));
      let x = JSON.parse(res.data);
      let url = x.data.checkout_url;
      window.location.href = url;
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
