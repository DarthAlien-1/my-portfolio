'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simple loading transition on first paint
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Customer Inquiry Management Portal',
      category: 'Technical Support',
      image: '/customer.png',
      link: 'https://customer-inquiry-portal.vercel.app',
    },
    {
      id: 2,
      title: 'Jazz Lugaw Web App',
      category: 'E-Commerce',
      image: '/JLFOODS.png',
      link: 'https://jazz-lugaw.vercel.app/',
    },
    {
      id: 3,
      title: 'Smart Image Processor',
      category: 'Desktop & Vision Application',
      image: '/image-processor.png',
      link: 'https://image-processing-toolkit-2.streamlit.app/',
    },
  ];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <>
      {/* PAGE LOAD TRANSITION */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-indigo-950 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.div
              className="text-white font-bold text-2xl tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              JOSE FERNANDO
              <motion.div
                className="h-0.5 bg-white/40 mt-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-white font-sans text-slate-800 selection:bg-indigo-900 selection:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >

        {/* NAVIGATION BAR */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="fixed top-0 w-full bg-white z-50 border-b border-slate-100 px-6 md:px-12 py-4 flex justify-between items-center"
        >
          <div className="font-bold text-xl text-indigo-950 tracking-tight">
            JOSE FERNANDO
            <div className="text-[10px] uppercase text-slate-400 tracking-widest font-medium mt-0.5">
              Computer Engineer | Fullstack Developer
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-indigo-950 transition-colors">HOME</a>
            <a href="#about" className="hover:text-indigo-950 transition-colors">ABOUT ME</a>
            <a href="#services" className="hover:text-indigo-950 transition-colors">SERVICES</a>
            <a href="#projects" className="hover:text-indigo-950 transition-colors">PROJECTS</a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors"
            >
              CONTACT ME
            </motion.a>
          </div>
        </motion.nav>

        {/* HERO SECTION */}
        <motion.section
          id="home"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.p variants={fadeUp} className="text-sm font-bold text-indigo-950 tracking-wider uppercase">
              Hello There! I'm
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold text-indigo-950 tracking-tight leading-tight">
              Jose Fernando <br />B. Clemente
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-lg font-bold text-slate-700 tracking-wide uppercase">
              Computer Engineer & Fullstack Developer
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed max-w-lg">
              Helping businesses scale with efficient technical support, seamless e-commerce operations, and data-driven ad management.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 pt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(30,27,75,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-indigo-950 text-white font-medium rounded shadow-lg"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 border border-indigo-950 text-indigo-950 font-medium rounded"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            className="relative aspect-square md:aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/pic.jpg"
              alt="Jose Fernando B. Clemente"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="bg-[#f8f9fc] py-20 px-6 md:px-12 text-center"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-indigo-950 tracking-tight">
              About Me
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg font-bold text-slate-800">
              I hold a Bachelor of Science in Computer Engineering and specialize in providing high-level technical support, managing e-commerce customer experiences, and executing targeted ad campaigns.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
              I create efficient, user-focused workflows and digital solutions that help brands operate smoothly. With a strong engineering foundation, I build tools and manage systems that are clean, functional, and aligned with your business goals.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
              I specialize in technical email marketing, customer support infrastructure, and analytical ad management that works beautifully across all platforms.
            </motion.p>
          </div>
        </motion.section>

        {/* SERVICES SECTION */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-bold text-indigo-950 tracking-wider uppercase mb-2">
            Services
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-indigo-950 tracking-tight mb-12">
            What I Can Help You With
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💻', title: 'Technical Support', desc: 'Advanced troubleshooting, system automation, and scalable client resolution workflows.' },
              { icon: '🛒', title: 'E-Commerce Ops', desc: 'Seamless customer support management and back-end store administration to drive sales.' },
              { icon: '📈', title: 'Ad Specialist', desc: 'Strategic email marketing pipelines and data-driven ad campaign management.' },
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 bg-indigo-50 text-indigo-950 flex items-center justify-center rounded-full mx-auto mb-6 text-2xl"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-indigo-950 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PORTFOLIO SECTION */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="bg-[#f8f9fc] py-20 px-6 md:px-12 text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-bold text-indigo-950 tracking-wider uppercase mb-2">
            Portfolio
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-indigo-950 tracking-tight mb-8">
            My Projects
          </motion.h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', 'Technical Support', 'E-Commerce', 'Image Processing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-semibold rounded transition-colors ${
                activeTab === tab 
                  ? 'bg-indigo-950 text-white' 
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

          {/* Project Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 group"
                >
                  {/* Image Container with Hover Zoom Effect */}
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-white text-indigo-950 font-bold rounded shadow-lg"
                      >
                        Preview Live
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{project.category}</p>
                    <h3 className="text-lg font-extrabold text-indigo-950 mb-4">{project.title}</h3>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-2 bg-indigo-950 text-white text-sm font-semibold rounded hover:bg-indigo-900 transition-colors"
                    >
                      View Project
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="bg-indigo-950 text-white pt-16 pb-8 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12 border-b border-indigo-900 pb-12">

            <motion.div variants={fadeUp} className="md:col-span-1 space-y-4">
              <div className="font-bold text-2xl tracking-tight">
                JOSE FERNANDO
                <div className="text-[10px] uppercase text-indigo-300 tracking-widest font-medium mt-0.5">
                  Computer Engineer | Fullstack Developer
                </div>
              </div>
              <p className="text-indigo-200 text-sm leading-relaxed">
                I create efficient, user-focused workflows and digital solutions that help brands operate smoothly.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h4 className="font-bold text-lg mb-4">Menu Links</h4>
              <ul className="space-y-2 text-indigo-200 text-sm font-medium">
                <li><a href="#home" className="hover:text-white transition-colors">HOME</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">ABOUT ME</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SERVICES</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">PROJECTS</a></li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-3 text-indigo-200 text-sm">
                <li className="flex items-center gap-2">📞 +63 976 339 6671</li>
                <li className="flex items-center gap-2">✉ josephclemente13.jc@gmail.com</li>
                <li className="flex items-center gap-2">📍 Santa Maria, Bulacan, Philippines</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h4 className="font-bold text-lg mb-4">Professional Presence</h4>
              <div className="flex gap-4">
                <motion.a
                  href="www.linkedin.com/in/jose-fernando-clemente"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-indigo-900 rounded flex items-center justify-center hover:bg-indigo-800 transition-colors"
                >
                  in
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/jclemente.13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-indigo-900 rounded flex items-center justify-center hover:bg-indigo-800 transition-colors"
                >
                  in
                </motion.a>
                <motion.a
                  href="https://github.com/DarthAlien-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-indigo-900 rounded flex items-center justify-center hover:bg-indigo-800 transition-colors"
                >
                  in
                </motion.a>
              </div>
            </motion.div>

          </div>

          <div className="text-center text-indigo-300 text-sm">
            Copyright 2026 © Jose Fernando B. Clemente. All rights reserved.
          </div>
        </motion.footer>

      </motion.div>
    </>
  );
}
