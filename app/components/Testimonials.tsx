'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: '👩‍💼',
    content: 'Our organic traffic increased by 350% in just 6 months. The ROI has been incredible!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EcomGrowth',
    image: '👨‍💻',
    content: 'Finally, an SEO agency that delivers on their promises. Rankings improved dramatically.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GlobalCorp',
    image: '👩‍🎨',
    content: 'The team\'s expertise and dedication transformed our online presence completely.',
    rating: 5
  },
  {
    name: 'David Park',
    role: 'Owner, LocalBiz Pro',
    image: '👨‍💼',
    content: 'Local SEO services brought us to the top of maps results. More customers than ever!',
    rating: 5
  },
  {
    name: 'Lisa Anderson',
    role: 'VP Marketing, SaaS Solutions',
    image: '👩‍💼',
    content: 'Data-driven strategies that actually work. Best investment we\'ve made in marketing.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Entrepreneur',
    image: '👨‍🚀',
    content: 'Went from page 5 to page 1 for our main keywords. The results speak for themselves!',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 overflow-hidden group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote icon */}
                <motion.div
                  className="absolute top-4 right-4 text-purple-500/20"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Quote size={60} />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="text-4xl bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full w-14 h-14 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, #a855f7, #06b6d4, #a855f7)',
                    backgroundSize: '200% 100%',
                    padding: '2px',
                    borderRadius: '1rem',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="absolute inset-[2px] bg-slate-800 rounded-2xl"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
