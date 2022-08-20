import React from 'react'
import Project from './project'

export default function Work() {
  return (
    <div id="work" className='h-full flex flex-col justify-center my-8'>
      <h2 className='header text-5xl text-center py-4 underline decoration-wavy decoration-brand-yellow'>work</h2>
       <Project />
    </div>
  )
}
