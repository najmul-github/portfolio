"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, MapPin, Clock, Send, MessageSquare, 
  Terminal, Globe2, ArrowUpRight, Copy, CheckCircle2,
  Calendar, Zap, ShieldCheck
} from "lucide-react";
import profileImg from "../../../public/profile.png";

const Contact = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = { 
        timeZone: 'Asia/Dhaka', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      } as const;
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("najmulhoq95@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-24 relative">
        
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Header Section */}
        <div className="relative mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest mb-6">
            <Terminal size={12} /> Connection_Protocol
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            Let&apos;s <span className="text-gray-500 italic">Sync.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: System Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Availability Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Status: Accept_Incoming
                  </div>
                  <Clock className="text-gray-600" size={20} />
               </div>
               
               <div className="space-y-1">
                  <p className="text-gray-500 font-mono text-[10px] uppercase">Local Time (GMT+6)</p>
                  <p className="text-5xl font-mono font-bold tracking-tighter text-white">{currentTime}</p>
               </div>
            </div>

            {/* Direct Channel Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 space-y-6">
              <h3 className="font-mono text-[10px] uppercase text-gray-500 tracking-widest">Primary Channel</h3>
              
              <button 
                onClick={copyEmail}
                className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-mono">Email</p>
                    <p className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">najmulhoq95@gmail.com</p>
                  </div>
                </div>
                {copied ? <CheckCircle2 className="text-emerald-400" size={20} /> : <Copy className="text-gray-600 group-hover:text-white transition-colors" size={18} />}
              </button>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                 <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <MapPin size={20} />
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-mono">Deployment Node</p>
                    <p className="text-sm font-bold text-white">Dhaka, Bangladesh</p>
                 </div>
              </div>
            </div>

            {/* Quick Stats Bento */}
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <Zap className="text-yellow-500 mb-4" size={20} />
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Response</p>
                  <p className="text-lg font-bold text-white tracking-tight">&lt; 12 Hours</p>
               </div>
               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <ShieldCheck className="text-purple-500 mb-4" size={20} />
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Security</p>
                  <p className="text-lg font-bold text-white tracking-tight">E2E Encrypted</p>
               </div>
            </div>
          </div>

          {/* Right Side: Visual & Form Call */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
             
             {/* Large Watermark */}
             <Globe2 className="absolute -right-20 -bottom-20 w-80 h-80 text-white/[0.03] rotate-12" />

             <div className="relative z-10">
               <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 animate-spin-slow opacity-20" />
                    <div className="absolute inset-2 rounded-full overflow-hidden border border-white/10">
                      <Image 
                        src={profileImg} 
                        alt="Najmul Hoq" 
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 italic">&quot;Creating high-impact systems.&quot;</h2>
                    <p className="text-gray-400 leading-relaxed max-w-md uppercase font-mono text-[10px] tracking-[0.2em]">Available for architect roles, high-throughput microservices, and specialized UI/UX engineering.</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link 
                    href="mailto:najmulhoq95@gmail.com"
                    className="flex items-center justify-center gap-3 py-6 bg-white text-black font-black rounded-[2rem] hover:bg-gray-200 transition-all shadow-xl shadow-white/5"
                  >
                    Open Mailbox <Send size={18} />
                  </Link>
                  <Link 
                    href="https://najmulhoq.vercel.app/NajmulHoq.pdf"
                    target="_blank"
                    className="flex items-center justify-center gap-3 py-6 bg-black/40 border border-white/10 text-white font-bold rounded-[2rem] hover:bg-black transition-all group"
                  >
                    Review Specs <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </Link>
               </div>
             </div>

             <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                   <Calendar size={12} /> Mon - Fri (Active)
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                   <MessageSquare size={12} /> English / Bengali Proficiency
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;