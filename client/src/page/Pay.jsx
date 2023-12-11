import React from 'react';
import { Link } from 'react-router-dom';

function Pay() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="mb-5">
          <button className="px-3 py-2 text-xl text-white bg-blue-700 rounded-lg">
            <Link to={'/stripe'}>Pay With Stripe</Link>
          </button>
        </div>
        <div className="">
          <button className="px-3 py-2 text-xl text-white bg-green-700 rounded-lg">
            Pay With Chapa
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
