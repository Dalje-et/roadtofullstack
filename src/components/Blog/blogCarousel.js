import React, { useEffect } from 'react';

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

  const cardNodes = posts.map(({ node }, index) => {
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
        excerpt={node.frontmatter.description || node.excerpt}
      />
    );
  });

  /**
   * Sets the opacity of all blog cards in this carousel once at the beginning.
   */
  useEffect(() => {
    setCardOpacity(ref, cardNodes);
  });


  return (
    <section id="allBlogPosts" className="carouselContainer">
      <h2 className="carouselTitle">{title}</h2>
      <div className="blogCarousel" ref={ref} onScroll={() => setCardOpacity(ref, cardNodes)}>
        {cardNodes}
      </div>
      {/* <div className="carouselScrollButtons">
        <span className="scrollButtons" onClick={scrollLeft}>&larr;</span>
        <span className="scrollButtons" onClick={scrollRight}>&rarr;</span>
      </div> */}
    </section>
  );

  function setCardOpacity(ref, cards) {
    cards.map((card) => {
      const cardRef = card.ref.current;
      if (cardRef.offsetLeft + (cardRef.offsetWidth * 0.8) - ref.current.scrollLeft > ref.current.offsetWidth) {
        cardRef.style.opacity = 0.5;
      } else {
        cardRef.style.opacity = 1;
      }
    });
  }
}
