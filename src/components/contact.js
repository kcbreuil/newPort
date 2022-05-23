import React from 'react'
import ContactForm from './contactForm'

export default function Contact() {
  return (
    <div id="contact" className='h-full flex flex-col mb-6'>
        <h2 className='header text-4xl text-center py-4'>contact</h2>
        <ContactForm />
    </div>
  )
}
