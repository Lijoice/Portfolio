import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'ResX - Venue Management System',
    description: 'This Venue Management System not only enhances operational efficiency but also fosters seamless collaboration between event organizers and venue owners. With its intuitive interface and automated scheduling, the platform significantly reduces manual effort, making event planning hassle-free and more productive.',
    tech: ['Java', 'JavaFX', 'Scene Builder', 'MySQL'],
    github: 'https://github.com/Lijoice/ResX',
    preview: 'https://example.com/resx'
},
  {
    title: 'Imagify - AI Image Generator',
    description: 'This Full Stack AI SaaS application revolutionizes AI-driven image generation, offering users a seamless way to transform text prompts into stunning visuals. With secure authentication, a credit-based system, and integrated payments, the platform ensures a smooth, scalable, and user-friendly experience for creators, developers, and businesses alike.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Clipdrop API', 'JWT', 'Stripe'],
    github: 'https://github.com/Lijoice/Imagify',
    preview: 'https://example.com/imagify'
},
  {
    title: 'Eduforum',
    description: 'EduForum is a community-driven Q&A platform for school students (Grades 10-12), especially in rural areas. It features an AI-powered chatbot for instant learning support and AI-enhanced answer recommendations to ensure quality responses. Combining peer collaboration with AI-driven assistance, EduForum makes education more interactive, accessible, and efficient for students.',
    tech: ['React', 'OpenAI', 'NodeJS', 'Supabase'],
    github: 'https://github.com/Insamam/EduForum',
    preview: 'https://example.com/chat'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-card"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:text-neon-pink transition-colors"
                >
                  GitHub
                </a>
                {/* <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:text-neon-pink transition-colors"
                >
                  Live Preview
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}