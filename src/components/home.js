import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import katie from "../images/katie.jpeg"

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 h-screen">
      <div className="rounded-full overflow-hidden w-[200px]">
        <StaticImage
          className="object-cover"
          src="../images/katie.jpeg"
          alt="picture"
          width={300}
          height={300}
        />
      </div>
      <div className="typewriter-container">
        <div className="typewriter">
          <h1 className="flex align-middle">hi. i'm katie. i make stuff.</h1>
        </div>
      </div>
    </div>
  )
}
