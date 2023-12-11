import React from 'react';

function Pay() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="mb-5">
          <button className="bg-blue-700 py-2 px-3 text-xl text-white rounded-lg">
            Pay With Stripe
          </button>
        </div>
        <div className="">
          <button className="bg-green-700 py-2 px-3 text-xl text-white rounded-lg">
            Pay With Chapa
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
