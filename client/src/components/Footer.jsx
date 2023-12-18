import React from 'react';
import styled from 'styled-components';
import Facebook from '@mui/icons-material/Facebook';
import Room from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import MailOutlineOutlined from '@mui/icons-material/MailOutlineOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 630px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 630px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 630px) {
    display: none;
  }
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media only screen and (max-width: 430px) {
    background-color: #fff8f8;
  }
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>GBIYA</Logo>
        <Desc>
          Eye bet ethiopa ye Internat megebeyaya webs set sihon .transction with
          santim pay chap ,telabr and strip work ena tetekemubet sewch atrfubet
          selam byale brazeroche Eye bet ethiopa ye Internat megebeyaya webs set
          sihon .transction with santim pay chap ,telabr and strip work ena
          tetekemubet sewch atrfubet selam byale brazeroche
        </Desc>
        <SocialContainer>
          <SocialIcon color="55acef">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55acef">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>cart</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>cart</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>cart</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>cart</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {' '}
          <Room style={{ marginRight: '10px' }} />
          Addis Abeba , LDETA
        </ContactItem>
        <ContactItem>
          {' '}
          <Phone style={{ marginRight: '10px' }} /> +251 91621 33 71
        </ContactItem>
        <ContactItem>
          {' '}
          <MailOutlineOutlined style={{ marginRight: '10px' }} />
          danielnigatu09@gmail.com
        </ContactItem>
        <Payment src="j" alt="pay" />
      </Right>
    </Container>
  );
}

export default Footer;
