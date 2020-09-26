import React from 'react'

const About = () => {
  return (
    <section className="hero is-fullheight is-primary has-bg-img-about">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            About
          </h1>
          <h2 className="subtitle">
            We grab all of our parks data from the <a href="https://nps.gov/index.htm" style={{ textDecorationLine: 'underline' }}>National Park Service's API</a>. You can browse the parks without signing up.
          </h2>
          <h2 className="subtitle">
            If you do sign up, you have the ability to like parks and add them to a list. Give it a try!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default About
