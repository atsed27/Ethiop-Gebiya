import React from 'react';
import Send from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media only screen and (max-width: 430px) {
    font-size: 60px;
  }
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media only screen and (max-width: 430px) {
    text-align: center;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgrey;
  @media only screen and (max-width: 430px) {
    width: 80%;
  }
`;
const Input = styled.input`
  height: 100%;
  border: none;
  padding-left: 10px;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  height: 100%;
  cursor: pointer;
`;
function NewsLetter() {
  return (
    <Container>
      <Title> NewsLetter</Title>
      <Description>
        Get timely updates from your favorite products.{' '}
      </Description>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
