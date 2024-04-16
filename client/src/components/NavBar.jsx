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
  padding: 4px;
  @media only screen and (max-width: 630px) {
    width: 80px;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  @media only screen and (max-width: 630px) {
    font-size: 24px;
    font-weight: 500;
  }
  @media only screen and (max-width: 430px) {
    font-size: 20px;
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
  margin-left: 10px;
`;
function NavBar() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

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
          <Logo>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              ቅዳሜ ገብያ.
            </Link>
          </Logo>
        </Center>
        <Right>
          {user.currentUser ? (
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <MenuItem>LogOut</MenuItem>
            </Link>
          ) : (
            <>
              <Link
                to="/signup"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MenuItem>Register</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MenuItem>SignIn</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              {cart.quantity > 0 ? (
                <Number>{cart.quantity}</Number>
              ) : (
                <Number></Number>
              )}
              <Shopping size={25} />
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
