import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const TContainer = styled.div``;
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 630px) {
    padding: 0px;
    flex-direction: column;
  }
`;

const TitleD = styled.div`
  margin-bottom: 10px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 24px;
`;

function Category() {
  return (
    <TContainer>
      <TitleD>Popular Category : </TitleD>
      <Container>
        {categories.map((items) => (
          <CategoryItem items={items} key={items.id} />
        ))}
      </Container>
    </TContainer>
  );
}

export default Category;
