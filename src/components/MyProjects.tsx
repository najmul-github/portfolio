"use client";

import React from "react";
import { ExternalLink, Github, Code, ShieldCheck, Layers, Bus, BarChart3, Users, Key, MonitorSmartphone, HelpCircle, Eye, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";

// Complete dataset of all 14 projects extracted explicitly from your profile timeline
const productionProjects = [
  {
    title: "TalkGPT Mobile App",
    description: "An iOS and Android voice interaction utility designed to enhance conversational skills. Features chat simulation overlays matching AI response layers, performance evaluation logic, and dedicated flows for interview/travel scenarios.",
    technologies: ["PHP", "JavaScript", "Python", "Mobile Application Frameworks"],
    liveUrl: "https://github.com/najmul-github",
    githubUrl: "https://github.com/najmul-github",
    status: "Production App",
    icon: MonitorSmartphone,
  },
  {
    title: "Mekumi EdTech Ecosystem",
    description: "Core structural revamping and microservice integration for a USA & Japan-based online educational network. Developed permission layers across Superadmin, Teacher, Student, Principal, and Course Designer roles.",
    technologies: ["PHP", "Laravel", "Vue.js", "Lumen"],
    liveUrl: "https://github.com/najmul-github",
    githubUrl: "https://github.com/najmul-github",
    status: "50+ REST API Logics Built",
    icon: Layers,
  },
  {
    title: "IFIC Bank EKYC Platform",
    description: "Engineered the centralized client digital onboarding pipeline for IFIC Bank. Focused on automated identification flows, regulatory parsing logic, and hardening core database layer privacy profiles.",
    technologies: ["JavaScript", "Python", "Django", "gFlow Infrastructure"],
    liveUrl: "https://digitalaof.ificbankbd.com/",
    githubUrl: "https://github.com/najmul-github",
    status: "Active Financial Service",
    icon: ShieldCheck,
  },
  {
    title: "Archiving Banking SaaS Service",
    description: "Key architecture contributor to an enterprise-grade cloud file archiving and historical tracking system built tailored for corporate banking system records.",
    technologies: ["JavaScript", "Angular", ".NET", "SQL Server"],
    liveUrl: "https://github.com/najmul-github",
    githubUrl: "https://github.com/najmul-github",
    status: "Enterprise SaaS Model",
    icon: Key,
  },
  {
    title: "DGFood National Supply Automation",
    description: "Contributed to the automation and logistics system under the Directorate General of Food (Government of Bangladesh) to handle public food reserve logistics pipelines securely.",
    technologies: ["PHP", "Laravel", "JavaScript", "Database Tuning"],
    liveUrl: "https://fsmmsdev.dgfood.gov.bd/",
    githubUrl: "https://github.com/najmul-github",
    status: "Government System",
    icon: Code,
  },
  {
    title: "Shuttle Bangladesh & Cockpit App",
    description: "Led development of full-stack backends and user panels for mass ride-sharing. Handles advanced block bookings, live driver tracking maps, cancellations, and unified checkout systems.",
    technologies: ["PHP", "Laravel", "JavaScript", "Vue.js", "Google Maps API"],
    liveUrl: "https://www.shuttlebd.com/",
    githubUrl: "https://github.com/najmul-github",
    status: "Production Service",
    icon: Bus,
  },
  {
    title: "Follow-up Multi-Filter Dashboard",
    description: "Developed an optimized customer analytics retention suite. Replicated intricate spreadsheet filter capabilities handling 15 distinct dynamic dimension combinations effortlessly.",
    technologies: ["PHP", "Laravel", "JavaScript", "Vue.js", "MySQL Query Tuning"],
    liveUrl: "https://github.com/najmul-github",
    githubUrl: "https://github.com/najmul-github",
    status: "Analytics Dashboard",
    icon: BarChart3,
  },
  {
    title: "Shuttle Jatrikoi Acquisition",
    description: "An automated CRM module managing sales lead generation campaigns. Allocates target leads to field managers, records incoming talk time ranges, and charts conversion timelines.",
    technologies: ["PHP", "Laravel", "JavaScript", "Vue.js", "Task Workers"],
    liveUrl: "https://github.com/najmul-github",
    githubUrl: "https://github.com/najmul-github",
    status: "Internal B2B Operations",
    icon: Users,
  },
  {
    title: "Shuttle Shohoz Operational Core",
    description: "Engineered 20 live booking REST APIs boosting overall reservation metrics by 5%. Bundles trip manager tools, SMS status broadcasts, and custom permission assignment trees.",
    technologies: ["PHP", "Laravel", "JavaScript", "Vue.js", "REST Gateway Engine"],
    liveUrl: "https://www.shuttlebd.com/",
    githubUrl: "https://github.com/najmul-github",
    status: "7% Payment Drop Reduction",
    icon: Zap,
  },
  {
    title: "Shuttle Central User Service",
    description: "A secure, decoupled user microservice archetype managing registration data layers and instant transactional OTP routing for over 5,000 active concurrent customers.",
    technologies: ["PHP", "Laravel", "Lumen Microservices", "Redis Caching", "SMS Gateways"],
    liveUrl: "https://github.com/najmul-github",
    githubUrl: "https://github.com/najmul-github",
    status: "High Concurrency Hub",
    icon: ShieldCheck,
  },
  {
    title: "NSU Canteen Priority Manager",
    description: "An automated web tracking utility deployed to manage cafeteria order patterns. Enables students to systematically queue and extract real-time food tokens.",
    technologies: ["PHP", "Laravel", "JavaScript", "Bootstrap 4", "MySQL"],
    liveUrl: "https://github.com/najmul-github/Priority-Management-System",
    githubUrl: "https://github.com/najmul-github/Priority-Management-System",
    status: "Open Source Code",
    icon: HelpCircle,
  },
  {
    title: "eSeller Communication Architecture",
    description: "A matching platform linking neighborhood vendors with immediate consumers. Leverages intensive asynchronous communication layers via clean web script patterns.",
    technologies: ["PHP", "Laravel", "JavaScript", "jQuery", "Ajax", "Bootstrap"],
    liveUrl: "https://github.com/najmul-github/eSeller",
    githubUrl: "https://github.com/najmul-github/eSeller",
    status: "Repository Live",
    icon: ShoppingCart,
  },
  {
    title: "Smart Eyeglasses for Visually Impaired",
    description: "Final Year Capstone Design Project. Built a low-latency Raspberry Pi hardware suite using deep learning models to implement Haar cascade face recognition, OCR printing text processing, and TTS speech outputs.",
    technologies: ["Python", "Machine Learning", "TensorFlow", "Deep Learning Model Parsing", "OCR Engine"],
    liveUrl: "https://github.com/najmul-github/Assistive-Device",
    githubUrl: "https://github.com/najmul-github/Assistive-Device",
    status: "Capstone Project",
    icon: Eye,
  },
  {
    title: "Surveillance Border Crossing Detection",
    description: "Junior Design Academic Project. Deployed an automated vision sensor grid designed to parse long boundaries without human assistance. Handles algorithmic face categorization and pushes notifications to servers.",
    technologies: ["JavaScript", "Java", "C", "TensorFlow Object Detection API", "Heroku Cloud"],
    liveUrl: "https://github.com/najmul-github",
    githubUrl: "https://github.com/najmul-github",
    status: "Junior Academic Work",
    icon: ShieldCheck,
  }
];

const MyProjects = () => {
  return (
    <section className="pb-32">
      {/* Projects Grid Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {productionProjects.map((item, index) => {
          const ProjectIcon = item.icon;
          return (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Visual Engineering Header block instead of broken static local image URLs */}
                <div className="relative h-44 bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-950 p-6 flex flex-col justify-between overflow-hidden select-none">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.03] [background-size:16px_16px]" />
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-purple-300 bg-purple-950/40 border border-purple-800/30 px-2 py-0.5 rounded">
                      SYSTEM PATHWAY
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      INDEX_0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white group-hover:rotate-6 transition-transform duration-300">
                      <ProjectIcon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-mono text-purple-400 mt-0.5">
                        {item.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Technologies and Action Blocks at the bottom to ensure balanced cards */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-50 text-gray-700 px-2.5 py-1 rounded-md text-xs font-mono border border-gray-100 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex gap-4">
                    <Link
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-purple-600 hover:text-purple-700 font-bold text-xs transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Service
                    </Link>
                    <Link
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 font-semibold text-xs transition-colors duration-200"
                    >
                      <Github size={14} />
                      Code Log
                    </Link>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[11px] text-gray-400 font-mono">Verified</span>
                  </div>
                </div>
              </div>

              {/* Staggered Decorative Scaling Nodes */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-purple-100 rounded-full opacity-0 group-hover:opacity-[0.15] transition-all duration-500 transform scale-0 group-hover:scale-100 pointer-events-none"></div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-50 via-slate-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100/50">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Looking for Production-Grade Scalability?
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Let's design clean APIs, structure microservices, or speed up processing loops. 
            I am prepared to architect next-generation software structures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm shadow-purple-100"
            >
              <ExternalLink size={20} />
              Initiate System Discussion
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/najmul-github"
            >
              <button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white font-semibold transition-all duration-200">
                Browse GitHub Records
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;