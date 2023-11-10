import React from "react"

export default function About() {
  return (
    <div id="about" className="h-full flex flex-col gap-4 text-center m-20">
      <div className="md:w-4/5 place-self-center">
        <h2 className="header text-5xl my-8 underline decoration-wavy decoration-brand-yellow">
          about me
        </h2>
        <p className="mb-10 text-3xl">
          Hi there! I am a senior frontend developer + web designer born and
          raised in the subtropical swamps of South Florida. After 7 years in
          the arts marketing, communications and events sector, I dove head
          first into the world of web and mobile development. Harnassing my
          creative energy, a keen sense of design and a knack for problem
          solving, I have spent the past few years developing UI and design
          systems for agencies, enterprises and startups around the US. I work
          really well in a team setting, working asynchronously and
          collaborating with designers and developers alike but can also be
          found slaying it on my own. When I am not coding, I am sipping an iced
          caffeinated beverage, playing with my pets or doing some yoga around
          town, in no specific order.
        </p>
        <h2 className="header text-5xl my-8 underline decoration-wavy decoration-brand-yellow">
          skills
        </h2>
        <p className="text-3xl">
          HTML • CSS • JavaScript • Node.js • React • ReactNative • Web
          Components • Version Control • Gatsby • Shopify • WebFlow • Next.js •
          Heroku • Netlify • Mongoose • Hooks • MongoDB • graphql • NoSQL •
          Design Systems • Wireframing • UX|UI • Sanity.io • Figma • Adobe
          Creative Suite
        </p>
      </div>
    </div>
  )
}
