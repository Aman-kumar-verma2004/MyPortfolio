import React from 'react';
import { motion } from 'framer-motion';
import Quiz from '../assets/Quiz.webp';
import picture from '../assets/picture.webp';
import Quote from '../assets/QuoteGenerator.webp';
import Job from '../assets/JobPortal.webp';
import Customer from '../assets/Customer.webp';
import Event from '../assets/event.jpeg';

const projects = [
  { title: 'Event Ticketing Platform', description: 'A full-stack Event Ticketing Web App that allows users to create events, enroll using QR-code-based tickets, and verify entries through real-time QR scanning. ', image: Event, link: 'https://github.com/Aman-kumar-verma2004/Event-Ticketing-Platform' },
  { title: 'Quiz App', description: 'A dynamic quiz application', image: Quiz, link: 'https://quiz-app-sigma-ruddy.vercel.app/' },
  { title: 'Picture-in-Picture', description: 'Floating video viewer', image: picture, link: 'https://picture-in-picture-eight.vercel.app/' },
  { title: 'Quote Generator', description: 'Inspiring quote generator', image: Quote, link: 'https://github.com/Aman-kumar-verma2004/Quote-Generator.git' },
  { title: 'Careers Portal', description: 'Job portal for 8Bit Warriors Coding Club', image: Job, link: 'https://carrers-portal.vercel.app/' },
  { title: 'Customer CLI', description: 'CLI for customer management', image: Customer, link: 'https://github.com/Aman-kumar-verma2004/customer-cli.git' }
];

function Projects() {
  return (
    <div>
      <section className="py-20 text-center">
        <h1 className="text-8xl font-bold text-[#222222] dark:text-black mb-15">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8 px-6 md:px-20">
          {projects.map((pro, index) => (
            <motion.a
              key={index}
              href={pro.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={pro.image} alt={pro.title} className="w-full rounded-md mb-4" />
              <h3 className="text-2xl text-black dark:text-white font-semibold">{pro.title}</h3>
              <p className="text-[#7B7B7B] dark:text-gray-400">{pro.description}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
