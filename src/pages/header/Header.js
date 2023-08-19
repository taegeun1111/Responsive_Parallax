import React from "react";
import { styled } from "styled-components";
import Article from "./Article";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Title>타이틀</Title>
      <Nav>Nav</Nav>
      <Article>Art</Article>
    </>
  );
};

export default Header;

const Title = styled.h1``;
