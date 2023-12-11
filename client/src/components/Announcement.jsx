import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  font-weight: bold;
`;
function Announcement() {
  return <Container>Super Deal ! Free Shopping On Order Over $50</Container>;
}

export default Announcement;
