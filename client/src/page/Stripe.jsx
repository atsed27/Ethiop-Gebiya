import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RestProduct } from '../redux/cartRedux';

const kEy =
  'pk_test_51OGNW1FH7zgKERAJkyDaNGlXVOei0qeT20URg24F8f2ynpSOvGIn1Jq6PZKOGKbjQ5yJ53QUhfa6E6Sm4c1AUiaZ00xfjavCU2';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Button = styled.button`
  padding: 12px 10px;
  font size:20px;
  color:white;
  background-color:blue;
  border:none;
  border-radius:10px;

`;
function Stripe() {
  const [stripeToken, setStripeToke] = useState(null);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();
  const dispatch = useDispatch();
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
        dispatch(RestProduct());
        navigation('/success', { data: res.data });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [cart.total, navigation, stripeToken]);
  return (
    <Container>
      {stripeToken ? (
        <span>please with it is processing....</span>
      ) : (
        <StripeCheckout
          name={user.currentUser?.username}
          image="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // the pop-in header image (default none)
          description="Foe Gebiya"
          amount={cart.total * 100}
          currency="USD"
          shippingAddress
          billingAddress
          token={onToken}
          stripeKey={kEy}
        >
          <Button className="px-3 py-2 text-xl text-white bg-blue-700 rounded-lg">
            Pay Now
          </Button>
        </StripeCheckout>
      )}
    </Container>
  );
}

export default Stripe;
