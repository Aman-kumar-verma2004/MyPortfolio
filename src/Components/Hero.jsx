import React from 'react'
import {motion} from "framer-motion"
import heroImage from "../assets/heroImage.png";

function Hero() {
  return (
    <div>

      <section className="h-screen flex flex-col md:flex-row justify-center items-center  text-white px-6 md:px-16">
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-15">
        <p className="text-[#7B7B7B] text-sm md:text-base rotate-[-90deg] ">Web Developer</p>
        <div className="w-[1px] h-80 mb-10 bg-[#7B7B7B] mb-[-50px]"></div>
        <p className="text-[#7B7B7B] text-sm md:text-base mb-[-120px]">2025</p>
      </div>
      <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 flex space-x-10 text-center">
        <div className="text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black ml-[-750px] mt-15"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            +200
          </motion.h2>
          <p className="text-[#7B7B7B] text-sm md:text-base ml-[-750px]">Projects Completed</p>
        </div>
        <div className="text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black ml-[-350px] mt-15"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            +50
          </motion.h2>
          <p className="text-[#7B7B7B] text-sm md:text-base ml-[-350px]">Startups Raised</p>
        </div>
      </div>
      {/* Left Side: Text */}
      <div className="md:w-1/2 text-black text-center md:text-left ml-[150px]">
        <motion.h1
          className="text-[8rem] md:text-[10rem]  tracking-tight "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mt-[-30px] text-[#7B7B7B]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          -It's Aman Kumar Verma a Web Wizard.
        </motion.p>
      </div>
      
      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-15 md:mt-0 mr-[100px]">
        <motion.img
          src={heroImage}
          alt="Profile"
          className="h-[600px] w-[400px] object-cover rounded-lg "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
    </div>
  )
}

export default Hero
