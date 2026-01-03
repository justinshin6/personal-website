"use client" // this is a client component

import ExperienceBD from "./ExperienceBD"
import { useState } from "react";

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
        "Backend software engineer on the Simple Assets team.",
        <span key="token-sales">
            Founding member of team that built and launched{" "}
            <a
            href="https://www.coinbase.com/blog/the-ideal-way-to-launch-introducing-token-sales-on-coinbase"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
            >
            Coinbase Token Sales
            </a>{" "}
            in 3 months; first Monad sale generated $4.7M in direct revenue from $269M in requested allocations (oversubscribed by 1.43x), with 86K participants.
        </span>
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
        position: "Head Undergraduate Teaching Assistant (HTA/UTA)",
        name: "Brown",
        duration: "Jan 2023 - May 2025",
        description: [
            "Selected as a Head Teaching Assistant and an Undergraduate Teaching Assistant for four computer science and three applied mathematics courses including Discrete Mathematics / Probability, Statistical Inference II, and Data Structures.",
            "Coordinated grading meetings, managed course staff of over 30+ UTA's, and acted as touchpoint with the professor.",
        ],
        link: "https://cs22.io/"
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
      <h1 className="text-center font-bold text-4xl mb-2">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded" />
      </h1>

      <div className="w-full mt-10 flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Timeline sidebar */}
        <div className="relative hidden md:block md:w-36">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-400 opacity-30"></div>
          
          <ul className="relative flex flex-col">
            {backgroundInfo.map((exp, indx) => {
              const isActive = currExp.name === exp.name;
              return (
                <li
                  key={indx}
                  onClick={() => handleClick(exp.name)}
                  className={`
                    relative
                    cursor-pointer
                    px-6
                    py-4
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    rounded-lg
                    group
                    ${
                      isActive
                        ? "bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold shadow-lg shadow-sky-500/50 scale-105"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-400 dark:hover:text-sky-400"
                    }
                  `}
                >
                  {/* Timeline dot */}
                  <div className={`
                    absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                    w-4 h-4 rounded-full border-2 transition-all duration-300
                    ${
                      isActive
                        ? "bg-sky-400 border-sky-300 shadow-lg shadow-sky-400/50 scale-125"
                        : "bg-white dark:bg-stone-900 border-sky-400 group-hover:scale-110 group-hover:bg-sky-100 dark:group-hover:bg-sky-900"
                    }
                  `}></div>
                  
                  <span className="relative z-10">{exp.name}</span>
                  
                  {/* Active indicator glow */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-lg bg-sky-400 opacity-20 blur-xl"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile horizontal scroll */}
        <ul
          className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-transparent md:hidden gap-3 pb-4"
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
                  px-6
                py-3
                  text-sm
                font-medium
                  whitespace-nowrap
                  transition-all
                duration-300
                  rounded-lg
                ${
                    isActive
                      ? "bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold shadow-lg shadow-sky-500/50"
                      : "bg-slate-100 dark:bg-slate-800 text-neutral-700 dark:text-neutral-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }
                `}
            >
                {exp.name}
            </li>
            );
        })}
        </ul>

        {/* Experience details with animation */}
        <div className="flex-1">
        <ExperienceBD currExp={currExp} />
        </div>
      </div>
    </section>
  );
};

export default Experience;