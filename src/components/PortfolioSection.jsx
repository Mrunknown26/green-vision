'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects, portfolioCategories } from '@/data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All Projects"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-zinc-950/60 border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-brand-lime/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span className="text-xs font-mono tracking-widest text-brand-lime uppercase font-semibold">
                SELECTED WORKS
              </span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight">
              Selected Works & <br />
              <span className="italic text-zinc-300">Case Archives</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400">
            A curated selection of our finest packaging architectures, 3D character mascots, high-impact hoardings, and brand narratives across Gujarat and beyond.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${activeCategory === category
                ? 'bg-brand-lime text-brand-dark font-bold shadow-md shadow-brand-lime/20'
                : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-white/10'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-brand-lime/50 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-brand-lime/10"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={`Green Vision Graphics Design & Branding - ${project.title} (${project.subtitle})`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-brand-lime text-[11px] font-mono font-medium">
                    {project.badge}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-9 h-9 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 inline-flex items-center shadow-lg max-w-full">
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider block truncate font-medium"
                      style={{ color: '#FFFFFF' }}
                    >
                      {project.client} • {project.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif-heading text-white group-hover:text-brand-lime transition-colors font-normal">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mt-1.5 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
