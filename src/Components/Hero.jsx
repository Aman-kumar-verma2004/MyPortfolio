import React from 'react';
import {useState} from "react"
import { motion } from 'framer-motion';
import heroImage from '../assets/heroImage.png';
import alternateImage from '../assets/alternate.png'

function Hero() {

  const[isHovered, setIsHovered] = useState(false);


  return (
    <div>
      <section className="h-screen flex flex-col md:flex-row justify-center items-center text-white px-6 md:px-16">
        {/* Left Side: Vertical Text and Line */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-15">
          <p className="text-[#7B7B7B] text-sm md:text-base rotate-[-90deg]">Web Developer</p>
          <div className="w-[1px] h-80 mb-10 bg-[#7B7B7B] mb-[-50px]"></div>
          <p className="text-[#7B7B7B] text-sm md:text-base mb-[-120px]">2025</p>
        </div>

        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-black text-center md:text-left ml-0 md:ml-[150px]">
          <motion.h1
            className="text-5xl md:text-[10rem] tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-[#7B7B7B]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            - It's Aman Kumar Verma, a Web Wizard.
          </motion.p>
        </div>

        {/* Right Side: Hero Image */}
        <div className="h-[400px] w-[300px] mt-5 flex items-center justify-center md:h-[600px] md:w-[350px]">
  <motion.img
    src={isHovered ? alternateImage : heroImage}
    alt="Profile"
    className="h-full w-full object-cover rounded-full"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale : 1.1 }}
    transition={{ duration: 0.6 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  />
</div>
      </section>
    </div>
  );
}

export default Hero;
