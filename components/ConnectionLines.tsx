"use client";

import { motion } from "framer-motion";

export default function ConnectionLines() {
    return (
        <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Everything Connected
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Watch how data flows seamlessly across your entire workflow
                    </p>
                </motion.div>

                {/* Connection Network */}
                <div className="relative h-[600px] w-full">
                    {/* SVG for connection lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        <defs>
                            {/* Gradient for lines */}
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>

                            {/* Filter for glow effect */}
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Animated connection lines */}
                        {/* Center to Top Left */}
                        <motion.line
                            x1="50%" y1="50%" x2="20%" y2="20%"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                        />
                        
                        {/* Center to Top Right */}
                        <motion.line
                            x1="50%" y1="50%" x2="80%" y2="20%"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                        />

                        {/* Center to Bottom Left */}
                        <motion.line
                            x1="50%" y1="50%" x2="20%" y2="80%"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                        />

                        {/* Center to Bottom Right */}
                        <motion.line
                            x1="50%" y1="50%" x2="80%" y2="80%"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                        />

                        {/* Traveling light particles */}
                        {[
                            { x1: "50%", y1: "50%", x2: "20%", y2: "20%", delay: 2 },
                            { x1: "50%", y1: "50%", x2: "80%", y2: "20%", delay: 2.2 },
                            { x1: "50%", y1: "50%", x2: "20%", y2: "80%", delay: 2.4 },
                            { x1: "50%", y1: "50%", x2: "80%", y2: "80%", delay: 2.6 },
                        ].map((line, i) => (
                            <motion.circle
                                key={i}
                                r="4"
                                fill="#3b82f6"
                                filter="url(#glow)"
                                initial={{ 
                                    cx: line.x1, 
                                    cy: line.y1,
                                    opacity: 0
                                }}
                                animate={{ 
                                    cx: [line.x1, line.x2],
                                    cy: [line.y1, line.y2],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{ 
                                    duration: 2,
                                    delay: line.delay,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </svg>

                    {/* Nodes */}
                    {/* Center Node */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ zIndex: 2 }}
                    >
                        <motion.div
                            animate={{ 
                                boxShadow: [
                                    "0 0 20px rgba(59, 130, 246, 0.5)",
                                    "0 0 40px rgba(59, 130, 246, 0.8)",
                                    "0 0 20px rgba(59, 130, 246, 0.5)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center"
                        >
                            <span className="text-2xl font-bold text-white">VZNX</span>
                        </motion.div>
                    </motion.div>

                    {/* Top Left Node - Projects */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute top-[10%] left-[15%]"
                        style={{ zIndex: 2 }}
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex flex-col items-center justify-center">
                            <svg className="w-8 h-8 text-white mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-xs text-white font-semibold">Projects</span>
                        </div>
                    </motion.div>

                    {/* Top Right Node - Team */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute top-[10%] right-[15%]"
                        style={{ zIndex: 2 }}
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex flex-col items-center justify-center">
                            <svg className="w-8 h-8 text-white mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-xs text-white font-semibold">Team</span>
                        </div>
                    </motion.div>

                    {/* Bottom Left Node - Analytics */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="absolute bottom-[10%] left-[15%]"
                        style={{ zIndex: 2 }}
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex flex-col items-center justify-center">
                            <svg className="w-8 h-8 text-white mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span className="text-xs text-white font-semibold">Analytics</span>
                        </div>
                    </motion.div>

                    {/* Bottom Right Node - Files */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="absolute bottom-[10%] right-[15%]"
                        style={{ zIndex: 2 }}
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl flex flex-col items-center justify-center">
                            <svg className="w-8 h-8 text-white mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            <span className="text-xs text-white font-semibold">Files</span>
                        </div>
                    </motion.div>
                </div>

                {/* Feature cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="grid md:grid-cols-3 gap-6 mt-20"
                >
                    {[
                        {
                            title: "Real-time Sync",
                            description: "Data flows instantly across all modules",
                            icon: "⚡"
                        },
                        {
                            title: "Smart Routing",
                            description: "Information reaches the right people automatically",
                            icon: "🎯"
                        },
                        {
                            title: "Zero Latency",
                            description: "Experience instantaneous updates everywhere",
                            icon: "🚀"
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
