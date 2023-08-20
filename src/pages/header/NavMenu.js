import React from 'react';
import {headerNav} from "../../model/headerNavData";
import styled from "styled-components";

const NavMenu = () => {
  return (
    (headerNav.map((nav, index) => (
        <Li key={index}>
          <Anchor href={nav.url}>{nav.title}</Anchor>
        </Li>
      )))
  );
};

export default NavMenu;

const Li = styled.li`
  @media (max-width: 800px) {
    display: block;
    text-align: right;
  }
  display: inline;
`

const Anchor = styled.a`
  @media (max-width: 800px) {
    display: inline-block;
    padding: 10px;
  }
  text-decoration: none;
  color: var(--black);
  text-transform: uppercase;
  font-size: 14px;
  position: relative;
  padding: 14px;

  &::before {
    content: '';
    width: calc(100% - 28px);
    height: 1px;
    background-color: var(--black);
    position: absolute;
    left: 14px;
    bottom: 10px;
    transform: scaleX(0);
    transition: all 0.3s;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`
