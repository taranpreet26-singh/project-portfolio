import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./UI/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="  bg-gradient-to-br  from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div>
			We're proud to work with our preferred partners
		
		</div>
      </motion.h1>
      <div className='relative   top-10 flex'>
          <ul className='flex gap-10 overflow-x-scroll scroll-hidden w-[80%] h-20 text-4xl mx-auto'>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
          </ul>
    </div>
    </LampContainer>
  );
}
