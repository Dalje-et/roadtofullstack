import React from 'react';

import './banner.css';

export default function Banner() {
  return (
    <div className="container">
      <h1 className="heading">Road to Fullstack</h1>
      <p className="introductionText">
        A blog about Software Engineering and Self Development
      </p>
      <a href="#allBlogPosts">Check out my posts!</a>
    </div>
  );
}
