"use client" // this is a client component

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
        position: "Software Engineer Intern",
        name: "Cisco",
        duration: "June 2023 - Present",
        description: [
            "Current Software Engineer Intern on the Infrastructure, Cloud & Security Services (ICSS) Team!"
        ],
        link: "https://www.cisco.com/",
    },
    {
        position: "Software Engineer Intern",
        name: "Siege",
        duration: "Aug 2022 - Dec 2022",
        description: [
            "Full-Stack Developer part of a team of 7-10 members that was in charge of developing web application that provides social and gamification aspects for aspiring traders.",
            "Used React.js, Node.js, Next.js, OpenSSL for Authentication, and a NoSQl database to store user information.",
            "Created REST API from scratch to retrieve information about posts, comments, and all social aspects of trading platform.",
        ],
        link: "https://www.siegetrading.com/"

    }, 
    {
        position: "Lead Software Instructor",
        name: "iD Tech",
        duration: "May 2022 - Aug 2022",
        description: [
            "Led team of 19 software instructors teaching 400+ kids aged 7-17 Python fundamentals with PyGame, Lua scripting with RobloxStudio, Game Design, Object-Oriented Programming design concepts, and Adobe Photoshop",
            "Organized and directed weekly schedules and activities outside of the classroom to increase student attendance by 150%.",
        ], 
        link: "https://www.idtech.com/"
    }, {
        position: "Undergraduate Teaching Assistant (UTA)",
        name: "Brown",
        duration: "Jan 2023 - Present",
        description: [
            "One of 30+ UTA's chosen out of 200+ applicants (15% acceptance rate) for CSCI0220: Discrete Mathematics and Probability in Spring 2023.",
            "One of 10 UTA's chosen out of 200+ applicants (5% acceptance rate) for CSCI0200: Data Structures and Algorithms in Fall 2023.",
            "Held 10 combined hours of office hours and recitations weekly to assist students in debugging their programs, and solidifying concepts within the course."
        ],
        link: "https://cs22.io/"
    }, 
    {
        position: "Workshops Team",
        name: "Hack@Brown",
        duration: "Sept 2022 - Present",
        description: [
            "Member of Workshops Team for Hack@Brown where we help organize a weekend-long Hackathon for college students to come together to spend the weekend creating exciting projects.",
            "Led a Python, Beautiful Soup, and Spotify API workshop for over 40+ students where I used Beautiful Soup for web-scraping and Spotify's API in order to create a Spotify playlist to your Spotify account that contains the Billboard Top 100 songs at a specific data that you enter.",
        ], 
        link: "https://docs.google.com/presentation/d/1k1Ceh4VshM8RHshRICow7Q1ar-aGt99n02ENUCDHMvk/edit?usp=sharing"
    },
    {
        position: "",
        name: "Personal Tutor",
        dueration: "June 2018 - Present",
        description: [
            "Tutored over a dozen students aged 7-18 in numerous subjects including Python, Java, AP classes, SAT Prep, and soccer fundamentals.",
            "Created original projects and lessons that students can complete to make the content enjoyable for them to learn.",
        ],
        link: "https://github.com/justinshin6/python_projects"
    }

]


const Experience = () => {
    
    const [currExp, setCurrExp] = useState(backgroundInfo[0]);

    /**
     * onClick function that handles setting the new current experience
     * @param name - name of the company to update description 
     */
    const handleClick = (name: string) => {
        for (let index = 0; index < backgroundInfo.length; index++) {
            if (name === backgroundInfo[index].name) {
                setCurrExp(backgroundInfo[index])
            }
            
        }
    }

    return (
        <section id="experience" className="max-w-containerxs mx-auto py-25 lgl:py-24 px-4">

            <h1 className="text-center font-bold text-4xl">
                Experience
            <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
            </h1>
                    <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                    <ul className="md:w-36 flex flex-col">
                    {backgroundInfo.map((exp, indx) => {
                        return (
                            <div key={indx}>

                                <li 
                                onClick={() => handleClick(exp.name)}
                                className="border-l-2 border-l-sky-400 bg-transparent hover:bg-[#112240] hover:text-white py-3 text-sm
                                cursor-pointer duration-200 px-8 font-medium text-base flex gap-2 whitespace-normal">
                                    
                                    {exp.name}
                                </li>
                            </div>

                        )
                    })}
                    </ul>
                     <ExperienceBD currExp={currExp}/>
                    </div>

            
                    
        </section>
    )
}

export default Experience
