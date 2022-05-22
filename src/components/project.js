import React, {useState} from 'react'

const projectItems = [
    {
        projectName: "Herd",
        projectDescription: "Developed with React Native for Herd Social",
        projectLink: "https://www.theherdapp.com/",

    },
    {
        projectName: "Silverado",
        projectDescription: "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
        projectLink: "https://silverado.org/",


    },
    {
        projectName: "Hubble",
        projectDescription: "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
        projectLink: "https://www.hubble.net/",

    },
    {
        projectName: "Airtec",
        projectDescription: "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
        projectLink: "https://airtec.netlify.app/",

    },
    {
        projectName: "Herd",
        projectDescription: "Developed with React Native for Herd Social",
        projectLink: "https://www.theherdapp.com/",

    },
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
                        projectLink={projectLink} 
                        />
                )
            })}
        </div>
    )
}

function ProjectItem({projectName, projectDescription, projectLink}) {
    const [isApp] = useState(false)
    return (
      <div>
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <a href={projectLink}>link</a>
      </div>
    )
  }
  