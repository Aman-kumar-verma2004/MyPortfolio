import react, {useState, useEffect} from "react"
import {motion} from "framer-motion"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import ThemeToggle from "./Components/ThemeToggle"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Services from "./Components/Services"
import Blog from "./Components/Blog"
import Footer from "./Components/Footer"
import Project from "./Components/Projects"
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(()=> {
    return localStorage.getItem("darkMode") === "true";
  })  

  useEffect(()=> {
    return localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? "bg-gray-900 text-white transition-all duration-500" : "bg-white text-gray-900 tranbsition-all duration-500" }>
      <Router>
        <Navbar />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Projects" element={<Project />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Services" element={<Services />}/>
          <Route path="/Blog" element={<Blog />}/>
        </Routes>
        </motion.div>
        
      </Router>
      
    </div>
  )
}

export default App
