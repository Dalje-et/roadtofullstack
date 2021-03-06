import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CookieConsent, { Cookies } from 'react-cookie-consent';

import Header from 'src/components/Header/header';

import './layout.css';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    let header;

    if (location.pathname !== rootPath) {
      header = <Header />;
    }

    return (
      <Wrapper>
        {header}
        <main>
          {children}
        </main>
        <Footer>
          <span>© {new Date().getFullYear()}, Built with lots of ❤️ and ☕ in MG</span>
          <span><Link to="/imprint">Imprint</Link> | <Link to="/privacyPolicy">Privacy Policy</Link></span>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          containerClasses="cookieConsentContainer"
          contentClasses="cookieConsentContent"
          buttonClasses="cookieConsentButton"
          onAccept={() => {
            Cookies.set('gatsby-gdpr-google-analytics', 'true', { expires: 3, path: '/' });
            Cookies.set('gatsby-gdpr-google-tagmanager', 'true', { expires: 3, path: '/' });
          }}
          disableStyles
        >
            I use cookies to understand how you use this site and to improve your experience. I do not use them to show
            you any personalized content and advertising. Read about how I use cookies <Link to="/privacyPolicy">
            here</Link>. No cookies are used until I do not have your consent.
        </CookieConsent>
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
