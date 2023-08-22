import React from 'react';
import { styled } from 'styled-components';
import Intro from "./intro/Intro";
import IntroText from "./intro/IntroText";
import Skill from "./skill/Skill";
import Site from "./site/Site";

const Main = () => {
    return (
        <MainGrid>
          <Intro />
          <Skill />
          <Site />
        </MainGrid>
    );
};

export default Main;

const MainGrid = styled.main`
`
const SectionGrid = styled.section`
`

const H2 = styled.h2`
`