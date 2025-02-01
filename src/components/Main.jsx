import React, { useEffect, useState } from "react";
import { TypingAnimation } from "./UI/TypingAnimation";

const Main = () => {
  const arrText = ["UI/UX Designer", "Developer.", "Professional Coder."];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % arrText.length);
    }, 3000); // Change text every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className=" w-full sm:px-30 overflow  lg:grid gap-30 lg:grid-cols-2 sm:flex sm:flex-col-reverse  sm:gap-0 ">
      <div className="   w-[100%]     sm:h-screen xl:h-[50rem] py-20 gap-5 flex flex-col h-fit">
        <h1 className="text-center sm:text-left text-md ">WELCOME TO MY WORLD</h1>
        <h1 className="text-3xl text-center mx-auto sm:mx-0      md:text-xl lg:text-4xl 2xl:text-[clamp(1rem, 5vw, 3rem)] xl:text-[3rem] font-bold flex gap-4">
          Hi, I'm{" "}
          <div className="text-[#ff014f]">
            <h1>Jone Lee</h1>
          </div>
        </h1>
        <div className="flex items-center">
          <h1 className="flex gap-4 items-center  justify-center w-[100vw] m-auto sm:m-0 sm:w-auto    sm:text-4xl  lg:text-4xl  text-2xl font-bold">
            a{" "}
            <TypingAnimation className="text-2xl  sm:text-4xl   md:text-4xl md:w-[20rem]  lg:text-4xl lg:w-[20rem] xl:w-[28rem]">
              {arrText[currentIndex]}
            </TypingAnimation>
          </h1>
        </div>
        <div className="flex flex-wrap  text-wrap   w-full text-lg ">
          <h1 className="text-justify p-4 sm:p-0">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </h1>
        </div>
        <div className="gap-10 relative flex justify-end ">
          <div className="btn w-14 flex relative justify-center items-center hover:scale-110 duration-700 h-16">
            {/* Glowing Background Effect */}
            <span className="absolute  flex border text-[3rem]   blur-xl text-white  font-extrabold select-none filter drop-shadow-[0_0_20px_#3b82f6]">
				f
            </span>

            {/* Foreground Text */}
            <h1 className="relative top-0  justify-center text-4xl flex items-center text-white  font-extrabold text-center select-auto  shadow-blue-500">
              f
            </h1>
          </div>
          <div className="btn w-14 flex relative justify-center duration-700 hover:scale-110 items-center hover:bg-black h-16">
            {/* Glowing Background Effect */}
            <span className="absolute  flex border text-[3rem]  blur-xl text-white  font-extrabold select-none filter drop-shadow-[0_0_20px_#3b82f6]">
              X
            </span>

            {/* Foreground Text */}
            <h1 className="relative top-0  justify-center text-4xl flex items-center text-white  font-extrabold text-center select-auto  shadow-blue-500">
              X
            </h1>
          </div>
          <div className="btn w-14 flex relative duration-700 justify-center hover:scale-110 items-center hover:bg-black h-16">
            {/* Glowing Background Effect */}
            <span className="absolute  flex border text-[3rem]  blur-xl text-white  font-extrabold select-none filter drop-shadow-[0_0_20px_#3b82f6]">
              in
            </span>

            {/* Foreground Text */}
            <h1 className="relative top-0  justify-center text-4xl flex items-center text-white  font-extrabold text-center select-auto  shadow-blue-500">
              in
            </h1>
          </div>

        </div>
      </div>
      <div className=" flex justify-center max-h-fit   object-cover   overflow-hidden items-center relative">
        <img
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
            className="relative w-120  xl:-bottom-24 lg:-bottom-12  shadow-red-100"
          />
      </div>
    </div>
  );
};

export default Main;
