'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');

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
    {
      id: 4,
      title: 'Job Match Dashboard',
      category: 'Data & Automation',
      image: '/job-dashboard.png',
      link: 'https://github.com/DarthAlien-1/job-dashboard',
    },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-indigo-900 selection:text-white">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-slate-100 px-6 md:px-12 py-4 flex justify-between items-center">
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
          <a href="#contact" className="px-6 py-2.5 bg-indigo-950 text-white rounded hover:bg-indigo-900 transition-colors">
            CONTACT ME
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm font-bold text-indigo-950 tracking-wider uppercase">Hello There! I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-950 tracking-tight leading-tight">
            Jose Fernando <br/>B. Clemente
          </h1>
          <h2 className="text-lg font-bold text-slate-700 tracking-wide uppercase">
            Computer Engineer & Fullstack Developer
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-lg">
            Helping businesses scale with efficient technical support, seamless e-commerce operations, and data-driven ad management.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#projects" className="px-8 py-3 bg-indigo-950 text-white font-medium rounded hover:bg-indigo-900 transition-all shadow-lg hover:shadow-indigo-900/20">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-indigo-950 text-indigo-950 font-medium rounded hover:bg-slate-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/pic.jpg" 
            alt="Jose Fernando B. Clemente"
            fill
            className="object-cover"
           priority
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#f8f9fc] py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-extrabold text-indigo-950 tracking-tight">About Me</h2>
          <p className="text-lg font-bold text-slate-800">
            I hold a Bachelor of Science in Computer Engineering and specialize in providing high-level technical support, managing e-commerce customer experiences, and executing targeted ad campaigns.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I create efficient, user-focused workflows and digital solutions that help brands operate smoothly. With a strong engineering foundation, I build tools and manage systems that are clean, functional, and aligned with your business goals.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I specialize in technical email marketing, customer support infrastructure, and analytical ad management that works beautifully across all platforms.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <p className="text-sm font-bold text-indigo-950 tracking-wider uppercase mb-2">Services</p>
        <h2 className="text-4xl font-extrabold text-indigo-950 tracking-tight mb-12">What I Can Help You With</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-950 flex items-center justify-center rounded-full mx-auto mb-6 text-2xl">
              💻
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-3">Technical Support</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Advanced troubleshooting, system automation, and scalable client resolution workflows.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-950 flex items-center justify-center rounded-full mx-auto mb-6 text-2xl">
              🛒
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-3">E-Commerce Ops</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Seamless customer support management and back-end store administration to drive sales.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-950 flex items-center justify-center rounded-full mx-auto mb-6 text-2xl">
              📈
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-3">Ad Specialist</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Strategic email marketing pipelines and data-driven ad campaign management.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="projects" className="bg-[#f8f9fc] py-20 px-6 md:px-12 text-center">
        <p className="text-sm font-bold text-indigo-950 tracking-wider uppercase mb-2">Portfolio</p>
        <h2 className="text-4xl font-extrabold text-indigo-950 tracking-tight mb-8">My Projects</h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', 'Technical Support', 'E-Commerce', 'Image Processing', 'Data & Automation'].map((tab) => (
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
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 group">
              {/* Image Container with Hover Zoom Effect */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-indigo-950 font-bold rounded shadow-lg hover:scale-105 transition-transform">
                    Preview Live
                  </a>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{project.category}</p>
                <h3 className="text-lg font-extrabold text-indigo-950 mb-4">{project.title}</h3>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-indigo-950 text-white text-sm font-semibold rounded hover:bg-indigo-900 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-indigo-950 text-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12 border-b border-indigo-900 pb-12">
          
          <div className="md:col-span-1 space-y-4">
            <div className="font-bold text-2xl tracking-tight">
              JOSE FERNANDO
              <div className="text-[10px] uppercase text-indigo-300 tracking-widest font-medium mt-0.5">
                Computer Engineer | Fullstack Developer
              </div>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed">
              I create efficient, user-focused workflows and digital solutions that help brands operate smoothly.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Menu Links</h4>
            <ul className="space-y-2 text-indigo-200 text-sm font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">HOME</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">ABOUT ME</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SERVICES</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">PROJECTS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-indigo-200 text-sm">
              <li className="flex items-center gap-2">📞 +63 976 339 6671</li>
              <li className="flex items-center gap-2">✉ josephclemente13.jc@gmail.com</li>
              <li className="flex items-center gap-2">📍 Santa Maria, Bulacan, Philippines</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Professional Presence</h4>
            <div className="flex gap-4">
              <a 
              href="www.linkedin.com/in/jose-fernando-clemente" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-indigo-900 rounded flex items-center justify-center hover:bg-indigo-800 transition-colors"
              >
              in
              </a>
              <a 
              href="https://www.facebook.com/jclemente.13/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-indigo-900 rounded flex items-center justify-center hover:bg-indigo-800 transition-colors"
              >
              in
              </a>
              <a 
              href="https://github.com/DarthAlien-1" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-indigo-900 rounded flex items-center justify-center hover:bg-indigo-800 transition-colors"
              >
              in
              </a>
            </div>
          </div>

        </div>
        
        <div className="text-center text-indigo-300 text-sm">
          Copyright 2026 © Jose Fernando B. Clemente. All rights reserved.
        </div>
      </footer>

    </div>
  );
}