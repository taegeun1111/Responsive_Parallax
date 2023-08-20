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
  display: block;
  text-align: right;
`

const Anchor = styled.a`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: var(--black);
`
