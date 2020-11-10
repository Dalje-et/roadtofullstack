import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./blogCard.less"

import { getTagColor } from "src/utils/tags"

const StyledNavLink = styled(Link)`
  color: black;
  box-shadow: none;
`;

export default function BlogCard({ link, title, date, tags, excerpt }) {

  return (
    <StyledNavLink to={`/blog${link}`} activeClassName="cardLink">
      <div className="blogCard" key={link}>
        <h3>{title}</h3>
        <span className="date">{date}</span>
        <div className="taglist">
          {tags && tags.split(",").map(tag => {
            return <span key={tag} className="tag" style={getTagStyles(tag)}>{tag}</span>
          })}
        </div>
        <p className="intro">
          {excerpt}
        </p>
      </div>
    </StyledNavLink>
  )
}

function getTagStyles(tag) {
  return { backgroundColor: getTagColor(tag)}
}