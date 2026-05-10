"use client";

import React from "react";
import { 
  Code2, Layers, Database, ShieldCheck, Zap, Activity, Binary, 
  Globe2, Boxes
} from "lucide-react";

const skillGroups = [
  {
    id: "FE",
    title: "Frontend Engineering",
    icon: Code2,
    proficiency: "94%",
    description: "Architecting high-performance, reactive interfaces with utility-first styling.",
    skills: ["Vue.js (4+Y)", "React.js (3+Y)", "TypeScript", "Next.js", "Tailwind CSS"],
    accent: "blue"
  },
  {
    id: "BE",
    title: "Backend Infrastructure",
    icon: Layers,
    proficiency: "98%",
    description: "Designing scalable microservices and robust API logic for enterprise ecosystems.",
    skills: ["PHP Laravel", "Lumen", "Python Django", "RESTful Design", "Node.js"],
    accent: "purple"
  },
  {
    id: "DB",
    title: "Data Architecture",
    icon: Database,
    proficiency: "92%",
    description: "High-throughput database design and complex query optimization for big data.",
    skills: ["MySQL / MariaDB", "Redis Caching", "SQL Optimization", "Relational Mapping"],
    accent: "emerald"
  },
  {
    id: "OP",
    title: "Systems & DevOps",
    icon: Activity,
    proficiency: "89%",
    description: "Maintaining system integrity through observability and modern CI/CD pipelines.",
    skills: ["Git / GitHub", "Docker", "AWS", "Datadog / Metabase", "Linux Env"],
    accent: "orange"
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-24 relative">
        
        {/* Section Header: The Spec Sheet Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
              <Binary size={12} /> Technical Capabilities
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 italic">Stack.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-mono text-xs max-w-xs leading-relaxed border-l border-gray-800 pl-4">
            VER_2026.05 // FULL_STACK_ENGINEERING // 5+ YEARS OF DOCUMENTED PERFORMANCE GAINS.
          </p>
        </div>

        {/* The 200 IQ Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          
          {skillGroups.map((group, idx) => (
            <div 
              key={group.id} 
              className={`${idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5'} group relative bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden`}
            >
              {/* Subtle Icon Background Blur */}
              <group.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-white/[0.02] -rotate-12 group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`p-3 rounded-2xl bg-${group.accent}-500/10 border border-${group.accent}-500/20 text-${group.accent}-400`}>
                      <group.icon size={24} />
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono text-gray-600 uppercase tracking-tighter">Efficiency</p>
                      <p className="text-xl font-mono font-bold text-white leading-none">{group.proficiency}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {group.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-8">
                    {group.description}
                  </p>
                </div>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-black/40 border border-white/5 rounded-lg text-[10px] font-mono font-bold text-gray-500 hover:text-white hover:border-purple-500/50 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hardware-Grade Performance Footer */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/5 rounded-[2rem] p-8 flex items-center justify-between group">
            <div>
               <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest mb-1">Response Time</p>
               <h4 className="text-2xl font-black text-white">0.78ms <span className="text-xs text-gray-500">API P99</span></h4>
            </div>
            <Zap className="text-emerald-400 group-hover:animate-bounce" size={32} />
          </div>

          <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 flex flex-wrap items-center justify-around gap-8">
             <div className="flex items-center gap-4">
                <Globe2 className="text-gray-600" size={24} />
                <div>
                   <p className="text-[10px] font-mono text-gray-600 uppercase">Market Reach</p>
                   <p className="text-sm font-bold text-white">USA / JAPAN / BD</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Boxes className="text-gray-600" size={24} />
                <div>
                   <p className="text-[10px] font-mono text-gray-600 uppercase">Architecture</p>
                   <p className="text-sm font-bold text-white">Microservices / SaaS</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <ShieldCheck className="text-gray-600" size={24} />
                <div>
                   <p className="text-[10px] font-mono text-gray-600 uppercase">Security</p>
                   <p className="text-sm font-bold text-white">FinTech Hardened</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;