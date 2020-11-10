import React from "react"

import TwoColumnSection from "../TwoColumnSection/twoColumnSection"

import guy_blogging from "../../../content/assets/guy_blogging.png"
import "./whyAnotherBlog.css"


export default function WhyAnotherBlog() {
  // const contentRight = <img src={guy_blogging} alt="Fullstack developer blogging guy" />
  const contentLeft = <h3 className="title">Why another blog?</h3>
  const contentRight = (
    <p>
    You might ask yourself why another blog is needed in a time where there are already a ton of blog posts on
    literally any topic you wish. Well, this blog is different. This blog is written in a way that you might think
    you are talking to a friend. At least that's what I hope you will feel. I won't just only cover tech topics but
    I much rather desire to tell you about the journey of a freshly graduate student into the world of enterprises.
    You might find some posts philosophing about the meaning of life in an enterprise or maybe a random guide on how
    to test a database migration with TestContainers. This shall be the beauty of this blog.
    </p>
  )

  return (
    <TwoColumnSection contentLeft={contentLeft} contentRight={contentRight} />
  )
}