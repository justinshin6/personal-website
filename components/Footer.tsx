import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-gradient-to-r from-transparent via-sky-400 to-transparent border-0" />
      <div className="mx-auto p-6 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-600 dark:text-neutral-400 mb-4 md:mb-0">
          <a href="/" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 font-medium">
            Justin Shin {currentYear}
          </a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 mb-1">
          {/* Github */}
          <a
            href="https://github.com/justinshin6"
            rel="noreferrer"
            target="_blank"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition-all duration-200 group"
            aria-label="GitHub"
          >
            <AiOutlineGithub
              className="transition-all duration-200 cursor-pointer text-neutral-600 dark:text-neutral-400 group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:-translate-y-1"
              size={24}
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_justin.shin/?hl=en"
            rel="noreferrer"
            target="_blank"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition-all duration-200 group"
            aria-label="Instagram"
          >
            <AiOutlineInstagram
              className="transition-all duration-200 cursor-pointer text-neutral-600 dark:text-neutral-400 group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:-translate-y-1"
              size={24}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/justin-shin6/"
            rel="noreferrer"
            target="_blank"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition-all duration-200 group"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin
              className="transition-all duration-200 cursor-pointer text-neutral-600 dark:text-neutral-400 group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:-translate-y-1"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
