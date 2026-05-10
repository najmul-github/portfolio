"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignRight, X, ArrowUpRight, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for "Dock" contraction
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => setMenuOpen(false), [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav
            className={`relative flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-[2rem] border ${
              scrolled 
                ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl scale-[0.98]" 
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Logo: The System ID */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Terminal size={18} className="text-white" />
              </div>
              <span className="text-white font-black tracking-tighter text-xl">
                NAJMUL<span className="text-purple-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation: The Dock Links */}
            <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    pathname === link.href
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Action: CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-tighter rounded-full transition-all active:scale-95"
              >
                Sync Now <ArrowUpRight size={14} />
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white lg:hidden md:hidden hover:bg-white/10 transition-colors"
              >
                {menuOpen ? <X size={20} /> : <AlignRight size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Tactical Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-black p-6 pt-32 flex flex-col justify-between lg:hidden md:hidden"
          >
            {/* Background Grain/Noise */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <div className="relative space-y-12">
              <p className="font-mono text-[10px] text-purple-500 uppercase tracking-[0.3em]">System_Navigation</p>
              <nav className="flex flex-col gap-8">
                {[...navLinks, { name: "Get In Touch", href: "/contact" }].map((link, i) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-5xl font-black tracking-tighter text-white hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                    <span className="text-purple-600">.</span>
                    <span className="d-none">{i}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="relative border-t border-white/10 pt-8 pb-12 flex justify-between items-end">
              <div className="space-y-2">
                <p className="text-gray-500 text-xs font-mono">Based in</p>
                <p className="text-white font-bold">Dhaka, Bangladesh</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-gray-500 text-xs font-mono underline uppercase">najmulhoq95@gmail.com</p>
                <p className="text-[10px] text-purple-500 font-mono tracking-widest italic">EST. 2026</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;