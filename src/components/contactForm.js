import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState(null)
  const [isSubmitFormSuccessful, setIsSubmitFormSuccessful] = useState(false)

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&")
  }

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => setIsSubmitFormSuccessful(true))
      .catch(error => error)
  }

  return (
      <>
       {isSubmitFormSuccessful ? (<h3 className="text-center">See ya real soon!</h3>) : (
        <form
        className="w-10/12 md:w-4/12 border-2 overflow-hidden rounded-3xl border-solid border-brand-blue grid self-center"
        method="post"
        onSubmit={handleSubmit}
        data-netlify="true"
        netlify-honeypot="bot-field"
        name="contact-form"
      >
        <StaticImage
          style={{ gridArea: "1/1" }}
          aspectRatio={3 / 1}
          alt="form-background-image"
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
          <label className="hidden" htmlFor="bot-field">
            <input name="bot-field" />
          </label>
          <label htmlFor="name" className="text-brand-black">
            Name:
            <input
              className="border-2 overflow-hidden rounded-md border-solid border-brand-blue"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="text-brand-black">
            Email:
            <input
              className="border-2 overflow-hidden rounded-md border-solid border-brand-blue"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="message" className="text-brand-black">
            Message:
            <textarea
              className="border-2 overflow-hidden rrounded-md	 border-solid border-brand-blue"
              name="message"
              placeholder="drop me a message!"
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <input
            className="hover:underline decoration-wavy decoration-brand-yellow"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      )}
      </>
     
  
  )
}
