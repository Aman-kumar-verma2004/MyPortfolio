import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, 
  FaJava, FaLinux 
} from "react-icons/fa";
import { SiBootstrap, SiFigma, SiPostman, SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "ReactJS", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },

  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Linux", icon: <FaLinux className="text-black" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> }
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-black text-center">
      {/* Section Title */}
      <motion.h2 
        className="text-8xl font-bold text-black mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Tech Stack
      </motion.h2>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-6xl mb-3">{tech.icon}</div>
            <p className="text-lg font-semibold text-[#222222] dark:text-white">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
