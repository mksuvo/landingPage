'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    price: '499',
    description: 'Perfect for small businesses getting started',
    features: [
      'Keyword Research (25 keywords)',
      'On-Page SEO Optimization',
      'Monthly Performance Report',
      'Basic Link Building',
      'Google My Business Setup',
      'Email Support'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'Professional',
    icon: Zap,
    price: '999',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'Keyword Research (100 keywords)',
      'Content Creation (4 articles/month)',
      'Advanced Link Building',
      'Competitor Analysis',
      'Technical SEO Audit',
      'Priority Support'
    ],
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: '2499',
    description: 'For businesses that demand the best',
    features: [
      'Everything in Professional',
      'Unlimited Keywords',
      'Content Creation (12 articles/month)',
      'White-Label Reporting',
      'Dedicated Account Manager',
      'Custom SEO Strategy',
      '24/7 Priority Support'
    ],
    gradient: 'from-orange-500 to-red-500',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-sm">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`relative h-full p-8 rounded-3xl bg-slate-800/50 backdrop-blur-sm border-2 ${
                  plan.popular ? 'border-purple-500' : 'border-slate-700'
                } overflow-hidden group cursor-pointer`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    background: [
                      `linear-gradient(0deg, transparent, transparent)`,
                      `linear-gradient(360deg, transparent, transparent)`,
                    ],
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50 blur-xl`}></div>
                </motion.div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.gradient} relative overflow-hidden group/btn`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Get Started</span>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"
                    />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400">
            All plans include a 30-day money-back guarantee. Need a custom solution?{' '}
            <motion.a
              href="#contact"
              className="text-purple-400 hover:text-purple-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Contact us
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
