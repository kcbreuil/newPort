import React from "react"

export default function About() {
  return (
    <div id="about" className="h-screen flex flex-col gap-4 text-center mx-20">
      <h2 className="header text-4xl">about me</h2>
      <p>
        Hi there! Welcome :D I am a fullstack developer born and raised in sunny South Florida. I
        tend to lean heavily on the frontend, and have spent the past few years
        developing UI and design systems for agencies, corporations and startups
        all over the US. I work really well in a team, but can also be found
        slaying it alone somewhere. When I am not coding, I am sipping a
        caffeinated beverage, playing with my pets or doing some yoga around
        town, in no specific order.
      </p>
      <h2 className="header text-4xl">skills</h2>
      <p>
        HTML • CSS • JavaScript • Node.js • React • ReactNative • Web Components • Version Control
        • Gatsby • Heroku • Netlify • Mongoose • Hooks • MongoDB • 
        graphql • NoSQL • Design Systems • Wireframing • Sanity.io • Figma 
      </p>
    </div>
  )
}
