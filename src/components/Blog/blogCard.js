import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import TagList from 'src/components/Blog/tagList';

import './blogCard.less';

const StyledNavLink = styled(Link)`
  color: black;
  box-shadow: none;
`;

const BlogCard = React.forwardRef(function BlogCard({ link, title, date, tags, excerpt }, ref) {
  return (
    <StyledNavLink to={`/blog${link}`} activeClassName="cardLink">
      <div className="blogCard" key={link} ref={ref}>
        <h3>{title}</h3>
        <span className="date">{date}</span>
        <TagList tags={tags} />
        <p className="intro">
          {excerpt}
        </p>
      </div>
    </StyledNavLink>
  );
});

export default BlogCard;
