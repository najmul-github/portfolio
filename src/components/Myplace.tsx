"use client";

import { Star, MapPin, Terminal, Cpu, HardDrive, Globe } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const Myplace = () => {
  return (
    <section className="pb-24 bg-white relative">
      {/* Decorative Blueprint/Grid Lines for Tech Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full border border-purple-100/80 mb-3">
            <Terminal className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-[10px] font-mono font-bold text-purple-700 uppercase tracking-widest">System Telemetry</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
            Operational Base & Core Stack<span className="text-purple-600">.</span>
          </h2>
        </div>

        {/* 10x Asymmetric Command Center Grid */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 items-stretch">
          
          {/* Card 1: The Engine Core (Stack Marquees) - Spans 1 Column */}
          <div className="lg:col-span-1 bg-gray-950 rounded-2xl border border-gray-800 shadow-2xl p-6 flex flex-col justify-between overflow-hidden relative group">
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
            
            <div>
              {/* Simulated Terminal Header Bar */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block"></span>
                  </div>
                  <span className="text-xs font-mono text-gray-400 font-medium ml-2">engine_core.sh</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Active</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" /> Technology Segments
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Continuous pipeline of modern frameworks and high-concurrency database layers.
                </p>
              </div>
            </div>

            {/* Marquee Tracks Stacked Inside the Terminal Shell */}
            <div className="flex flex-col gap-3 py-6 relative">
              
              {/* Row 1 */}
              <Marquee speed={25} gradient={false}>
                <div className="flex gap-3 items-center pr-3">
                  <div className="bg-gray-900 text-gray-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-gray-800 shadow-sm">
                    Laravel/Lumen
                  </div>
                  <Star className="text-purple-500 w-3 h-3 fill-purple-500" />
                  <div className="bg-gray-900 text-gray-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-gray-800 shadow-sm">
                    PHP 8.x
                  </div>
                  <Star className="text-purple-500 w-3 h-3 fill-purple-500" />
                  <div className="bg-gray-900 text-gray-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-gray-800 shadow-sm">
                    Vue.js / Nuxt
                  </div>
                  <Star className="text-purple-500 w-3 h-3 fill-purple-500" />
                </div>
              </Marquee>

              {/* Row 2 */}
              <Marquee direction="right" speed={20} gradient={false}>
                <div className="flex gap-3 items-center pr-3">
                  <div className="bg-purple-950/40 text-purple-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-purple-900/50 shadow-sm">
                    MySQL
                  </div>
                  <Star className="text-indigo-400 w-3 h-3 fill-indigo-400" />
                  <div className="bg-purple-950/40 text-purple-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-purple-900/50 shadow-sm">
                    Redis Cache
                  </div>
                  <Star className="text-indigo-400 w-3 h-3 fill-indigo-400" />
                  <div className="bg-purple-950/40 text-purple-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-purple-900/50 shadow-sm">
                    AWS / Docker
                  </div>
                  <Star className="text-indigo-400 w-3 h-3 fill-indigo-400" />
                </div>
              </Marquee>

              {/* Row 3 */}
              <Marquee speed={30} gradient={false}>
                <div className="flex gap-3 items-center pr-3">
                  <div className="bg-gray-900 text-gray-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-gray-800 shadow-sm">
                    Python / Django
                  </div>
                  <Star className="text-purple-500 w-3 h-3 fill-purple-500" />
                  <div className="bg-gray-900 text-gray-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-gray-800 shadow-sm">
                    Google GenAI
                  </div>
                  <Star className="text-purple-500 w-3 h-3 fill-purple-500" />
                  <div className="bg-gray-900 text-gray-300 font-mono text-xs py-1.5 px-3 rounded-lg border border-gray-800 shadow-sm">
                    Datadog
                  </div>
                  <Star className="text-purple-500 w-3 h-3 fill-purple-500" />
                </div>
              </Marquee>
            </div>

            {/* Bottom Terminal Metric Status */}
            <div className="border-t border-gray-900 pt-4 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5" /> IO_STATUS: NOMINAL
              </span>
              <span>VER: 2026.4.2</span>
            </div>
          </div>

          {/* Card 2: The Base Hub (Map Dashboard Component) - Spans 2 Columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 flex flex-col justify-between relative group overflow-hidden">
            
            {/* Top Operational Telemetry Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-50 rounded-xl border border-purple-100 flex-shrink-0">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    Command Station Location
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 font-medium mt-0.5">
                    <MapPin className="w-3 h-3 text-purple-500" /> Dhaka, Bangladesh — GMT +6
                  </p>
                </div>
              </div>

              {/* Coordinates HUD readout badge */}
              <div className="bg-gray-50 border border-gray-200/60 px-3 py-1.5 rounded-xl text-right hidden sm:block">
                <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wider">Coordinates</span>
                <span className="text-xs font-mono font-semibold text-gray-700 tracking-wide">23.8103° N, 90.4125° E</span>
              </div>
            </div>

            {/* Localized English Map Embed Frame Container */}
            <div className="relative w-full h-64 lg:h-[240px] overflow-hidden rounded-xl border border-gray-200 bg-slate-50 shadow-inner group/map">
              {/* Decorative Crosshair HUD overlay for a cool, technical dashboard effect */}
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-gray-200 shadow-sm text-[10px] font-mono font-bold text-gray-600 tracking-wide uppercase opacity-80 group-hover/map:opacity-100 transition-opacity">
                Target: Node_Base
              </div>

              <iframe
                src="https://maps.google.com/maps?q=Dhaka,%20Bangladesh&t=&z=12&ie=UTF8&iwloc=&output=embed&hl=en"
                className="absolute top-0 left-0 w-full h-full grayscale-[25%] contrast-[105%] brightness-[98%] transition-all duration-700 group-hover/map:grayscale-0"
                loading="lazy"
                allowFullScreen
                style={{ border: 0 }}
              ></iframe>
            </div>

            {/* Bottom Connectivity Bar */}
            <div className="mt-4 pt-1 flex items-center justify-between text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
                Global Delivery Pipeline Available
              </span>
              <span className="text-gray-400 text-[11px] font-mono">REMOTE / HYBRID COMPATIBLE</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Myplace;