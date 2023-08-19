import React from 'react';
import { styled } from 'styled-components';
import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";

const Main = () => {
    return (
        <MainGrid>
            <SectionGrid>
            <H2>반응형 사이트 컨텐츠</H2>
                <LeftContent />
                <MiddleContent />
                <RightContent />
            </SectionGrid>
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