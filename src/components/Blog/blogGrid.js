import React from 'react';

import BlogCard from 'src/components/Blog/blogCard';

import './blogGrid.less';

export default function BlogGrid({ title, posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const cardNodes = posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    const cardRef = React.createRef();
    return (
      <BlogCard
        key={node.fields.slug}
        link={node.fields.slug}
        title={title}
        ref={cardRef}
        date={node.frontmatter.date}
        tags={node.frontmatter.tags}
        thumbnail={node.frontmatter.thumbnail}
        excerpt={node.frontmatter.description || node.excerpt}
      />
    );
  });

  return (
    <section id="allBlogPosts" className="gridContainer">
      <h2 className="carouselTitle">{title}</h2>
      <div className="blogGrid">
        {cardNodes}
      </div>
    </section>
  );
}
