import React from 'react';
import styled from "styled-components";
import {introText} from "../../../model/data";
import about from "../../../assets/img/about.jpg"
const IntroText = () => {
  return (
    <IntroTextGrid>
      <Text>
        <div>{introText.desc[0]}</div>
        <div>{introText.desc[1]}</div>
        <div>{introText.desc[2]}</div>
      </Text>
      <Img>
        <MainImg src={about}/>
      </Img>
    </IntroTextGrid>
  );
};

export default IntroText;

const IntroTextGrid = styled.div`
  width: 100%;
  height: 40vh;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const Text = styled.div`
  font-size: 3vw;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  position: relative;
  z-index: 100;
  transition: all 0.3s;
  cursor: all-scroll;

  @media (max-width: 800px) {
    font-size: 24px;
  }
  &:hover{
    opacity: 0;
  }

  & + hover{
    filter: grayscale(0);
  }
`
const Img = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  overflow: hidden;
  filter: grayscale(100%);
  transition: all 0.3s;
  
  @media (max-width: 320px){
    width: 20vh;
    height: 20vh;
  }
  
  &:hover{
    filter: grayscale(0);
  }
`

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  //object-fit: cover;
`