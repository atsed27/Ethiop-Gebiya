import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div``;

const Button = styled.div`
  padding: 12px 10px;
  background-color: green;
  border-radius: 10px;
`;
const Title = styled.span``;
const BR = styled.br``;
function Success() {
  return (
    <Container>
      <Wrapper>
        <Button>
          <Link to="/">Successful</Link>
        </Button>
        <Title>
          Your order being in processing . <BR />
          Thanks you fro choosing Kidame Gebiya...
        </Title>
      </Wrapper>
    </Container>
  );
}

export default Success;
