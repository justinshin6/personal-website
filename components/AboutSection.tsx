import React from "react"
import Image from "next/image"
import { TiArrowForward } from "react-icons/ti"
import Link from "next/link"

const skills = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "Javascript" },
  { skill: "TypeScript" },
  { skill: "HTML/CSS" },
  { skill: "C/C++" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Express.js" },
  { skill: "MongoDB" },
  { skill: "Node.js" },
  { skill: "Git/Github" },
  { skill: "Docker" },
  { skill: "Linux" },
  { skill: "Figma" },
  { skill: "Pandas" },
  { skill: "Google Firebase" },
  { skill: "Google Cloud" },
  { skill: "AWS" },
  { skill: "GraphQL" },
  { skill: "Django" },
  { skill: "Plotly Dash" },
  { skill: "Postman" },
  { skill: "LaTeX" },

]

/**
 * @param head - head of description
 * @param description - main description
 */
const aboutInfo = [
  {
    head: "Brown KASA",
    description: "I'm the current Vice President for Brown's Korean-American Students Association where we hold events and panels to introduce Korean culture to members of the Brown community!",
    link: "https://www.brownkasa.com/"
    
  },
  {
    head: "Brown Club Soccer",
    description: "I'm a current member of the Brown Men's Club Soccer team where I play as an attacking midfielder. We are also the current 6-time Ivy League Champions beating Yale in the finals this year!",
    link: "https://brownclubsoccer.com/results"
  },
  {
    head: "Hobbies",
    description: "Some of my other hobbies include playing piano (over 11 years), playing Word Hunt/Anagrams with friends, playing pickup soccer, karaoke, and trying the best restaurants near me!",
    link: "",
  },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-24 md:pb-38">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Justin and I am a rising junior at Brown University pursuing a B.S. in
              {" "}
              <span className="font-bold">{"Applied Mathematics"}</span> and {" "}
              <span className="font-bold">{"Computer Science"}</span> with a focus in Software Principles and Data.
            </p>
            <br />
            <p>
              Besides coding, some of my other passions are the following:
            </p>
            <ul className="mt-1.5 flex flex-col gap-3">
              {aboutInfo.map((fact, indx) => {
                return (
                  <div key={indx}>
                  <li
                    className={"text-base flex gap-2"}
                  >
                    <span className="mt-1">
                      <TiArrowForward />
                    </span>
                    <div className="w-full">
                    {fact.link !== "" ? (
                      <>
                      <Link href={fact.link} target="_blank">
                        <span className="text-sky-400 font-bold hover:underline 
                        cursor-pointer "> {fact.head} </span>
                      </Link>

                      </>
                    ) : 
                    <span className="text-sky-400 font-bold
                      ">{fact.head}</span>}
                    {": " + fact.description}
                  </div>


                  </li>
                </div>
                )
              })}
            </ul>


          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-4">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-sky-400 hover:text-white cursor-pointer"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
