'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 300, suffix: '%', label: 'Average Traffic Increase', duration: 2 },
  { value: 150, suffix: '+', label: 'Happy Clients', duration: 2 },
  { value: 95, suffix: '%', label: 'Client Retention Rate', duration: 2 },
  { value: 24, suffix: '/7', label: 'Support Available', duration: 1.5 },
]

function Counter({ value, duration }: { value: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString()
      }
    })
  }, [springValue])

  return <span ref={ref}>0</span>
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Results That Speak
            </span>
          </h2>
          <p className="text-xl text-gray-400">Real numbers from real businesses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 overflow-hidden"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, #a855f7, #06b6d4, #ec4899, #a855f7)',
                    backgroundSize: '300% 300%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="absolute inset-[2px] bg-slate-900 rounded-2xl"></div>
                </motion.div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      <Counter value={stat.value} duration={stat.duration} />
                      {stat.suffix}
                    </span>
                  </motion.div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>

                {/* Particles effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full"
                  style={{ x: '-50%', y: '-50%' }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
