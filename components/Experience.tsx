"use client" // this is a client component

import { m } from "framer-motion";
import ExperienceBD from "./ExperienceBD"
import { useState, useEffect } from "react";

/**
 * @param position - name of position of experience
 * @param name - name of the company
 * @param duration - how long I was at the company
 * @param description - nested array where each index is a bullet point
 */
const backgroundInfo = [
    {
        position: "Software Engineer",
        name: "Coinbase",
        duration: "July 2025 - Present",
        description: [
            "Backend software engineer on the Simple Assets team"
        ],
        link: "https://www.coinbase.com/"
    },
    {
        position: "Software Engineer Intern",
        name: 'Citadel',
        duration: "June 2024 - August 2024",
        description: [
            "Revamped pricing scenarios dashboard for the Citadel Commodities Equities team, optimizing backend functionality and adding interactive frontend features, reducing decision-making time for portfolio managers and analysts by over 99.9%.",
            "Developed daily email notification compiling metric data on relevant stocks across different sectors while creating data visualizations of model outputs from the analysts, reducing decision time by 93%.",
            "Scraped data on transportation vehicles and developed automatic notification system that alerts analysts to key signals, resulting in a 50% increase in PnL generation in Python and avoiding any information slippage.",
            "Built a dashboard from scratch, scraping data on a specific geographical region, delivering insights that enabled analysts to improve the accuracy of their fundamental models by 45%.",
        ],
        link: "https://www.citadel.com/",
    },
    {
        position: "Software Engineer Intern",
        name: "Cisco",
        duration: "June 2023 - August 2023",
        description: [
            "Developed a full-stack application utilizing Typescript, React.js, and the Spring framework for Third-Party Software Compliance and Risk Management (TPSCRM), resulting in a streamlined process that reduced compliance issues by 15%.",
            "Collaborated with Open-Source Contributions (OSC) using React.js and the FastAPI and Django frameworks, increasing the efficiency of tracking contributions while implementing new customer features."
        ],
        link: "https://www.cisco.com/",
    },
    {
        position: "Software Engineer Intern",
        name: "Siege",
        duration: "Aug 2022 - Dec 2022",
        description: [
            "Collaborated as a Full-Stack Developer within a 7-10 member team to develop a dynamic web application with social and gamification features for aspiring traders.",
            "Used React.js, Node.js, Next.js, OpenSSL for Authentication, and a NoSQl database to store user information.",
            "Created a RESTful API from scratch to enable seamless communication between the front-end and back-end, facilitating real-time updates for posts, comments, and other social aspects of the trading platform.",
        ],
        link: "https://www.siegetrading.com/"

    }, 
    {
        position: "Lead Software Instructor",
        name: "iD Tech",
        duration: "May 2022 - Aug 2022",
        description: [
            "Led and managed a team of 19 software instructors, guiding them in teaching Python fundamentals with PyGame, Lua scripting with RobloxStudio, game design principles, object-oriented programming concepts, and Adobe Photoshop to over 400 students aged 7-17.",
            "Organized and directed weekly schedules and activities outside of the classroom to increase student attendance by 150%.",
        ], 
        link: "https://www.idtech.com/"
    }, {
        position: "Head Undergraduate Teaching Assistant (HTA/UTA)",
        name: "Brown",
        duration: "Jan 2023 - May 2025",
        description: [
            "Selected as a Head Teaching Assistant and an Undergraduate Teaching Assistant for four computer science and three applied mathematics courses including Discrete Mathematics / Probability, Statistical Inference II, and Data Structures.",
            "Coordinated grading meetings, managed course staff of over 30+ UTA’s, and acted as touchpoint with the professor."
        ],
        link: "https://cs22.io/"
    }, 
    {
        position: "Workshops Team",
        name: "Hack@Brown",
        duration: "Sept 2022 - May 2024",
        description: [
            "Member of Workshops Team for Hack@Brown where we help organize a weekend-long Hackathon for college students to come together to spend the weekend creating exciting projects.",
            "Led a Python, Beautiful Soup, and Spotify API workshop for over 40+ students where I used Beautiful Soup for web-scraping and Spotify's API in order to create a Spotify playlist to your Spotify account that contains the Billboard Top 100 songs at a specific data that you enter.",
        ], 
        link: "https://docs.google.com/presentation/d/1k1Ceh4VshM8RHshRICow7Q1ar-aGt99n02ENUCDHMvk/edit?usp=sharing"
    },
    {
        position: "",
        name: "Personal Tutor",
        duration: "June 2018 - Present",
        description: [
            "Provided tutoring to a diverse group of over a dozen students aged 7-18 in subjects such as Python, Java, AP classes, SAT Prep, and soccer fundamentals.",
            "Developed engaging and customized projects and lessons to enhance the learning experience and foster student enjoyment.",
        ],
        link: "https://github.com/justinshin6/python_projects"
    }

]

const Experience = () => {
  const [currExp, setCurrExp] = useState(backgroundInfo[0]);

  const handleClick = (name: string) => {
    const foundExp = backgroundInfo.find((exp) => exp.name === name);
    if (foundExp) setCurrExp(foundExp);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-25 lgl:py-24 px-4"
    >
      <h1 className="text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded" />
      </h1>

    <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul
        className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-sky-400 md:flex-col md:overflow-visible md:scrollbar-none md:w-36"
        style={{ scrollSnapType: "x mandatory" }}
        >
        {backgroundInfo.map((exp, indx) => {
            const isActive = currExp.name === exp.name;
            return (
            <li
                key={indx}
                onClick={() => handleClick(exp.name)}
                className={`
                relative
                flex-shrink-0
                scroll-snap-align-start
                cursor-pointer
                px-8
                py-3
                text-base
                font-medium
                flex
                gap-2
                whitespace-normal
                transition-colors
                duration-300
                min-w-[180px]
                rounded-md
                ${
                    isActive
                    ? "bg-sky-600 border-2 border-sky-400 text-white font-semibold"
                    : "border-2 border-transparent hover:bg-[#112240] hover:text-white"
                }
                `}
            >
                {exp.name}
            </li>
            );
        })}
        </ul>


        <ExperienceBD currExp={currExp} />
      </div>
    </section>
  );
};

export default Experience;