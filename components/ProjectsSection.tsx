import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "The Shin Guards Blog",
    description:
      "Personal blog where I write articles on computer science, soccer, and productivity topics that I enjoy!",
    tech: "React.js, Next.js, Tailwind CSS, GraphQL, HyGraph",
    image: "/shin-guards.png",
    github: "https://github.com/justinshin6/personal-blog",
    link: "https://personal-blog-justinshin6.vercel.app/",
  },
  {
    name: "Dorms@Brown",
    description: "Final Project made with three other students that provides an all-in-one application that contains all relevant information for housing options at Brown University.",
    tech: "Typescript, React.js, Node.js, Tailwind CSS, Firebase",
    image: "/dorms-at-brown.png",
    github: "https://github.com/Dorms-Brown/Dorms-Brown.github.io",
    link: "none",
  },
  {
    name: "Search",
    description:
      "Created search engine from scratch using Google's PageRank Algorithm that ouputs top 10 most relevant documents per query.",
    tech: "Python",
    image: "/search.png",
    github: "https://github.com/justinshin6/Search-Engine",
    link: "none",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link == "none" ? project.github : project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    <span className="font-bold">Tech: </span> 
                      {project.tech}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.link != "none" ?
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> : <></>}

                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
