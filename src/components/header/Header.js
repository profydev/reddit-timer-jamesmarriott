import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const HeaderContainer = styled.header`
  width: 1440px;
  height: 100px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Logo = styled.img`
  display: block;
  padding-left: 80px;
  padding-top: 32px;
  width: 150px;
  height: 36px;
`;

const Nav = styled.nav`
  position: absolute;
  right: 0px;
  height: 20px;
  padding-right: 80px;
  top: calc(50% - 20px/2 + 0.5px);
`;

const NavList = styled.ul`
  list-style-type: none;
  line-height: 20px;
  margin: 0;
  letter-spacing: 1.25px;
`;

const NavItem = styled.li`
  float: left;
  color: #636363;
  font-size: 16px;
  padding-right: 26px;
  &:first-of-type {
    padding-left: 0px;
  }
  &:last-of-type {
    padding-right: 0px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Nav>
        <NavList>
          <NavItem>Search</NavItem>
          <NavItem>How it works</NavItem>
          <NavItem>About</NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
// - the logo is a SVG
// - the logo is a link that points to the home page
// - How it works and About links point to the corresponding
//  sections on the home page via URL hashes #how-it-works and #about
// - Search link points to the search page with javascript as the default value in the URL
