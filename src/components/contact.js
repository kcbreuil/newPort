import React from 'react'
import ContactForm from './contactForm'

export default function Contact() {
  return (
    <div id="contact" className='h-full flex flex-col my-6'>
        <h2 className='header text-5xl text-center py-8 header my-8 underline decoration-wavy decoration-brand-yellow'>contact</h2>
        <ContactForm />
    </div>
  )
}
