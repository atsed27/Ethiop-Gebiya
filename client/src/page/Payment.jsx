import React from 'react';
import styled from 'styled-components';
import stripe from '../img/stripe.jpg';
import chapa from '../img/chapa.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  padding: 20px 15px;
`;

const Stripe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  @media only screen and (max-width: 630px) {
    flex-direction: columns;
  }
`;
const Chapa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  border-radius: 20px;
  height: 50px;
  @media only screen and (max-width: 630px) {
    height: 50px;
    border-radius: 10px;
  }
`;
const ImageC = styled.img`
  border-radius: 20px;
  height: 50px;

  @media only screen and (max-width: 630px) {
    height: 50px;
    border-radius: 10px;
  }
`;
const Title = styled.button`
  border-radius: 10px;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;
function Payment() {
  const cart = useSelector((state) => state.cart);
  const chapaClick = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 1000000);
      const randomString = 'daniel-chap' + randomNumber;
      console.log(randomString);
      const res = await axios.post(
        'https://e-gebiya-k75e.onrender.com/api/pay/chapa',
        {
          amount: cart.total,
          tx_ref: randomString,
        }
      );

      let x = JSON.parse(res.data);
      let url = x.data.checkout_url;
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Stripe>
            <Image src={stripe} alt="dani" />
            <Title>Pay with Stripe</Title>
          </Stripe>
        </Link>
        <Chapa>
          <ImageC src={chapa} />
          <Title onClick={chapaClick}>Pay with Chapa</Title>
        </Chapa>
      </Wrapper>
    </Container>
  );
}

export default Payment;
