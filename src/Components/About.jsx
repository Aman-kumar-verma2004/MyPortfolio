import React from 'react'
import { motion } from "framer-motion";
import aboutImage from "../assets/logo.webp";
function About() {
  return (
    
    <section className="py-20 px-6 md:px-20 bg-white dark:bg-white-900 flex flex-col items-center">
      {/* Top Center: Title */}
      <motion.h2 
        className="text-8xl font-bold text-[#222222] dark:text-black text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      
      {/* Content Section: Text on Left, Image on Right */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left Side: Text */}
        <motion.div 
          className="text-lg text-[#7B7B7B] dark:text-gray-700 md:w-1/2 text-left space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-[#222222] dark:text-black">🎯 Who Am I?</h3>
          <p>I’m Aman Kumar Verma, a passionate web developer and tech enthusiast who thrives on turning ideas into reality through code. With hands-on experience in MERN stack, I specialize in building dynamic, user-friendly, and responsive web applications — from concept to deployment.</p>
          
          <h3 className="text-2xl font-semibold text-[#222222] dark:text-black">🔧 What I Do</h3>
          <p>🛠️ <strong>Full Stack Development:</strong> Proficient in Node.js, Express, MongoDB, React, HTML, CSS, and JavaScript.</p>
          <p>🚀 <strong>Project Development:</strong> Built diverse projects like Quiz App, Picture-in-Picture Tool, Career Portal, Quote Generator, and Customer CLI — each showcasing unique functionalities and designs.</p>
          <p>💡 <strong>Problem Solver:</strong> Actively solving challenges on platforms like Leetcode and CodingBat to sharpen my problem-solving and algorithmic thinking.</p>
          
          <h3 className="text-2xl font-semibold text-[#222222] dark:text-black">🌟 Why Choose Me?</h3>
          <p>🔥 <strong>Creative and Efficient:</strong> I combine design sense with backend logic to create seamless, high-performing websites and applications.</p>
          <p>📈 <strong>Always Learning:</strong> From mastering Oracle Cloud deployments to exploring scripting in Kali Linux for cybersecurity, I’m on a continuous learning journey to expand my tech stack.</p>
          <p>🤝 <strong>Collaborative Mindset:</strong> As a Tech Lead at 8Bit Warriors Tech Club and GSSOC Campus Ambassador, I enjoy working with teams, mentoring, and contributing to the dev community.</p>
          
        </motion.div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <motion.img
            src={aboutImage}
            alt="About Me"
            className="h-[300px] w-[300px] object-cover rounded-lg shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
    
  )
}

export default About
