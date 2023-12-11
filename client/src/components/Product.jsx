import React from 'react';
import styled from 'styled-components';
import Shopping from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import pp from '../img/da.jpg';
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  z-index: 2;
  height: 75%;
  width: 80%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #edf5f5;
    transform: scale(1.1);
  }
`;

function Product({ items }) {
  return (
    <Container>
      <Image src={items.img} alt={items._id} />
      <Info>
        <Icon>
          <Shopping />
        </Icon>
        <Icon>
          <Link to={`/product/${items._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
