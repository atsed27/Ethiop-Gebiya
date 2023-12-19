import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import img from '../img/man.png';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 630px) {
    padding: 10px;
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  @media only screen and (max-width: 630px) {
    height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media only screen and (max-width: 630px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Pay = styled.span`
  font-weight: 200;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  @media only screen and (max-width: 630px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
font-size:20px
font-weight:200`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 4px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 3px 8px;
`;

const Option = styled.option``;
const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 630px) {
    width: 100%;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  margin: 0px 5px;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 15px;
  background-color: white;
  border: 2px solid teat;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function Products() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const disPatch = useDispatch();
  useEffect(() => {
    const productDetail = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9327/api/product/get/${id}`
        );

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    productDetail();
  }, [id]);
  console.log(product, color, size);
  const handelQuantity = (type) => {
    if (type === 'des') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handelCart = () => {
    if (color === '') {
      return alert('please add color');
    }
    if (size === '') {
      return alert('please add size');
    }
    disPatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
        <InfoContainer>
          <Title> {product.title} </Title>
          <Desc>
            Eye bet ethiopa ye Internat megebeyaya webs set sihon .transction
            with santim pay chap ,telabr and strip work ena tetekemubet sewch
            atrfubet selam byale brazeroche Eye bet ethiopa ye Internat
            megebeyaya webs set sihon .transction with santim pay chap ,telabr
            and strip work ena tetekemubet sewch atrfubet selam byale brazeroche
          </Desc>
          <Pay>$ {product.price} </Pay>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

              {product.color?.map((color) => (
                <FilterColor
                  color={color}
                  key={color}
                  onClick={() => setColor(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize selected onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((size) => (
                  <Option size={size} key={size}>
                    {size}
                  </Option>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handelQuantity('des')} />
              <Amount> {quantity} </Amount>
              <Add onClick={() => handelQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handelCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default Products;
