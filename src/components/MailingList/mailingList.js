import React from "react"

import "./mailingList.css"

export default function MailingList() {
  return (
    <div className="mailingList">
      <span>Join my mom and dad and <span className="highlight">subscribe</span> to my newsletter!</span>
      <input className="mailInput" type="email" placeholder="your.awesome@mail.com" />
      <div className="submitMail">Submit</div>
    </div>
  )
}