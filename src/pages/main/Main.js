import React from 'react';
import { styled } from 'styled-components';
import Intro from "./intro/Intro";
import IntroText from "./intro/IntroText";

const Main = () => {
    return (
        <MainGrid>
          <Intro />
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