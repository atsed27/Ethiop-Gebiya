import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const kEy =
  'pk_test_51OGNW1FH7zgKERAJkyDaNGlXVOei0qeT20URg24F8f2ynpSOvGIn1Jq6PZKOGKbjQ5yJ53QUhfa6E6Sm4c1AUiaZ00xfjavCU2';

function Stripe() {
  const [stripeToken, setStripeToke] = useState(null);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();

  console.log(user);
  console.log(cart);
  const onToken = (token) => {
    console.log(token);
    setStripeToke(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = axios.post(
          'https://e-gebiya-k75e.onrender.com/api/pay/stripe',
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        console.log(res);
        navigation('/success', { data: res.data });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [cart.total, navigation, stripeToken]);
  return (
    <div className="flex items-center justify-center h-screen">
      {stripeToken ? (
        <span>please with it is processing....</span>
      ) : (
        <StripeCheckout
          name={user.currentUser.username}
          image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
          description="Foe Gebiya"
          amount={cart.total * 100}
          currency="USD"
          shippingAddress
          billingAddress
          token={onToken}
          stripeKey={kEy}
        >
          <button className="px-3 py-2 text-xl text-white bg-blue-700 rounded-lg">
            Pay
          </button>
        </StripeCheckout>
      )}
    </div>
  );
}

export default Stripe;
