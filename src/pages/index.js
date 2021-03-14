import React from 'react';

import WhyAnotherBlog from 'src/components/WhyAnotherBlog/whyAnotherBlog.js';
import AboutMe from 'src/components/AboutMe/aboutMe.js';
import BlogGrid from 'src/components/Blog/blogGrid';
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
          />
          <Banner />
          <AboutMe />
          <WhyAnotherBlog />
          <BlogGrid
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
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
