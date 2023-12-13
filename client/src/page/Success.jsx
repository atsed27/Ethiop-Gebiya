import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <button className="px-3 py-2 bg-green-400 rounded-lg">
          <Link to="/">Successful</Link>
        </button>
        <p>
          Your order being in processing . <br />
          Thanks you fro choosing Kidame Gebiya...
        </p>
      </div>
    </div>
  );
}

export default Success;
