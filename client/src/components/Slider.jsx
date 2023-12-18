import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import { slidersItems } from '../data';
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 630px) {
    height: 70vh;
  }
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.dir === 'left' && '10px'};
  right: ${(props) => props.dir === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  @media only screen and (max-width: 630px) {
    display: flex;
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  border-radius: 20px;
  display: flex;
  margin: auto;
  margin-top: 100px;
  padding-left: 10px;
  @media only screen and (max-width: 630px) {
    width: 100%;
    height: 60%;
    padding-left: 0px;
    margin-top: 20px;
    border-radius: 10px;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media only screen and (max-width: 630px) {
    display: none;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 630px) {
    display: none;
  }
`;
const Des = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  @media only screen and (max-width: 1000px) {
    font-size: 15px;
    letter-spacing: 2px;
    margin: 20px 0px;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slideIndex);
  const handleClick = (dir) => {
    if (dir === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow dir="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slidersItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} alt="ma" />
            </ImageContainer>
            <InfoContainer>
              <Title> {item.title} </Title>
              <Des>{item.desc}</Des>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow dir="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
