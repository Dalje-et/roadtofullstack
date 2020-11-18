import React from 'react';
import { Link } from 'gatsby';


import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" rel="next" className="logo-link">
          Road to <b>Fullstack</b>
        </Link>
      </div>
    </div>
  );
}
