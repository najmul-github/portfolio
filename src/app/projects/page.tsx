"use client";

import React from "react";
import MyProjects from "@/components/MyProjects";
import { 
  Code, Sparkles, Zap, Shield, Lock, 
  Terminal, Database, Activity, Share2, 
  ChevronRight, Layers, Fingerprint
} from "lucide-react";

const Projects = () => {
  const registryStats = [
    { label: "Production Deployments", value: "15+", icon: Layers, color: "text-purple-400" },
    { label: "Core Tech Stack", value: "12+", icon: Database, color: "text-blue-400" },
    { label: "Engineering Tenure", value: "5+ Yrs", icon: Activity, color: "text-emerald-400" },
  ];

  const protocols = [
    {
      title: "FinTech Compliance",
      desc: "Core banking EKYC logic and sensitive client registration pipelines under IFIC Bank standards.",
      icon: Shield,
    },
    {
      title: "Gov-Scale Automation",
      desc: "DGFood supply chain logistics with strict national security access profiles.",
      icon: Lock,
    },
    {
      title: "High-Load Microservices",
      desc: "Background notification engines handling 5,000+ concurrent live user events.",
      icon: Zap,
    },
    {
      title: "Proprietary Routing",
      desc: "Mass transport optimization logic for Shuttle Shohoz operations.",
      icon: Share2,
    }
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-purple-500/30">
      {/* 01. THE TERMINAL HEADER */}
      <section className="pt-32 pb-20 relative overflow-hidden px-6 lg:px-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest mb-8">
            <Terminal size={12} /> Registry_v3.0.init
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                Production <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 italic">Ecosystems.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                A catalog of high-concurrency backends, microservice pipelines, 
                and enterprise architectures engineered for <span className="text-white font-medium">zero-fail reliability.</span>
              </p>
            </div>

            {/* Live Registry Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-auto">
              {registryStats.map((stat, i) => (
                <div key={i} className="px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl min-w-[200px]">
                  <stat.icon size={18} className={`${stat.color} mb-3`} />
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. SYSTEM ENTRIES (Your Project Component) */}
      <section className="px-6 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
           <MyProjects />
        </div>
      </section>

      {/* 03. NDA & INFRASTRUCTURE PROTOCOLS (The "Dark Matter" Work) */}
      <section className="py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <Fingerprint size={300} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Internal Infrastructure & NDA</h2>
                  <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Authorized Technical Disclosure Only</p>
                </div>
                <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-400 text-[10px] font-mono font-bold animate-pulse">
                  RESTRICTED_ACCESS
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {protocols.map((p, i) => (
                  <div key={i} className="group flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 border border-white/5 group-hover:border-purple-500/50 transition-all">
                      <p.icon size={20} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-white text-lg">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategic Call-to-Action */}
              <div className="mt-20 p-8 bg-purple-600/10 border border-purple-500/20 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600 rounded-2xl shadow-lg shadow-purple-600/20">
                     <Terminal size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Request Architectural Deep Dive</h4>
                    <p className="text-gray-400 text-sm">Review database schemas, query tuning paradigms, and structural flow charts.</p>
                  </div>
                </div>
                <button className="whitespace-nowrap px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2 group">
                  Initiate Review <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;