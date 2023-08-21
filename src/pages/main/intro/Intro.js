import React from 'react';
import styled from "styled-components";
import {introText} from "../../../model/data";
import IntroLines from "./IntroLines";
import IntroText from "./IntroText";

const Intro = () => {
  return (
    <IntroSection>
      <IntroInner>
        <IntroTitle>
          {introText.title}
        </IntroTitle>
        <IntroLines/>

        <IntroText />
      </IntroInner>
    </IntroSection>
  );
};

export default Intro;

const IntroSection = styled.section`
  height: 100vh;
  padding: 16px;
`

const IntroInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  //padding: 16px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`
const IntroTitle = styled.div`
  font-size: 10vw;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 800;
  white-space: nowrap;
  text-indent: -0.5vw;
  letter-spacing: -0.3vw;
  @media (max-width: 320px) {
    display: none;
  }
`
