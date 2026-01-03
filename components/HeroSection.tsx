"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <Image
              src="/headshot.png"
              alt="Justin Shin"
              width={325}
              height={325}
              className="relative rounded-full shadow-2xl ring-4 ring-sky-200 dark:ring-sky-800 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent">
            Hi, I&#39;m Justin!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-neutral-700 dark:text-neutral-300">
            Thank you for stopping by and welcome to my personal website!
          </p>
          <Link
            to="projects"
            className="inline-block text-neutral-100 font-semibold px-8 py-3 bg-gradient-to-r from-sky-400 to-sky-500 rounded-lg shadow-lg hover:shadow-xl hover:shadow-sky-500/50 hover:from-sky-500 hover:to-sky-600 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            View Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
