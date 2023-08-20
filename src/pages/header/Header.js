import React, {useState} from "react";
import {styled} from "styled-components";
import {flexBetween, positionFixed} from "../../styles/mixin";
import NavMenu from "./NavMenu";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  }
  return (
    <HeaderMainGrid>

      <HeaderInner>
        <HeaderLogo>
          <H1>
            <Anchor>
              portfolio
              <Em>
                React.js
              </Em>
            </Anchor>
          </H1>
        </HeaderLogo>

        <Navigation
          role="navigation"
          aria-label="메인메뉴"
          className={show ? "show" : ""}
        >
          <Ul>
            <NavMenu/>
          </Ul>
        </Navigation>


        <HeaderNavMobile
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <Span show={show}></Span>
        </HeaderNavMobile>
      </HeaderInner>
    </HeaderMainGrid>
  );
};

export default Header;

const HeaderMainGrid = styled.header`
  z-index: 10000;
  ${positionFixed}
`

const HeaderInner = styled.div`
  background-color: rgba(116, 99, 99, 0.1);
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
  font-size: 1.6rem;
`

const Anchor = styled.a.attrs({
  href: "/"
})`
  color: var(--black);
  text-decoration: none;
`

const Em = styled.em`
  font-size: 10px;
  display: block;
  color: var(--black200);
`

const Navigation = styled.nav`
  @media (max-width: 800px) {
    display: none;

    &.show {
      display: block;
    }

  }
`

const Ul = styled.ul`
  @media (max-width: 800px) {
    display: block;
    position: absolute;
    right: 0;
    top: 72px;
    background-color: rgba(116, 99, 99, 0.1);
    backdrop-filter: blur(15px);
    z-index: 10000;
    min-width: 150px;
    padding: 20px 0;
  }

`

const HeaderNavMobile = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: block;
  }
`

const Span = styled.span`
  display: block;
  width: 40px;
  height: 2px;
  background-color: var(--black);
  margin-top: 19px;
  position: relative;

  &::before {
    content: "";
    width: 40px;
    height: 2px;
    background-color: var(--black);
    position: absolute;
    right: 0;
    top: 6px;
    transition: width 0.3s;
  }

  &::after {
    content: "";
    width: 40px;
    height: 2px;
    background-color: var(--black);
    position: absolute;
    left: 0;
    bottom: 6px;
    transition: width 0.3s;
  }

  @media (max-width: 800px) {
    ${props =>
            props.show &&
            `
      &::before {
        width: 20px;
      }

      &::after {
        width: 20px;
      }
    `}
  }
`





