import React from 'react';

import TwoColumnSection from 'src/components/TwoColumnSection/twoColumnSection';

import './aboutMe.less';

export default function AboutMe() {
  const contentLeft = <h3 className="title">About me</h3>;
  const contentRight = (
    <p>
      Hey there <span role="img" aria-label="waving">👋🏾</span> My name is Daljeet and I am a Software Engineer <a href="https://www.datadoghq.com" target="_blank" rel="noreferrer">@Datadog</a>. I am the author of this blog and really interested in topics such as: software craftmanship, clean design, and psychology. I am also passionate about knowledge sharing and dad jokes.
    </p>
  );

  return (
    <TwoColumnSection contentLeft={contentLeft} contentRight={contentRight} />
  );
}
