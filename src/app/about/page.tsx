"use client";

import React from "react";
import Experience from "@/components/Experience";
import Myplace from "@/components/Myplace";
import MyStory from "@/components/MyStory";
import { 
  Target, Code2, Zap, ShieldCheck, 
  Binary, Cpu, Globe2, Fingerprint, Activity,
  Database
} from "lucide-react";

const About = () => {
  const coreStats = [
    { label: "Logic Mastery", value: "98%", icon: Binary, color: "text-purple-400" },
    { label: "Uptime Focus", value: "99.9%", icon: Activity, color: "text-emerald-400" },
    { label: "Global Reach", value: "3+ Regions", icon: Globe2, color: "text-blue-400" },
    { label: "Data Integrity", value: "Verified", icon: Database, color: "text-orange-400" },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-purple-500/30">
      {/* Structural Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-32 pb-20 relative">
        
        {/* Section 01: The Identity Header */}
        <div className="relative mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest mb-6">
            <Fingerprint size={12} /> Identity_Verified
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              Najmul <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                Hoq.
              </span>
            </h1>
            <div className="border-l border-gray-800 pl-8 space-y-4">
              <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.2em]">Core Philosophy</p>
              <p className="text-xl text-gray-300 leading-relaxed italic">
                &quot;I engineer systems where low-latency isn&apos;t a goal—it&apos;s a prerequisite. 
                Architecture should be invisible until it fails; my job is to ensure it stays invisible.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Section 02: Performance Metrics (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {coreStats.map((stat, i) => (
            <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all">
              <stat.icon className={`${stat.color} mb-6`} size={24} />
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Section 03: The Pillars (High-Density Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-32">
          
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">Full-Stack Architecture</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                With a background deeply rooted in enterprise development, I build 
                applications across <span className="text-white font-semibold">PHP (Laravel/Lumen)</span>, 
                <span className="text-white font-semibold">React</span>, and <span className="text-white font-semibold">Python</span>. 
                My focus is on creating cohesive links between UI/UX and complex backend logic.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                {["LUMEN", "DJANGO", "VUE.JS", "REACT", "NEXT.JS"].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full border border-white/5 text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Binary className="absolute -right-12 -bottom-12 w-64 h-64 text-white/[0.02] group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-white/5 rounded-[2.5rem] p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Optimization</h3>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                <p className="text-3xl font-black text-white mb-1">0.78ms</p>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest italic">Target API Latency Achieved</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I specialize in "Slashing the Runtime." By refactoring query logic and 
                implementing advanced caching, I’ve reduced core system latencies by over 36% 
                in enterprise environments.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400 border border-orange-500/20">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold">Security First</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Engineering <span className="text-white">FinTech EKYC pipelines</span> and multi-tenant SaaS structures 
              requires a zero-trust mindset. I deploy architectures that are battle-hardened 
              against data intrusion and integrity failures.
            </p>
            <div className="p-3 bg-orange-500/5 rounded-xl border border-orange-500/10 text-[10px] font-mono text-orange-400">
              $ system_check: 100% SECURE_PIPELINES
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 lg:p-12 group overflow-hidden relative">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Scalable Operations</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Currently driving engines for <span className="text-white font-semibold">5,000+ active user event notification streams</span>. 
                I don’t just build for today; I build for the load your system will face tomorrow.
              </p>
            </div>
            <Cpu className="absolute -right-8 -bottom-8 w-48 h-48 text-white/[0.02] group-hover:rotate-45 transition-transform duration-1000" />
          </div>
        </div>

        {/* Final Mission Segment */}
        <div className="relative p-12 lg:p-20 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[3rem] text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <h2 className="text-3xl lg:text-5xl font-black mb-8">The Mission.</h2>
          <p className="text-gray-400 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            To match clean coding standards with modern cloud infrastructure, 
            building technical tools that <span className="text-white font-medium italic underline decoration-purple-500 underline-offset-8">minimize operational friction</span> and 
            scale alongside expanding international products.
          </p>
        </div>
      </div>

      {/* Structured Sections */}
      <Myplace />
      <MyStory />
      <Experience />
    </main>
  );
};

export default About;