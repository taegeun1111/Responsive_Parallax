import React from "react";
import { styled } from "styled-components";
import Article from "./Article";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderGrid>

      <HeaderMenu>
          <Anchor>Blog</Anchor>
          <Anchor>Github</Anchor>
          <Anchor>WebStandard</Anchor>
      </HeaderMenu>

      <Nav>Nav</Nav>
      <Article>Art</Article>
    </HeaderGrid>
  );
};

export default Header;

const HeaderGrid = styled.header`
`

const HeaderMenu = styled.div``;

const Anchor = styled.a`
`
