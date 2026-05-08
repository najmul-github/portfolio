"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, ExternalLink, Github, Layers, ShieldCheck, Zap, Cpu, Globe, Lock } from "lucide-react";

const featuredProjects = [
  {
    id: "01",
    title: "IFIC Bank EKYC",
    status: "Active",
    category: "FinTech Infrastructure",
    icon: ShieldCheck,
    description: "Architected a zero-trust digital onboarding ecosystem. Hardened security protocols for national financial data while automating multi-stage compliance pipelines.",
    technologies: ["Python", "Django", "gFlow", "PostgreSQL"],
    link: "https://digitalaof.ificbankbd.com/",
    metrics: { label: "Compliance", value: "Automated" },
    accent: "emerald"
  },
  {
    id: "02",
    title: "Mekumi Global",
    status: "Production",
    category: "EdTech Microservices",
    icon: Layers,
    description: "High-concurrency architecture serving Japan/USA markets. Engineered complex permission matrices and dynamic micro-role pathways for enterprise scaling.",
    technologies: ["PHP", "Laravel", "Vue.js", "Lumen"],
    link: "https://github.com/najmul-github",
    metrics: { label: "API Nodes", value: "50+" },
    accent: "purple"
  },
  {
    id: "03",
    title: "Shuttle Mobility",
    status: "Production",
    category: "Mass Mobility SaaS",
    icon: Zap,
    description: "Optimized mission-critical booking engines. Reduced system latency to sub-millisecond levels while managing 5,000+ concurrent real-time user instances.",
    technologies: ["PHP", "Redis", "Vue.js", "MySQL"],
    link: "https://www.shuttlebd.com/",
    metrics: { label: "Latency", value: "0.78ms" },
    accent: "cyan"
  }
];

const ProjectBanner = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Structural Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        {/* Section Header: Command Center Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
              <Cpu size={14} />
              <span>System Deployments</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none">
              Production <span className="text-gray-500 italic">Artifacts.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 border-l border-gray-800 pl-6 h-fit">
            <div className="text-right">
              <p className="text-white font-mono font-bold text-lg">03</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Active Systems</p>
            </div>
            <div className="text-right">
              <p className="text-emerald-400 font-mono font-bold text-lg">99.9%</p>
              <p className="text-gray-500 font-mono text-[10px] uppercase">Uptime Avg</p>
            </div>
          </div>
        </div>

        {/* The Project "Log" Layout */}
        <div className="space-y-6">
          {featuredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Left: Metadata & Icon */}
                  <div className="p-8 lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-xs text-gray-500 tracking-widest">MODULE_{project.id}</span>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-tight">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                          {project.status}
                        </div>
                      </div>
                      
                      <div className={`inline-flex p-3 rounded-2xl bg-${project.accent}-500/10 border border-${project.accent}-500/20 text-${project.accent}-400 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon size={28} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">{project.category}</p>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                      <div>
                        <p className="text-[10px] font-mono text-gray-500 uppercase">{project.metrics.label}</p>
                        <p className="text-lg font-bold text-white font-mono">{project.metrics.value}</p>
                      </div>
                      <div className="h-8 w-px bg-gray-800" />
                      <div className="flex gap-3">
                         <Link href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"><Github size={18}/></Link>
                         <Link href={project.link} className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"><ExternalLink size={18}/></Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: Description & Tech */}
                  <div className="p-8 lg:w-2/3 bg-white/[0.01] flex flex-col justify-between">
                    <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl italic">
                      &quot;{project.description}&quot;
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[11px] font-mono font-medium text-gray-400 group-hover:border-white/10 transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Footer Call to Action */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-white/10 rounded-[2.5rem]">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Ready to scale?</h4>
            <p className="text-gray-400 text-sm">Reviewing additional architecture logs in private repositories upon request.</p>
          </div>
          <div className="flex flex-wrap gap-4">
             <Link href="/projects" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
                All Systems <ArrowRight size={18}/>
             </Link>
             <Link href="/contact" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Book Consultation
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;