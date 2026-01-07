'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'Typically, you can start seeing meaningful results within 3-6 months. However, this varies based on your industry, competition, and current website status. Some improvements, like technical SEO fixes, can show results much faster.'
  },
  {
    question: 'What makes your SEO services different?',
    answer: 'We combine data-driven strategies with creative content approaches. Our team stays ahead of algorithm updates, uses cutting-edge tools, and provides transparent reporting. Plus, we focus on long-term sustainable growth, not quick fixes.'
  },
  {
    question: 'Do you guarantee first page rankings?',
    answer: 'While we can\'t guarantee specific rankings (no ethical SEO agency can), we do guarantee our best efforts using proven strategies. Our track record shows 98% of clients see significant improvements in their rankings and traffic.'
  },
  {
    question: 'What if I\'m not satisfied with the results?',
    answer: 'We offer a 30-day money-back guarantee on all our plans. If you\'re not completely satisfied within the first month, we\'ll provide a full refund, no questions asked.'
  },
  {
    question: 'Do you work with businesses in my industry?',
    answer: 'Yes! We have experience across virtually every industry - from e-commerce and SaaS to local businesses and professional services. We tailor our strategies to match your specific industry needs and target audience.'
  },
  {
    question: 'What\'s included in your monthly reports?',
    answer: 'Our reports include keyword rankings, organic traffic growth, backlink analysis, conversion metrics, competitor insights, and actionable recommendations. Everything is presented in an easy-to-understand format.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our SEO services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                >
                  <span className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
                        <Minus className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="p-2 rounded-full bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"></div>
                        <motion.p
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          className="text-gray-400 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
