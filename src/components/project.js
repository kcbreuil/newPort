import { StaticImage } from 'gatsby-plugin-image'
import React, {useState} from 'react'

const projectItems = [
    {
        projectName: "Silverado",
        projectDescription: "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
        projectLink: "https://silverado.org/",
        projectSrc: "src/images/KB_s_cherry.png",
        projectAlt: "image",


    },
    {
        projectName: "Hubble",
        projectDescription: "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
        projectLink: "https://www.hubble.net/",
        projectSrc: "src/images/KB_s_cherry.png",
        projectAlt: "image",

    },
    {
        projectName: "Airtec",
        projectDescription: "Developed with Gatsby (React), Tailwind CSS, Sanity and Netlify while at Backroom",
        projectLink: "https://airtec.netlify.app/",
        projectSrc: "src/images/KB_s_cherry.png",
        projectAlt: "image",

    },
    {
        projectName: "Herd",
        projectDescription: "Developed with React Native for Herd Social",
        projectLink: "https://www.theherdapp.com/",
        projectSrc: "src/images/KB_s_cherry.png",
        projectAlt: "image",

    },
]

export default function Project() {
    return (
        <div className='flex gap-4 mx-20'>
            {projectItems.map((item) => {
                const {projectDescription, projectName, projectLink, projectSrc, projectAlt} = item
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

function ProjectItem({projectName, projectDescription, projectLink, projectSrc, projectAlt}) {
    const [isApp] = useState(false)
    return (
      <div>
          <h3>{projectName}</h3>
          <StaticImage src={projectSrc} alt={projectAlt}/>
          <p>{projectDescription}</p>
          <a href={projectLink}>link</a>
      </div>
    )
  }
  