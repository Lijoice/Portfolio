import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lijo from "../assets/Lijo1.jpg";
import Resume from "../assets/Lijoice_22IT027_resume (1).pdf";


export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-blue/5 dark:to-neon-blue/10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-neon-blue"
        >
          <img src={Lijo} alt="Your Name" className="w-full h-full object-cover" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Passionate about web development with hands-on experience in React, Node.js, and modern web technologies.
          Enthusiastic about building scalable applications and contributing to impactful projects. Eager to learn, adapt, and grow in a dynamic development environment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          {/* Download Resume Button */}
          <a 
  href={Resume} 
  download="Lijoice_Resume.pdf" 
  className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
>
  Download Resume
</a>




          {/* Contact Me Button */}
          <a
            href="mailto:lijoice.cs@gmail.com?subject=Let's Connect&body=Hi Lijoice,"
            className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center gap-6 mt-6"
        >
          {/* GitHub */}
          <a
            href="https://github.com/Lijoice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-blue hover:text-neon-pink transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lijoice-shajan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-blue hover:text-neon-pink transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </a>

          {/* LeetCode */}
<a
  href="https://leetcode.com/u/lijoice/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-neon-blue hover:text-neon-pink transition-all duration-300 transform hover:scale-110"
>
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16.742 4.26L13.75 1.269a.918.918 0 00-1.303 0L3.98 9.735a.918.918 0 000 1.303l8.467 8.466c.358.358.944.358 1.303 0l2.992-2.99a.92.92 0 000-1.305l-6.162-6.158a.458.458 0 010-.65l2.992-2.99a.458.458 0 01.65 0l3.015 3.013a.918.918 0 001.303 0l1.992-1.99a.918.918 0 000-1.303l-4.56-4.56z"></path>
    <path d="M10.612 21.84a.918.918 0 001.303 0l4.95-4.95a.918.918 0 000-1.303l-1.3-1.3a.918.918 0 00-1.303 0l-4.95 4.95a.918.918 0 000 1.303l1.3 1.3z"></path>
  </svg>
</a>

        </motion.div>
      </motion.div>
    </section>
  );
}
