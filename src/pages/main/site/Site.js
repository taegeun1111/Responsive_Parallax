import React from 'react';
import styled from "styled-components";
import SiteList from "../skill/SiteList";

const Site = () => {
  return (
    <SiteSection>
      <SiteInner>
          <SiteTitle>
            Site Coding
            <Em>나의 작업물</Em>
          </SiteTitle>
          <SiteList />
      </SiteInner>
    </SiteSection>
  );
};

export default Site;

const SiteSection = styled.section`
`

const SiteInner = styled.div`
  padding: 16px;
`

const SiteTitle = styled.h2`
  position: sticky;
  top: 70px;
  left: 0;
  width: 70%;
  height: 5vw;
  font-size: 4vw;
  font-weight: 900;
  line-height: 1.6;
  font-family: var(--mainKor-font);
  text-transform: uppercase;
  color: var(--black100);
  border-bottom: 0.4vw solid var(--black100);
  margin-bottom: 100px;

  @media (max-width: 800px){
    width: 100%;
    margin-bottom: 10vw;
    font-size: 30px;
    height: auto;
    top: 68px;
    z-index: 1000;
    background-color: var(--mainBg-color);
  }
`

const Em = styled.em`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2;
`