import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import TagList from 'src/components/Blog/tagList';

import './blogCard.less';

const StyledNavLink = styled(Link)`
  color: black;
  box-shadow: none;
`;

const BlogCard = React.forwardRef(function BlogCard({ link, title, date, tags, excerpt, thumbnail }, ref) {
  return (
    <StyledNavLink to={`/blog${link}`} activeClassName="cardLink">
      <div className="blogCard" key={link} ref={ref}>
        <img className="thumbnail" src={thumbnail.publicURL} alt={title} />
        <div className="textContainer">
          <h3>{title}</h3>
          <TagList tags={tags} />
          <p className="intro">
            {excerpt}
          </p>
        </div>
      </div>
    </StyledNavLink>
  );
});

export default BlogCard;
