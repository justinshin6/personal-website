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
    tech: "Typescript, React.js, Node.js, Tailwind CSS, Firebase, Google OAuth",
    image: "/dorms-at-brown.png",
    github: "https://github.com/Dorms-Brown/Dorms-Brown.github.io",
    link: "none",
  },
  {
    name: "Binary Logistic Regression (BLR)",
    description: "Implemented BLR with Tikhonov regularization (L2 norm) and cross-validation to perform classification to predict whether or not a given patient has breast cancer based on health data with over 84% accuracy.",
    tech: "Python, Numpy, Pandas, Matplotlib",
    image: "/ml.png",
    github: "https://github.com/justinshin6/python_projects/tree/main/machine-learning/binary-logistic-regression",
    link: "none",
  },
  {
    name: "Caching I/O",
    description: "Implemented single slot cache to reduce the number of system calls (i.e., buffered read, write, flush) to optimize performance to within 5x of stdio's runtime performance.",
    tech: "C",
    image: "/caching.png",
    github: "https://github.com/justinshin6/C-projects/tree/main/caching",
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
  {
    name: "Python Personal Projects",
    description: "Personal Python Projects and scripts that I create in my free time. Repository that contains my tutoring projects, different web-scraping projects with Beautiful Soup, and machine learning projects all compiled in one place.",
    tech: "Python, Beautiful Soup, Spotify API, Numpy, Pandas, Matplotlib",
    image: "/python.png",
    github: "https://github.com/justinshin6/python_projects",
    link: "none",
  }
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
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 group">
                  <div className="md:w-1/2 relative overflow-hidden rounded-xl">
                    <Link href={project.link == "none" ? project.github : project.link} target="_blank">
                      <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 group-hover:shadow-sky-500/20">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={1000}
                          height={1000}
                          className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {project.name}
                    </h1>
                    <p className="text-lg md:text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-lg md:text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                        <span className="font-bold text-sky-500 dark:text-sky-400">Tech: </span> 
                        <span className="text-neutral-700 dark:text-neutral-300">{project.tech}</span>
                      </p>
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link 
                        href={project.github} 
                        target="_blank"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-200"
                        aria-label="GitHub repository"
                      >
                        <BsGithub
                          size={30}
                          className="text-neutral-700 dark:text-neutral-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 hover:-translate-y-1"
                        />
                      </Link>
                      {project.link != "none" && (
                        <Link 
                          href={project.link} 
                          target="_blank"
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-200"
                          aria-label="Live project"
                        >
                          <BsArrowUpRightSquare
                            size={30}
                            className="text-neutral-700 dark:text-neutral-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 hover:-translate-y-1"
                          />
                        </Link>
                      )}
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
