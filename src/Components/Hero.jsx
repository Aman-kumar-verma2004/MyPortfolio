import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/heroImage.png';

function Hero() {
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
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 mr-0 md:mr-[100px]">
          <motion.img
            src={heroImage}
            alt="Profile"
            className="h-[300px] w-[200px] md:h-[600px] md:w-[400px] object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
