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
        ]
    },
    {
        position: "Software Engineer Intern",
        name: "Siege",
        duration: "Aug 2022 - Dec 2022",
        description: [
            "This is the first part",
            "This is the second part",
            "This is the third part",
        ]

    }, 
    {
        position: "Lead Software Instructor",
        name: "iD Tech",
        duration: "May 2022 - Aug 2022",
        description: [
            "I was an instructor"
        ]
    }, {
        position: "Undergraduate Teaching Assistant",
        name: "Brown",
        duration: "Jan 2023 - Present",
        description: [

        ]
    }, 
    {
        position: "Workshops Team",
        name: "Hack@Brown",
        duration: "Sept 2022 - Present",
        description: [

        ],
    },
    {
        position: "",
        name: "Personal Tutor",
        dueration: "June 2018 - Present",
        description: [

        ]
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
                                className="border-l-2 border-l-sky-400 bg-transparent hover:bg-[#112240] py-3 text-sm
                                cursor-pointer duration-300 px-8 font-medium text-base flex gap-2 whitespace-normal">
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
