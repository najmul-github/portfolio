"use client";

import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  ArrowRight,
  Terminal,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const MyStory = () => {
  const storyTimeline = [
    {
      year: "2019",
      title: "Core_Boot_Initialization",
      subtitle: "Academic Core & Research",
      description:
        "Graduated from North South University (CSE). Focused on data structures and deep-learning software. Senior Capstone Research Assistant with a focus on high-efficiency algorithmic foundations.",
      icon: GraduationCap,
      metrics: ["CGPA 3.00", "Contest Programming"],
      color: "border-blue-500/50 text-blue-400",
    },
    {
      year: "2020 — 2023",
      title: "Scale_Optimization_Phase",
      subtitle: "Software Engineering Specialist @ Shuttle",
      description:
        "Engineered event microservices for 5,000+ active users. Achieved ultra-low 0.78ms API latency. Built 20+ operational settings APIs that drove a 5% increase in customer booking conversions.",
      icon: Zap,
      metrics: ["0.78ms Latency", "5k+ Concurrent Users"],
      color: "border-purple-500/50 text-purple-400",
    },
    {
      year: "2023 — 2024",
      title: "Fullstack_Infrastructure_Deploy",
      subtitle: "Software Engineer @ Patrons Venture",
      description:
        "Single-handedly deployed the GRID logistics infrastructure. Championed 12 fast-paced in-house initiatives and authored 10 standalone production REST APIs to modernize freight tracking.",
      icon: Layers,
      metrics: ["12 Initiatives", "10+ REST APIs"],
      color: "border-emerald-500/50 text-emerald-400",
    },
    {
      year: "2024 — 2025",
      title: "Enterprise_Fintech_Logic",
      subtitle: "Software Engineer III @ Giga Tech (BEXIMCO)",
      description:
        "Architected high-security EKYC pipeline for IFIC Bank. Developed 50+ optimized Laravel logics for the international Mekumi EdTech network, processing multi-region data streams.",
      icon: ShieldCheck,
      metrics: ["EKYC Architect", "50+ Laravel Logics"],
      color: "border-orange-500/50 text-orange-400",
    },
    {
      year: "2026",
      title: "Intelligence_Layer_Integration",
      subtitle: "Google Generative AI Frameworks",
      description:
        "Integrating LLM intelligence into enterprise logic layers. Specializing in high-concurrency microservice scaling and bulletproof digital infrastructure for the global market.",
      icon: Sparkles,
      metrics: ["AI Certified", "Logic Scaling"],
      color: "border-amber-500/50 text-amber-400",
    },
  ];

  return (
    <section className="py-32 relative bg-[#030712] text-white overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-24 relative z-10">
        {/* Header with System Status */}
        <div className="mb-24">
          <div className="flex items-center gap-3 text-purple-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
            <Activity size={14} className="animate-pulse" /> System_Evolution_Log
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Engineering</span> Journey.
          </h2>
        </div>

        {/* The Timeline Circuit */}
        <div className="relative">
          {/* Main Vertical Trace Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {storyTimeline.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                
                {/* Visual Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-black border border-white/20 rounded-lg z-20 flex items-center justify-center transform -translate-x-1/2 hidden md:flex">
                   <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                </div>

                {/* Content Block */}
                <div className="w-full md:w-[45%]">
                  <div className={`group p-8 rounded-[2rem] bg-white/[0.02] border ${item.color} transition-all duration-500 hover:bg-white/[0.04]`}>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs opacity-50">{item.year}</span>
                      <item.icon size={20} className="opacity-80" />
                    </div>
                    
                    <h3 className="text-lg font-mono font-bold tracking-tight mb-1 uppercase italic">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm font-semibold mb-4 opacity-90">{item.subtitle}</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Performance Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.metrics.map((m, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400 group-hover:text-white transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date/Year Spacer for Desktop */}
                <div className="hidden md:block w-[45%] text-center">
                  <span className="text-8xl font-black opacity-[0.03] select-none uppercase tracking-tighter">
                    {item.year.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Module: Logic Summary */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-purple-500/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
             <div className="p-3 bg-purple-600 w-fit rounded-2xl shadow-lg shadow-purple-600/20">
                <Terminal size={24} />
             </div>
             <h3 className="text-3xl font-bold tracking-tighter">System Reliability: 99.9%</h3>
             <p className="text-gray-400 max-w-md">My career is defined by lowering latency and increasing system durability across every stack I touch.</p>
          </div>
          <button className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-purple-500 hover:text-white transition-all flex items-center gap-3">
             View Experience Roadmap <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyStory;