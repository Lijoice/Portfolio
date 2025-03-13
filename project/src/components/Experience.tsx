import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Cloud Computing Intern',
    company: 'DXC Technologies',
    period: '2024',
    description: 'Gained hands-on experience with cloud platforms, focusing on cloud architecture, deployment models, and cloud services for business applications.'
  },
  {
    title: 'MERN Stack Intern',
    company: 'Better Tomorrow',
    period: '2024',
    description: 'Developed secure APIs and implemented user authentication in dynamic web applications using the MERN stack, working in a collaborative team environment.'
  },
  {
    title: 'Software Development Intern',
    company: 'Octanet Services Pvt Ltd',
    period: '2023',
    description: 'Worked on various projects, showcasing strong problem-solving skills, adaptability, and professionalism while handling development tasks.'
  },
];

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Sri Eshwar College of Engineering',
    period: '2022 - 2026',
    grade: 'CGPA: 7.4 (upto 4th SEM)',
  },
  {
    degree: 'Higher Secondary (HSC)',
    institution: 'Nirmala Matha Convent Matric Higher Secondary School',
    period: '2020 - 2022',
    grade: 'Percentage: 86.3%',
  },
  {
    degree: 'SSLC',
    institution: 'NMC Matric Higher Secondary School',
    period: '2019 - 2020',
    grade: 'Percentage: 92.8%',
  },
];

export default function ExperienceEducation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" ref={ref} className="py-20 px-6 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Experience</h3>
            <div ref={ref} className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-4 border-l-4 border-neon-pink dark:border-neon-blue bg-white dark:bg-dark-200 shadow-lg rounded-lg"
                >
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <p className="text-neon-blue dark:text-neon-pink">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Education</h3>
            <div ref={ref} className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-4 border-l-4 border-neon-blue dark:border-neon-pink bg-white dark:bg-dark-200 shadow-lg rounded-lg"
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-neon-pink dark:text-neon-blue">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
