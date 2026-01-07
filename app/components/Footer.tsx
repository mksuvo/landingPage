'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

const footerLinks = {
  services: [
    'Keyword Research',
    'On-Page SEO',
    'Link Building',
    'Content Marketing',
    'Technical SEO',
    'Local SEO'
  ],
  company: [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'Case Studies',
    'Partners'
  ],
  resources: [
    'SEO Guide',
    'Documentation',
    'API Reference',
    'Support Center',
    'Community',
    'Status'
  ]
}

const socialLinks = [
  { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
  { icon: Instagram, href: '#', color: 'hover:text-pink-500' }
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  SEO Masters
                </span>
              </h3>
              <p className="text-gray-400 mb-6">
                Transforming businesses through cutting-edge SEO strategies. 
                Your success is our mission.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.a
                  href="mailto:hello@seomasters.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-purple-500/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  hello@seomasters.com
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  +1 (234) 567-890
                </motion.a>
                <motion.div
                  className="flex items-center gap-3 text-gray-400 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-pink-500/10 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  San Francisco, CA 94103
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2025 SEO Masters. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-lg bg-slate-800 text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              className="flex gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  )
}
