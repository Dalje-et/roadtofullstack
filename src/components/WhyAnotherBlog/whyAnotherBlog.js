import React from 'react';

import TwoColumnSection from 'src/components/TwoColumnSection/twoColumnSection';

import './whyAnotherBlog.less';


export default function WhyAnotherBlog() {
  const contentLeft = <h3 className="title">Why this blog?</h3>;
  const contentRight = (
    <p>
      I decided to create my own blog and write about the stuff I experience either at my job or at some private
      projects because I want to share knowledge in a way as I would do with a friend: Through stories! The point is not
      to jump from one technical topic to the other, but rather share the journey of a freshly graduate student into the
      world of enterprises.
    </p>
  );

  return (
    <TwoColumnSection contentLeft={contentLeft} contentRight={contentRight} />
  );
}
