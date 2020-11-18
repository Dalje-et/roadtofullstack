import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';

import './layout.css';

class ImprintPage extends React.Component {
  render() {
    const siteTitle = 'Imprint';

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={siteTitle}
            keywords={[`blog`, `developer`, `fullstack`, `advice`]}
          />
          <div className="imprint">
            <h1>Legal Disclosure</h1>
            <p>Information in accordance with Section 5 TMG</p>
            <p>
              Author: Daljeet Sandu <br />
            </p>
            <h2>Contact Information</h2>
            <p>
              E-Mail: daljeet-sandu@hotmail.de <br />
              Internet address: roadtofullstack.com <br />

              Further contact information available on request.
            </p>
            <h2>Disclaimer</h2>
            <p>
              Accountability for content<br />
              The contents of our pages have been created with the utmost care. However, we cannot guarantee the
              contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore
              responsible for our own content on these web pages. In this matter, please note that we are not obliged
              to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to
              illegal activity. Our obligations to remove or block the use of information under generally applicable
              laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
            </p>
            <p>
              Accountability for links<br />
              Responsibility for the content of external links (to web pages of third parties) lies solely with the
              operators of the linked pages. No violations were evident to us at the time of linking. Should any legal
              infringement become known to us, we will remove the respective link immediately.
            </p>
            <p>
              Copyright<br />
              Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law,
              every form of utilizing, reproducing or processing works subject to copyright protection on our web pages
              requires the prior consent of the respective owner of the rights. Individual reproductions of a work are
              only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may
              violate copyright laws.
            </p>
          </div>
        </Layout>
      </>
    );
  }
}

export default ImprintPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
