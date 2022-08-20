import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

const projectItems = [
  {
    projectName: "Herd",
    projectDescription: "Developed with React Native for Herd Social",
    projectLink: "https://www.theherdapp.com/",
  },
  {
    projectName: "Big Eye",
    projectDescription: "Developed Design System and component library in React.js",
   
  },
  {
    projectName: "Silverado",
    projectDescription:
      "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
    projectLink: "https://silverado.org/",
  },
  {
    projectName: "Hubble",
    projectDescription:
      "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
    projectLink: "https://www.hubble.net/",
  },
  {
    projectName: "Airtec",
    projectDescription:
      "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
    projectLink: "https://airtec.netlify.app/",
  },
  {
    projectName: "Next Tech Trivia App",
    projectDescription: "Developed a full-stack app over a 3 week sprint utilizing React, Express.js, SendGridApi, MongoDB, and GiftBitApi",
    projectLink: "http://trivia.cloud.netapp.com/",
  },
  {
    projectName: "Andover",
    projectDescription: "Developed component library and website templates using Vue.js",
  },
  {
    projectName: "Nasdaq",
    projectDescription: "Developed component library and design system using web components",
  }
]

export default function Project() {
  return (
    <div className="flex flex-col justify-center md:flex-row gap-8 mx-20 md:mx-40 my-8 flex-wrap">
      {projectItems.map(item => {
        const {
          projectDescription,
          projectName,
          projectLink,
          projectSrc,
          projectAlt,
        } = item
        return (
          <ProjectItem
            projectName={projectName}
            projectDescription={projectDescription}
            projectLink={projectLink}
            projectSrc={projectSrc}
            projectAlt={projectAlt}
          />
        )
      })}
    </div>
  )
}

function ProjectItem({
  projectName,
  projectDescription,
  projectLink,
}) {
  return (
    <div className="w-52">
      <h3 className="underline decoration-from-font	decoration-dotted	font-bold text-brand-orange text-3xl">{projectName}</h3>
      <p>{projectDescription}</p>
      {projectLink && <a className="underline hover:decoration-wavy hover:decoration-brand-yellow" href={projectLink}>link</a>}
    </div>
  )
}
