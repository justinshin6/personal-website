import React from "react"
import Image from "next/image"

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
  { skill: "GraphQL" },
  { skill: "LaTeX" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
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
              <span className="font-bold">{"Computer Science"}</span>!
            </p>
            <br />
            <p>
              Besides coding, in my free time at college, I am the Vice President of Brown's Korean-American Student's Association (Brown KASA)
              and a member of the Brown Men's Club Soccer Team as an attacking midfielder. For hobbies, I love video editing and filming videos, playing
              pickup soccer with friends, playing piano, and trying new restaurants around me. Feel free to reach out anytime!  
              
            </p>


          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-teal-500 hover:text-white cursor-pointer"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden bg-transparent md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
