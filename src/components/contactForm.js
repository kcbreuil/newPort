import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function ContactForm() {
  return (
    <form className="w-10/12 md:w-4/12 border-2 overflow-hidden rounded-3xl border-solid border-brand-blue grid self-center">
      <StaticImage
        style={{ gridArea: "1/1" }}
        aspectRatio={3 / 1}
        alt=""
        src="../images/bg.png"
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
        className="flex flex-col items-center gap-4 m-6"
      >
        <label className="text-brand-black">
          Name:
          <input className="border-2 overflow-hidden rounded-md	 border-solid border-brand-blue" type="text" name="name" />
        </label>
        <label className="text-brand-black">
          Email:
          <input className="border-2 overflow-hidden rounded-md	 border-solid border-brand-blue" type="email" name="email" />
        </label>
        <label className="text-brand-black">
          Message:
          <textarea className="border-2 overflow-hidden rrounded-md	 border-solid border-brand-blue" name="message" placeholder="drop me a message!">
          </textarea>
        </label>
        <input
          className="hover:underline decoration-wavy decoration-brand-yellow"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  )
}
