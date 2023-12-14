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
  return <Container>ትልቅ ነገር ! 1000 ብር በላይ ተዛዞችን በነፃ አናደርሳለን</Container>;
}

export default Announcement;
