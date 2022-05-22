import React from "react"

export default function ContactForm() {
  return (
      <form className="flex flex-col items-center gap-4">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
        <textarea></textarea>
        </label>
        <input className="hover:underline decoration-wavy decoration-brand-yellow" type="submit" value="Submit" />
      </form>
  )
}
