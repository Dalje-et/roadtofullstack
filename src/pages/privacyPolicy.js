import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';

import './layout.css';

class PrivacyPolicyPage extends React.Component {
  render() {
    const siteTitle = 'Privacy Policy';

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `developer`, `fullstack`, `advice`]}
        />
        <div className="privacyPolicy">
          <h2>Privacy Policy</h2>
          <p>
            Personal data (usually referred to just as <i>data</i> below) will only be processed by us to the extent
            necessary and for the purpose of providing a functional and user-friendly website, including its contents,
            and the services offered there.
          </p>
          <p>
            Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter
            referred to as the <i>GDPR</i>), <i>processing</i> refers to any operation or set of operations such as
            collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation,
            use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination,
            restriction, erasure, or destruction performed on personal data, whether by automated means or not.
          </p>
          <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose,
            duration, and legal basis for the processing of such data either under our own control or in conjunction
            with others. We also inform you below about the third-party components we use to optimize our website and
            improve the user experience which may result in said third parties also processing data they collect and
            control.
          </p>
          <p>Our privacy policy is structured as follows:</p>
          <p>
            I. Information about us as controllers of your data<br/>
            II. The rights of users and data subjects<br/>
            III. Information about the data processing
          </p>

          <h3>I. Information about us as controllers of your data</h3>
          <p>The party responsible for this website (the <i>controller</i>) for purposes of data protection law is:</p>
          <p>
            <span>Daljeet Sandu</span><br/>
            <span>Aachener Straße 224</span><br/>
            <span>41061 Mönchengladbach</span><br/>
            <span>Germany</span></p>
          <p>
            <span>Email: daljeet-sandu@hotmail.de</span>
          </p>

          <h3>II. The rights of users and data subjects</h3>
          <p>
            With regard to the data processing to be described in more detail below, users and data subjects have the
            right
          </p>
          <ul type="disc">
            <li>
              to confirmation of whether data concerning them is being processed, information about the data being
              processed, further information about the nature of the data processing, and copies of the data (cf. also
              Art. 15 GDPR);
            </li>
            <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
            <li>
              to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if
              further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per
              Art. 18 GDPR;
            </li>
            <li>
              to receive copies of the data concerning them and/or provided by them and to have the same transmitted
              to other providers/controllers (cf. also Art. 20 GDPR);
            </li>
            <li>
              to file complaints with the supervisory authority if they believe that data concerning them is being
              processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).
            </li>
          </ul>
          <p>
            In addition, the controller is obliged to inform all recipients to whom it discloses data of any such
            corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR.
            However, this obligation does not apply if such notification is impossible or involves a disproportionate
            effort. Nevertheless, users have a right to information about these recipients.
          </p>
          <p>
            <strong>
              Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's
              future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to
              data processing for the purpose of direct advertising is permissible.
            </strong></p>

          <h3>III. Information about the data processing</h3>
          <p>
            Your data processed when using our website will be deleted or blocked as soon as the purpose for its
            storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage
            obligations or unless otherwise stipulated below.
          </p>

          <h4>Newsletter</h4>
          <p>
            If you register for our free newsletter, the data requested from you for this purpose, i.e. your email
            address and, optionally, your name and address, will be sent to us. We also store the IP address of your
            computer and the date and time of your registration. During the registration process, we will obtain your
            consent to receive this newsletter and the type of content it will offer, with reference made to this
            privacy policy. The data collected will be used exclusively to send the newsletter and will not be passed
            on to third parties.
          </p>
          <p>The legal basis for this is Art. 6 Para. 1 lit. a) GDPR.</p>
          <p>
            You may revoke your prior consent to receive this newsletter under Art. 7 Para. 3 GDPR with future effect.
            All you have to do is inform us that you are revoking your consent or click on the unsubscribe link
            contained in each newsletter.
          </p>

          <h4>Google Analytics</h4>
          <p>
            We use Google Analytics on our website. This is a web analytics service provided by Google Ireland Limited,
            Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).
          </p>
          <p>
            The Google Analytics service is used to analyze how our website is used. The legal basis is Art. 6 Para. 1
            lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic operation of our
            site.
          </p>
          <p>
            Usage and user-related information, such as IP address, place, time, or frequency of your visits to our
            website will be transmitted to a Google server in the United States and stored there. However, we use Google
            Analytics with the so-called anonymization function, whereby Google truncates the IP address within the EU
            or the EEA before it is transmitted to the US.
          </p>
          <p>
            The data collected in this way is in turn used by Google to provide us with an evaluation of visits to our
            website and what visitors do once there. This data can also be used to provide other services related to the
            use of our website and of the internet in general.
          </p>
          <p>
            Google states that it will not connect your IP address to other data. In addition, Google provides further
            information with regard to its data protection practices at
          </p>
          <p>
            <a href="https://www.google.com/intl/de/policies/privacy/partners" target="_blank" rel="noreferrer">
              https://www.google.com/intl/de/policies/privacy/partners,
            </a>
          </p>
          <p>including options you can exercise to prevent such use of your data.</p>
          <p>In addition, Google offers an opt-out add-on at</p>
          <p>
            <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noreferrer">
              https://tools.google.com/dlpage/gaoptout?hl=en
            </a>
          </p>
          <p>
            in addition with further information. This add-on can be installed on the most popular browsers and offers
            you further control over the data that Google collects when you visit our website. The add-on informs Google
            Analytics' JavaScript (ga.js) that no information about the website visit should be transmitted to Google
            Analytics. However, this does not prevent information from being transmitted to us or to other web analytics
            services we may use as detailed herein.
          </p>

          <h4>Google Fonts</h4>
          <p>
            Our website uses Google Fonts to display external fonts. This is a service provided by Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).
          </p>
          <p>
            To enable the display of certain fonts on our website, a connection to the Google server in the USA is
            established whenever our website is accessed.
          </p>
          <p>
            The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the optimization and
            economic operation of our site.
          </p>
          <p>
            When you access our site, a connection to Google is established from which Google can identify the site
            from which your request has been sent and to which IP address the fonts are being transmitted for
            display.
          </p>
          <p>Google offers detailed information at</p>
          <p>
            <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noreferrer">
              https://adssettings.google.com/authenticated
            </a>
          </p>
          <p>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              https://policies.google.com/privacy
            </a>
          </p>
          <p>in particular on options for preventing the use of data.</p>

          <h4>MailChimp - Newsletter</h4>
          <p>
            We offer you the opportunity to register for our free newsletter via our website.
          </p>
          <p>
            We use MailChimp, a service of The Rocket Science Group, LLC, 512 Means Street, Suite 404, Atlanta, GA
            30318, USA, hereinafter referred to as <i>The Rocket Science Group</i>.
          </p>
          <p>In addition, the Rocket Science Group offers further information about its data protection practices at</p>
          <p>
            <a href="http://mailchimp.com/legal/privacy/" target="_blank" rel="noreferrer">
              http://mailchimp.com/legal/privacy/
            </a>
          </p>
          <p>
            If you register for our free newsletter, the data requested from you for this purpose, i.e. your email
            address and, optionally, your name and address, will be processed by The Rocket Science Group. In addition,
            your IP address and the date and time of your registration will be saved. During the registration process,
            your consent to receive this newsletter will be obtained together with a concrete description of the type of
            content it will offer and reference made to this privacy policy.
          </p>
          <p>
            The newsletter then sent out by The Rocket Science Group will also contain a tracking pixel called a web
            beacon. This pixel helps us evaluate whether and when you have read our newsletter and whether you have
            clicked any links contained therein. In addition to further technical data, such as data about your computer
            hardware and your IP address, the data processed will be stored so that we can optimize our newsletter and
            respond to the wishes of our readers. The data will therefore increase the quality and attractiveness of our
            newsletter.
          </p>
          <p>The legal basis for sending the newsletter and the analysis is Art. 6 Para. 1 lit. a) GDPR.</p>
          <p>
            You may revoke your prior consent to receive this newsletter under Art. 7 Para. 3 GDPR with future effect.
            All you have to do is inform us that you are revoking your consent or click on the unsubscribe link
            contained in each newsletter.
          </p>
        </div>
      </Layout>
    );
  }
}

export default PrivacyPolicyPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
