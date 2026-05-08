"use client";
import React from "react";
import { Calendar, MapPin, Briefcase, Award, Zap, ShieldCheck, Database, Layers } from "lucide-react";

const careerTimeline = [
  {
    company: "Giga Tech Limited",
    group: "BEXIMCO Group",
    role: "Systems Architect III",
    duration: "2024 — Present",
    location: "On-site",
    impact: "Led 50+ optimized API deployments for Global EdTech & National Logistics.",
    technologies: ["PHP Laravel", "Lumen", "Python Django", "Vue.js", "Angular", ".NET"],
    responsibilities: [
      "Architected the EKYC digital onboarding for IFIC Bank, prioritizing zero-trust data security and process automation.",
      "Revamped structural cores for 3 high-impact enterprise projects, optimizing Mekumi EdTech's global API logic.",
      "Engineered national logistics frameworks for DGFood, ensuring real-time supply chain synchronization.",
      "Developed secure SaaS archiving models for banking management networks and biometric fingerprint applications."
    ],
    accolades: "Key Performer 2026"
  },
  {
    company: "Patrons Venture Ltd.",
    group: "Enterprise Ops",
    role: "Full-Stack Engineer",
    duration: "2023 — 2024",
    location: "On-site",
    impact: "Built the proprietary GRID Logistics ecosystem from zero to production.",
    technologies: ["PHP Laravel", "Vue.js", "GRID Architecture", "JavaScript"],
    responsibilities: [
      "Solely architected and deployed both Frontend and Backend for the GRID logistics system, managing the end-to-end lifecycle.",
      "Engineered 10+ mission-critical API architectures within the venture ecosystem to support 12 internal projects.",
      "Standardized data flow protocols for high-impact enterprise-grade web services."
    ],
    accolades: null
  },
  {
    company: "Shuttle Technologies Ltd.",
    group: "Mass Mobility SaaS",
    role: "Software Engineering Specialist",
    duration: "2020 — 2023",
    location: "On-site",
    impact: "Optimized P99 latency by 36%, handling 5,000+ concurrent real-time connections.",
    technologies: ["Lumen", "Redis", "Google Maps API", "Datadog", "Metabase", "MySQL"],
    responsibilities: [
      "Engineered a high-availability notification microservice (SMS/Push/Email) for massive concurrent user spikes.",
      "Optimized API V2 response times to 0.78ms, delivering a 25% computational speed boost via advanced data parsing.",
      "Launched Shuttle App V2 with real-time Map rendering and 20+ transactional booking REST APIs.",
      "Developed complex operational retention dashboards, filtering 15+ relational dimensions for executive decision-making."
    ],
    accolades: "Employee of the Year 2021 • Team Lead (May 2023)"
  }
];

const Experience = () => {
  return (
    <section className="py-24 relative bg-[#030712] text-white overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#4b5563 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-24 relative">
        
        {/* Section Header: Minimalist & Authoritative */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase">
            <Layers className="w-4 h-4" />
            <span>Deployment History</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 italic">Execution.</span>
          </h2>
        </div>

        {/* The 200 IQ Timeline Container */}
        <div className="relative border-l border-gray-800/50 ml-4 md:ml-0 md:pl-0">
          
          {careerTimeline.map((item, index) => (
            <div key={index} className="relative mb-20 last:mb-0 pl-10 md:pl-0">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#030712] border-2 border-purple-500 z-20 hidden md:block">
                <div className="absolute inset-1 rounded-full bg-purple-500 animate-pulse"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                
                {/* Left: Metadata (Desktop Only) */}
                <div className="lg:col-span-3 hidden lg:block text-right pt-2">
                  <p className="text-xl font-mono font-bold text-white">{item.duration}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{item.location}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-purple-400 font-bold uppercase">
                     <Zap size={12} /> {item.accolades || "Active Node"}
                  </div>
                </div>

                {/* Right: Content Card */}
                <div className="lg:col-span-9 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:bg-white/[0.07] transition-all duration-500 group relative overflow-hidden">
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/10 transition-all"></div>

                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                    <div>
                      <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-1">{item.group}</p>
                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">{item.company}</h3>
                      <p className="text-lg text-gray-400 font-medium mt-1">{item.role}</p>
                    </div>
                    {/* Mobile Duration Tag */}
                    <div className="lg:hidden px-3 py-1 bg-white/10 rounded-lg text-xs font-mono font-bold">
                      {item.duration}
                    </div>
                  </div>

                  {/* Impact Summary Chip */}
                  <div className="flex items-start gap-4 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl mb-8">
                    <ShieldCheck className="text-emerald-400 shrink-0 w-5 h-5 mt-1" />
                    <p className="text-sm md:text-base text-emerald-100 font-medium leading-relaxed">
                      {item.impact}
                    </p>
                  </div>

                  {/* Responsibilities: High-End Typography */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex gap-4 group/item">
                        <span className="text-purple-500 font-mono text-sm pt-1">0{i+1}</span>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Horizontal Scroll/Flex */}
                  <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                    <Database size={14} className="text-gray-600 mr-2" />
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono font-bold text-gray-500 border border-gray-800 px-2 py-1 rounded hover:border-purple-500/50 hover:text-white transition-all cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;