import { TiArrowForward } from "react-icons/ti";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceBD = ({ currExp }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [currExp]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currExp.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full"
      >
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <h3 className="flex flex-wrap gap-1 font-semibold text-2xl md:text-3xl mb-2 text-neutral-800 dark:text-neutral-100">
            {currExp.position}
            {currExp.position !== "" && (
              <span className="text-sky-500 dark:text-sky-400 font-bold">
                @
              </span>
            )}
            <Link 
              href={currExp.link} 
              target="_blank"
              className="text-sky-500 dark:text-sky-400 font-bold hover:text-sky-600 dark:hover:text-sky-300 hover:underline transition-colors duration-200"
            >
              {currExp.name}
            </Link>
          </h3>
          <p className="text-sm md:text-base mt-2 mb-6 font-medium text-sky-600 dark:text-sky-400">
            {currExp.duration}
          </p>
          <ul className="flex flex-col gap-4">
            {currExp.description.map((desc: string | JSX.Element, indx: number) => (
              <motion.li
                key={indx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: indx * 0.1, duration: 0.3 }}
                className="text-base md:text-lg flex gap-3 text-neutral-700 dark:text-neutral-300 leading-relaxed"
              >
                <span className="mt-1.5 flex-shrink-0 text-sky-500 dark:text-sky-400">
                  <TiArrowForward className="w-5 h-5" />
                </span>
                <span className="flex-1">{desc}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceBD;
