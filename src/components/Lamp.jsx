import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./UI/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: -40 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="  bg-gradient-to-br  bg-green-200 from-slate-300 to-slate-500 py-4 bg-clip-text text-center  font-medium tracking-tight text-transparent text-xl md:3xl  lg:text-5xl"
      >
        <div>
			We're proud to work with our preferred partners
		
		</div>
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: -20 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }}
      className="relative top-10 flex overflow-hidden">
  <ul className="flex gap-14 h-14 w-max animate-scroll text-2xl  sm:text-2xl  md:text-3xl lg:text-4xl mx-auto">
    {Array(2)
      .fill([
        "VFS Global",
        "BLS International",
        "IDP Education",
        "Edwise International",
        "Fragomen ",
        "WWICS Immigration",
        "AIESEC ",
        "GoAbroad ",
        "iVisa",
        "VisaHQ ",
        "Fragomen ",
        "WWICS Immigration",
        "AIESEC ",
        "GoAbroad ",
        "iVisa",
        "VisaHQ ",
      ])
      .flat()
      .map((item, index) => (
        <li key={index} className="whitespace-nowrap px-4">
          {item}
        </li>
      ))}
  </ul>
</motion.h1>

    </LampContainer>
  );
}
