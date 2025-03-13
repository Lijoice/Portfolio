import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact"  className="relative py-20 px-4 bg-gray-50 dark:bg-dark-100 overflow-hidden">
      {/* Floating Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A72] to-[#009FFD] opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="text-4xl font-extrabold text-center mb-12">
      <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
      Contact
      </span>
      </h2>

        <div className="max-w-2xl mx-auto bg-white/80 dark:bg-dark-200/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/40 transition bg-white dark:bg-dark-200 dark:border-gray-600 p-3"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/40 transition bg-white dark:bg-dark-200 dark:border-gray-600 p-3"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/40 transition bg-white dark:bg-dark-200 dark:border-gray-600 p-3"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-pink text-white font-medium rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
