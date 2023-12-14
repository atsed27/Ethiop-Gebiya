import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import Shopping from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  @media only screen and (max-width: 430px) {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 630px) {
    padding: 10px 0px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  @media only screen and (max-width: 630px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 25px;
  padding: 5px;
  @media only screen and (max-width: 630px) {
    margin-left: 2px;
    padding: 0px;
  }
`;
const Input = styled.input`
  @media only screen and (max-width: 630px) {
    width: 50px;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  @media only screen and (max-width: 630px) {
    font-size: 24px;
    font-weight: 500;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 630px) {
    justify-content: center;
  }
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media only screen and (max-width: 380px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;
const Number = styled.div`
  display: flex;
`;
function NavBar() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log(user.currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search
              style={{
                color: 'gray',
                fontSize: '24px',
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ቅዳሜ ገብያ.</Logo>
        </Center>
        <Right>
          {user.currentUser ? (
            <div>user</div>
          ) : (
            <>
              <MenuItem>Register</MenuItem>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <MenuItem>SignIn</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <MenuItem>
              <Shopping size={25} />
              {cart.quantity > 0 ? (
                <Number>{cart.quantity}</Number>
              ) : (
                <Number></Number>
              )}
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
