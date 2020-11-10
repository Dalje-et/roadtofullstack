import React from 'react';

import TwoColumnSection from 'src/components/TwoColumnSection/twoColumnSection';

import './whyAnotherBlog.less';


export default function WhyAnotherBlog() {
  const contentLeft = <h3 className="title">Why another blog?</h3>;
  const contentRight = (
    <p>
      You might ask yourself why another blog is needed in a time where there are already a ton of blog
      posts on literally any topic you wish. Well, this blog is different. This blog is written in a way
      that you might think you are talking to a friend. At least that is what I hope you will feel.
      I will not just only cover tech topics but I much rather desire to tell you about the journey of a
      freshly graduate student into the world of enterprises. You might find some posts philosophing about
      the meaning of life in an enterprise or maybe a random guide on how to test a database migration with
      TestContainers. This shall be the beauty of this blog.
    </p>
  );

  return (
    <TwoColumnSection contentLeft={contentLeft} contentRight={contentRight} />
  );
}
