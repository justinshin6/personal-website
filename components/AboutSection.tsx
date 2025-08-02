import React from "react"
import Image from "next/image"
import Link from "next/link"

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-24 md:pb-38">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-400 border-0 rounded" />
        </h1>

        <div className="flex flex-col-reverse space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-3xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-lg md:text-xl">
              Hi, my name is Justin, and I am a current Software Engineer on the Simple Assets team @{" "}
              <Link href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer">
                <span className="text-sky-500 font-semibold hover:underline cursor-pointer">
                  Coinbase
                </span>
              </Link>
              . I graduated from{" "}
              <Link href="https://www.brown.edu" target="_blank" rel="noopener noreferrer">
                <span className="text-sky-500 font-semibold hover:underline cursor-pointer">
                  Brown University
                </span>
              </Link>{" "}
              Magna Cum Laude with{" "}
              <span className="font-bold">Applied Mathematics</span> and{" "}
              <span className="font-bold">Computer Science</span> with a focus in
              Computer Systems.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              Outside of work, I like playing sports (soccer, tennis, etc.), going to the gym, and trying out different restaurants in the Bay Area.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about_photo.JPEG"
                alt="About photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection