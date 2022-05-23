import React from "react"

export default function About() {
  return (
    <div id="about" className="h-full flex flex-col gap-4 text-center m-20">
      <div className="md:w-6/12 place-self-center">
        <h2 className="header text-4xl m-4 underline decoration-wavy decoration-brand-yellow">
          about me
        </h2>
        <p className="mb-10">
          Hi there! I am a frontend developer born and raised in the subtropical
          wetlands of South Florida. After 7 years in the arts marketing,
          communications and events sector, I dove head first into the world of
          web and mobile development. Harnassing my creative energy, a keen
          sense of design and my knack for problem solving, I have spent the
          past few years developing UI and design systems for agencies,
          corporations and startups all over the US. I work really well in a
          collaborative setting and often identify the missing links on a team but
          can also be found slaying it alone somewhere. When I am not coding, I
          am sipping an iced caffeinated beverage, playing with my pets or doing some
          yoga around town, in no specific order.
        </p>
        <h2 className="header text-4xl m-4 underline decoration-wavy decoration-brand-yellow">
          skills
        </h2>
        <p>
          HTML • CSS • JavaScript • Node.js • React • ReactNative • Web
          Components • Version Control • Gatsby • Heroku • Netlify • Mongoose •
          Hooks • MongoDB • graphql • NoSQL • Design Systems • Wireframing •
          Sanity.io • Figma
        </p>
      </div>
    </div>
  )
}
