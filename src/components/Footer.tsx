"use client";

import React from "react";
import Link from "next/link";
import { Download, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Menubar from "./Menubar"; // Assuming these exist
import SocialsMenu from "./SocialsMenu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#030712] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Structural Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-purple-500/20">
                NH
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">Najmul Hoq</h2>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Infrastructure Architect</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering high-performance ecosystems with a focus on P99 latency optimization, 
              zero-trust security, and scalable microservice architectures.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                SYSTEMS_ONLINE
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Nodes: Dhaka // Sweden
              </div>
            </div>
          </div>

          {/* Navigation & Discussion Column */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-center">
            <div className="space-y-8 w-full max-w-[200px]">
              <div>
                <h3 className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-[0.3em] mb-4">Sitemap</h3>
                <Menubar isContactVisible={true} />
              </div>
              <div>
                <h3 className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-[0.3em] mb-4">Connect</h3>
                <div className="flex gap-4 text-gray-400">
                   <Link href="#" className="hover:text-purple-400 transition-colors"><Github size={20}/></Link>
                   <Link href="#" className="hover:text-purple-400 transition-colors"><Linkedin size={20}/></Link>
                   <Link href="#" className="hover:text-purple-400 transition-colors"><Mail size={20}/></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Action & Handshake Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 group hover:bg-white/[0.05] transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6">Initiate Discussion?</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Schedule Consultation
                  <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="https://najmulHoq-portfolio.vercel.app/NajmulHoq.pdf"
                  target="_blank"
                  className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Technical Specs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-mono text-gray-500 tracking-tighter">
          <div className="flex items-center gap-6">
            <p>© {currentYear} ALL_RIGHTS_RESERVED</p>
            <p className="hidden md:block">LOC: 23.8103° N, 90.4125° E</p>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            MADE_WITH_PURPLE_VALUES <span className="text-purple-500">by</span> <span className="text-white font-bold">NAJMUL_HOQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;