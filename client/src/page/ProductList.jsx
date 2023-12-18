import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  @media only screen and (max-width: 430px) {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;
const FilterText = styled.span`

  font-size: 20px;
  font-weight: 600
  margin-right: 20px;
  @media only screen and (max-width: 630px) {
    margin: 0px;
  }
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 15px;
  margin-left: 10px;
  @media only screen and (max-width: 430px) {
    margin: 10px 0px;
  }
`;
const Option = styled.option``;
function ProductList() {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title> {category} </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option>Color</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>Xl</Option>
            <Option>2Xl</Option>
          </Select>
        </Filter>
        <Filter>
          {' '}
          <FilterText>Sort Product:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="des">Price (des)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
