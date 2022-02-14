import React from 'react'

const projectItems = [
    {
        projectName: "susieQ",
        projectDescription: "Susie Q is the hottest baddie in town, we love her lots and lots and lots",
        projectLink: "flalallalal"

    },
    {
        projectName: "susieQ",
        projectDescription: "Susie Q is the hottest baddie in town, we love her lots and lots and lots",
        projectLink: "flalallalal"

    },
    {
        projectName: "Airtec",
        projectDescription: "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
        projectLink: "https://airtec.netlify.app/",

    }
]

export default function Project() {
    return (
        <div className='flex gap-4 mx-20'>
            {projectItems.map((item) => {
                const {projectDescription, projectName, projectLink} = item
                return (
                    <ProjectItem 
                        projectName={projectName} 
                        projectDescription={projectDescription}
                        projectLink={projectLink} />
                )
            })}
        </div>
    )
}

function ProjectItem({projectName, projectDescription, projectLink}) {
    return (
      <div>
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <a href={projectLink}>site</a>
      </div>
    )
  }
  