import React from "react"

import TwoColumnSection from "../TwoColumnSection/twoColumnSection"

import portrait from "../../../content/assets/portrait-dotted.png"
import "./aboutMe.less"

export default function AboutMe() {
  // const contentLeft = <img src={portrait} alt="Hey this is me!"/>
  const contentLeft = <h3 className="title">About me</h3>
  const contentRight = (
      <p>
          Hey there <span role="img" aria-label="waving">👋🏾</span> My name is Daljeet and I am a Software Engineer <a href="https://www.instana.com" target="_blank" rel="noreferrer">@Instana</a>.
          I am the author of this blog and really interested in topics such as: software craftmanship, clean design, and
          psychology. I am also passionate about sharing knowledge (about literally anything) and dad jokes.
      </p>
  )

  return (
    <TwoColumnSection contentLeft={contentLeft} contentRight={contentRight} />
  )
}