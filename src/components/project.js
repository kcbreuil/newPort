import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

const projectItems = [
  {
    projectName: "Herd",
    projectDescription: "Developed with React Native for Herd Social",
    projectLink: "https://www.theherdapp.com/",
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
  }
]

export default function Project() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mx-20">
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
    <div>
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
      <a href={projectLink}>link</a>
    </div>
  )
}
