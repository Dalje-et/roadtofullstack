import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography.js';
import Header from 'src/components/Header/header';


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    let header;

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      );
    }

    return (
      <Wrapper>
        <Header />
        <main>
          {children}
        </main>
        <Footer>
          <span>© {new Date().getFullYear()}, Built with lots of ❤️ and ☕ in MG</span>
          <span><Link to="/imprint">Imprint</Link> | <Link to="/privacyPolicy">Privacy Policy</Link></span>
        </Footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  background: white;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
