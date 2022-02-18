import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="./asssets/logo.svg" alt="logo"/>
      </Link>
    </header>
  );
}

export default Header;
// - the logo is a SVG
// - the logo is a link that points to the home page
// - How it works and About links point to the corresponding
//  sections on the home page via URL hashes #how-it-works and #about
// - Search link points to the search page with javascript as the default value in the URL
