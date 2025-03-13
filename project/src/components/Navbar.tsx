import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <button onClick={() => (window.location.href = "/")} className="focus:outline-none">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent"
      >
        Lijoice
      </motion.div>
    </button>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#techstack">Tech Stack</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://drive.google.com/file/d/1ZNgRtXfL5iFJRxirijfgdK7bmztuL_c9/view?usp=drive_link"
              className="bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              Resume
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string; // Explicitly define 'href' as a string
  children: React.ReactNode; // Ensure 'children' is a valid React node
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors duration-300"
    >
      {children}
    </a>
  );
}