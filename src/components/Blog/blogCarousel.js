import React from 'react';

import BlogCard from 'src/components/Blog/blogCard';

import './blogCarousel.less';

export default function BlogCarousel({ title, posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const ref = React.createRef();

  const scrollLeft = () => {
    ref.current.scrollLeft -= 250;
  };

  const scrollRight = () => {
    ref.current.scrollLeft += 250;
  };

  const cards = posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <BlogCard
        key={node.fields.slug}
        link={node.fields.slug}
        title={title}
        date={node.frontmatter.date}
        tags={node.frontmatter.tags}
        excerpt={node.frontmatter.description || node.excerpt}
      />
    );
  });

  return (
    <div className="carouselContainer">
      <h2 className="carouselTitle">{title}</h2>
      <div className="blogCarousel" ref={ref}>
        {cards}
      </div>
      <div className="carouselScrollButtons">
        <span className="scrollButtons" onClick={scrollLeft}>&larr;</span>
        <span className="scrollButtons" onClick={scrollRight}>&rarr;</span>
      </div>
    </div>
  );
}
