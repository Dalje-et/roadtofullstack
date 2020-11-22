import React from 'react';

import WhyAnotherBlog from 'src/components/WhyAnotherBlog/whyAnotherBlog.js';
import BlogCarousel from 'src/components/Blog/blogCarousel';
import AboutMe from 'src/components/AboutMe/aboutMe.js';
import Banner from 'src/components/Banner/banner';
import Layout from 'src/components/layout';
import SEO from 'src/components/seo';

import 'src/components/layout.css';

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = 'Road To Fullstack';
    const posts = data.allMdx.edges;

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={siteTitle}
            keywords={[`blog`, `developer`, `fullstack`, `advice`]}
            description="Insert your meta data"
          />
          <Banner />
          <AboutMe />
          <WhyAnotherBlog />
          <BlogCarousel
            title="All posts"
            posts={posts}
          />
        </Layout>
      </>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
