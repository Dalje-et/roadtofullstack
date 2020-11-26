import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import BlogHeader from 'src/components/Blog/blogHeader';
import TagList from '../components/Blog/tagList';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import SEO from '../components/seo';

import './blog-post.less';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    console.log(post);

    return (
      <Layout location={this.props.location} title={siteTitle} bgColor="white">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          thumbnail={post.frontmatter.thumbnail}
        />
        <BlogHeader title={post.frontmatter.title} posts={post.frontmatter.tags} />
        <div className="blogContent">
          <TagList tags={post.frontmatter.tags} />
          <p>{post.frontmatter.date}</p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
