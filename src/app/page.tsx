"use client";

import { Download, ArrowRight, Globe, Zap, ShieldCheck, Activity, Award, Terminal, Layout, Database } from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/profile.png";
import Link from "next/link";

// Sub-components
import MyStory from "@/components/MyStory";
import Skils from "@/components/Skils";
import Experience from "@/components/Experience";
import ProjectBanner from "@/components/ProjectBanner";

const Home = () => {
  return (
    <main className="min-h-screen relative w-full overflow-x-hidden bg-[#030712] text-white">
      
      {/* --- RESPONSIVE SENIOR ARCHITECT HERO --- */}
      <section className="relative z-10">
        {/* Background Engineering Grid */}
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: `linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)]"></div>

        <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-28 max-w-7xl mx-auto pt-16 md:pt-24 pb-20 md:pb-32">
          {/* Flex direction changes to col-reverse on mobile to put text first or col for profile first. 
              Here we use flex-col (Profile top) for better mobile visual impact or flex-col-reverse (Text top). 
              Let's go with flex-col-reverse for mobile text readability. */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Authority & Impact */}
            <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-10">
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-2">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[9px] md:text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
                  Key Performer 2026 • Senior Engineering Lead
                </span>
              </div> */}

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] lg:leading-[0.9] text-slate-50">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 italic">
                  High-Performance
                </span> <br />
                Ecosystems.
              </h1>

              <div className="space-y-6">
                {/* The 200 IQ Strategic Headline */}
                {/* <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-[0.3em] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                  Infrastructure Architect & Product Strategist
                </h2>
                 */}
                <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Bridging the gap between <span className="text-white font-medium">complex backend logic</span> and 
                  <span className="text-white font-medium"> seamless user experiences</span> for over 5 years. Specializing in <span className="text-white font-medium">high-availability microservices</span> and 
                  <span className="text-white font-medium"> government-grade infrastructure</span>. 
                  From <span className="text-white font-medium">National Identity systems</span> to 
                  global <span className="text-white font-medium">Edutech platforms</span>, I drive 
                  <span className="text-white font-medium"> 36% performance gains</span> for enterprise partners in 
                  <span className="text-white font-medium"> Sweden and Japan</span>.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500 uppercase tracking-tighter">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    National Identity & EKYC Contributor
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500 uppercase tracking-tighter">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    Distributed Systems Specialist
                  </div>
                </div>
              </div>

              {/* Senior Tech Stack: Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                  <Terminal className="w-4 h-4 text-red-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-gray-500 uppercase leading-none">Backend Architecture</p>
                    <p className="text-xs font-semibold text-gray-200">PHP Laravel • Python Django</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                  <Layout className="w-4 h-4 text-blue-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-gray-500 uppercase leading-none">Frontend Excellence</p>
                    <p className="text-xs font-semibold text-gray-200">JavaScript • React.js • Vue.js • Angular.js • TS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl sm:col-span-2 lg:col-span-1">
                  <Database className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-gray-500 uppercase leading-none">Infrastructure</p>
                    <p className="text-xs font-semibold text-gray-200">AWS • Docker • Kubernetes</p>
                  </div>
                </div>
              </div>

              {/* Action Hub: Stacked on mobile, row on desktop */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/contact" className="w-full sm:w-auto group px-8 py-4 bg-white text-black rounded-2xl font-bold transition-all hover:bg-purple-500 hover:text-white flex justify-center items-center gap-3">
                  Say Hello <ArrowRight size={18} />
                </Link>
                <Link href="https://najmulHoq-portfolio.vercel.app/NajmulHoq.pdf" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-800 rounded-2xl font-bold hover:bg-white/5 flex justify-center items-center gap-3 text-gray-300">
                  <Download size={18} /> View Resume
                </Link>
              </div>

              {/* Benchmarks: Always visible, scales down */}
              {/* Benchmarks: Refined for International Authority */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-10 border-t border-gray-900/50">
                <div className="text-center lg:text-left">
                  <Zap className="w-4 h-4 text-purple-400 mb-2 mx-auto lg:mx-0" />
                  <p className="text-[8px] sm:text-xs font-bold text-gray-500 uppercase tracking-tighter">P99 Response</p>
                  <p className="text-xs sm:text-lg font-mono font-bold mt-1 text-white">0.78ms</p>
                </div>
                
                <div className="text-center lg:text-left border-x border-gray-900/50 lg:border-none">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 mb-2 mx-auto lg:mx-0" />
                  <p className="text-[8px] sm:text-xs font-bold text-gray-500 uppercase tracking-tighter">Compliance</p>
                  <p className="text-xs sm:text-lg font-mono font-bold mt-1 text-white leading-tight">
                    FinTech <span className="hidden sm:inline">•</span> EdTech
                  </p>
                </div>
                
                <div className="text-center lg:text-left">
                  <Activity className="w-4 h-4 text-emerald-400 mb-2 mx-auto lg:mx-0" />
                  <p className="text-[8px] sm:text-xs font-bold text-gray-500 uppercase tracking-tighter">System Load</p>
                  <p className="text-xs sm:text-lg font-mono font-bold mt-1 text-white">50K+ Live</p>
                </div>
              </div>
            </div>

            {/* --- REDESIGNED RIGHT COLUMN (THE NEURAL CORE) --- */}
            <div className="w-full lg:flex-1 relative mb-12 lg:mb-0 h-[500px] md:h-[600px] flex items-center justify-center">
              
              {/* Layer 1: The Outer Pulse (Background Aura) */}
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />

              {/* Layer 2: Rotating Data Rings (SVG for Precision) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg className="w-[350px] md:w-[550px] aspect-square opacity-20 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="purple" strokeWidth="0.2" strokeDasharray="10 5" />
                </svg>
                <svg className="absolute w-[280px] md:w-[450px] aspect-square opacity-30 animate-[spin_30s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="indigo" strokeWidth="0.1" strokeDasharray="1 3" />
                </svg>
              </div>

              {/* Layer 3: The Profile "Crystal" */}
              <div className="relative group z-20">
                {/* The Frame: Asymmetric Hexagon Shape */}
                <div className="relative w-64 h-72 md:w-80 md:h-96 overflow-hidden border border-white/20 bg-gray-900/40 backdrop-blur-md transition-all duration-700 [clip-path:polygon(20%_0%,_100%_0%,_100%_80%,_80%_100%,_0%_100%,_0%_20%)] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_100%_100%,_0%_100%,_0%_0%)]">
                  
                  {/* Glitch Overlay Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  
                  <Image 
                    src={profileImg} 
                    alt="Najmul Hoq" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
                    priority 
                  />

                  {/* Internal Code Scanning Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_purple] animate-[scan_3s_ease-in-out_infinite]" />
                </div>

                {/* --- THE NEURAL CORE: MODERN AI STATUS CHIP --- */}
                <div className="absolute -top-8 -right-8 md:top-[-50px] md:right-[-50px] bg-white/5 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] transform rotate-6 hover:rotate-0 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all duration-700 cursor-default z-30">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      {/* Cyan pulse for AI/Neural vibe */}
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em] font-black">Next-Gen Stack</span>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-sm md:text-base font-black font-mono text-white tracking-tight leading-none block">
                        AI-Integrated Logic
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Certified by</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white font-black uppercase">Google AI</span>
                      </div>
                    </div>
                  </div>

                  {/* Subtle "Data Stream" decorative element inside the chip */}
                  <div className="absolute bottom-2 right-2 opacity-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400">
                      <path d="M12 2V4M12 20V22M4 12H2M22 12H20M18.36 5.64L16.95 7.05M7.05 16.95L5.64 18.36M18.36 18.36L16.95 16.95M7.05 7.05L5.64 5.64" />
                    </svg>
                  </div>
                </div>

                {/* --- EXPERIENCE BADGE (BOTTOM LEFT) --- */}
                <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-[#030712]/95 backdrop-blur-3xl border border-white/10 p-5 rounded-3xl shadow-2xl group-hover:border-purple-500/50 group-hover:-translate-x-3 group-hover:translate-y-3 transition-all duration-700 z-30">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      {/* The Purple Icon Box */}
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <Terminal size={22} className="text-white" />
                      </div>
                      {/* 3 Green dots to show "Top Level" */}
                      {/* <div className="absolute -top-1 -right-1 flex gap-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div> */}
                    </div>

                    <div>
                      {/* Simple wording for clients */}
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">Trusted Expert</p>
                      <h4 className="text-base font-black text-white mt-1 tracking-tight">Software Engineer III</h4>
                      <p className="text-[9px] text-purple-400 font-bold uppercase mt-0.5 tracking-tighter">GTL SED Core Team</p>
                    </div>
                  </div>
                </div>

                {/* Location/Presence Orb (Bottom Right) */}
                <div className="absolute top-1/2 -right-8 md:-right-16 -translate-y-1/2 flex flex-col gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-purple-500/20 hover:scale-110 transition-all cursor-pointer group/icon">
                      <Globe className="text-white/40 group-hover/icon:text-purple-400 group-hover/icon:rotate-45 transition-all" size={24} />
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-indigo-500/20 hover:scale-110 transition-all cursor-pointer group/icon">
                      <Activity className="text-white/40 group-hover/icon:text-indigo-400 transition-all" size={24} />
                  </div>
                </div>
              </div>

              {/* CSS Animations */}
              <style jsx>{`
                @keyframes scan {
                  0% { top: 0%; opacity: 0; }
                  50% { opacity: 1; }
                  100% { top: 100%; opacity: 0; }
                }
              `}</style>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTENT HUB --- */}
      <div className="relative z-10 bg-[#030712]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-20 md:mb-32"></div>
        
        {/* <div className="space-y-24 md:space-y-48 pb-20 md:pb-32"> */}
        <div>
          <Experience />
          <ProjectBanner />
          <Skils />
          <div className="relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] md:h-[600px] bg-purple-600/5 rounded-full blur-[100px] md:blur-[140px] -z-10"></div>
             <MyStory />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;