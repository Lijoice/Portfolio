import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'C', icon: '🔵' },
  { name: 'Power BI', icon: '📊' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Git & GitHub', icon: '🐙' },
];


export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="techstack" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <span className="text-lg font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}