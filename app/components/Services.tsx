'use client'

import { motion } from 'framer-motion'
import { Search, BarChart3, FileText, Link2, Megaphone, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'Discover high-value keywords that drive qualified traffic to your site.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'SEO Analytics',
    description: 'Track, measure, and optimize your SEO performance with detailed insights.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: FileText,
    title: 'Content Optimization',
    description: 'Craft compelling, SEO-friendly content that ranks and converts.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Link2,
    title: 'Link Building',
    description: 'Build authoritative backlinks that boost your domain authority.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Megaphone,
    title: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Technical SEO',
    description: 'Optimize your site structure, speed, and mobile experience.',
    gradient: 'from-pink-500 to-rose-500'
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive SEO solutions tailored to skyrocket your online presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="group relative h-full p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px', borderRadius: '1rem' }}>
                  <div className="w-full h-full bg-slate-800 rounded-2xl"></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 flex items-center text-purple-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 5 }}
                  >
                    Learn More →
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
