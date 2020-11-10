import React from 'react';
import { Link } from "gatsby"

import { FaBars } from "react-icons/fa"

import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" rel="next" className="logo-link" style={{ textDecoration: 'none' }}>
          <b>Road to Fullstack</b>
        </Link>
      </div>
      <div className="menu">
        <FaBars />
      </div>
    </div>
  )
}
