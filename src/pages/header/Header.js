import React from "react";
import { styled } from "styled-components";
import Article from "./Article";
import Nav from "./Nav";
import {flexBetween, positionFixed} from "../../styles/mixin";

const Header = () => {
  return (
    <HeaderMainGrid>

      <HeaderInner>
         <HeaderLogo>
           <H1>
             <Anchor><Em>React.js</Em></Anchor>
           </H1>
         </HeaderLogo>
      </HeaderInner>

      <Nav>Nav</Nav>
      <Article>Art</Article>
    </HeaderMainGrid>
  );
};

export default Header;

const HeaderMainGrid = styled.header`
  z-index: 10000;
  ${positionFixed}
`

const HeaderInner = styled.div`
  background-color: rgba(116,99,99,0.1);
  backdrop-filter: blur(15px);
  padding: 1rem;
  ${flexBetween}
`;

const HeaderLogo = styled.div`
  font-size: 0.9rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
`

const H1 = styled.h1`
`

const Anchor = styled.a.attrs({
  href : "/"
})`
  color: var(--black);
  text-decoration: none;
`

const Em = styled.em`
  font-size: 10px;
  display: block;
  color: var(--black200);
`
