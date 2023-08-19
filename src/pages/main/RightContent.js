import React from 'react';
import {styled} from "styled-components";

const RightContent = () => {
    return (
        <Section>
            <H3>반응형 사이트 가운데 컨텐츠</H3>
            <Article><H4>반응형 사이트 왼쪽 컨텐츠</H4></Article>
            <Article><H4>반응형 사이트 왼쪽 컨텐츠</H4></Article>
            <Article><H4>반응형 사이트 왼쪽 컨텐츠</H4></Article>
        </Section>
    );
};

export default RightContent;

const Section = styled.section`
`

const H3 = styled.h3`
`

const Article = styled.article`
`

const H4 = styled.h4`
`