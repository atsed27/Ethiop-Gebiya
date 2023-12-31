import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';

const TContainer = styled.div``;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const TitleD = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 24px;
`;

function Products({ category, filters, sort }) {
  const [products, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://e-gebiya-k75e.onrender.com/api/product/get?category=${category}`
            : 'https://e-gebiya-k75e.onrender.com/api/product/get'
        );

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [category]);
  useEffect(() => {
    category &&
      setFilterProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);
  useEffect(() => {
    if (sort === 'Newest') {
      setFilterProduct((prv) =>
        [...prv].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilterProduct((prv) => [...prv].sort((a, b) => a.price - b.price));
    } else {
      setFilterProduct((prv) => [...prv].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <TContainer>
      <TitleD>Popular Products :</TitleD>
      <Container>
        {category
          ? filterProduct.map((items) => (
              <Product key={items._id} items={items} />
            ))
          : products
              .slice(0, 8)
              .map((items) => <Product key={items._id} items={items} />)}
      </Container>
    </TContainer>
  );
}

export default Products;
