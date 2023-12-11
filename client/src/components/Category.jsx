import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 630px) {
    padding: 0px;
    flex-direction: column;
  }
`;

function Category() {
  return (
    <Container>
      {categories.map((items) => (
        <CategoryItem items={items} key={items.id} />
      ))}
    </Container>
  );
}

export default Category;
