"use client";

import { motion } from "framer-motion";

const platforms = [
    { name: "Notion", icon: "📝", position: { top: "10%", left: "20%" } },
    { name: "Asana", icon: "✦", position: { top: "10%", left: "50%" } },
    { name: "Monday", icon: "📊", position: { top: "10%", left: "80%" } },
    { name: "Trello", icon: "▦", position: { top: "40%", left: "35%" } },
    { name: "ClickUp", icon: "⚡", position: { top: "40%", left: "65%" } },
    { name: "Jira", icon: "🔷", position: { top: "70%", left: "50%" } },
];

export default function IntegrationsNew() {
    return (
        <section className="min-h-screen py-32 px-6 bg-black text-white overflow-hidden w-full relative flex items-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl md:text-7xl font-bold mb-6">
                        Replace All Your Platforms <br />
                        With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">FLOW.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Seamless plug-and-play setup - we handle the full transition so your team can get building faster.
                    </p>
                </motion.div>

                {/* Connection Visualization */}
                <div className="relative h-[600px] w-full max-w-5xl mx-auto">
                    {/* SVG for curved lines from platforms to center */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        <defs>
                            {/* Blue glow filter */}
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Draw curved paths from each platform to bottom center */}
                        {platforms.map((platform, i) => {
                            const startX = platform.position.left === "20%" ? "20%" : 
                                          platform.position.left === "35%" ? "35%" :
                                          platform.position.left === "50%" ? "50%" :
                                          platform.position.left === "65%" ? "65%" : "80%";
                            const startY = platform.position.top;
                            
                            return (
                                <g key={i}>
                                    {/* Curved path */}
                                    <motion.path
                                        d={`M ${startX} ${startY} Q ${startX} 85%, 50% 95%`}
                                        stroke="rgba(100, 100, 100, 0.3)"
                                        strokeWidth="1.5"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
                                    />
                                </g>
                            );
                        })}

                        {/* Glowing blue convergence lines at bottom */}
                        <motion.path
                            d="M 20% 70% Q 35% 85%, 50% 95%"
                            stroke="url(#blueGradient)"
                            strokeWidth="2"
                            fill="none"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
                        />
                        <motion.path
                            d="M 80% 70% Q 65% 85%, 50% 95%"
                            stroke="url(#blueGradient)"
                            strokeWidth="2"
                            fill="none"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 1.1, ease: "easeOut" }}
                        />
                        <motion.path
                            d="M 35% 60% Q 42% 78%, 50% 95%"
                            stroke="url(#blueGradient)"
                            strokeWidth="2"
                            fill="none"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
                        />
                        <motion.path
                            d="M 65% 60% Q 58% 78%, 50% 95%"
                            stroke="url(#blueGradient)"
                            strokeWidth="2"
                            fill="none"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 1.3, ease: "easeOut" }}
                        />

                        {/* Gradient definition */}
                        <defs>
                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                                <stop offset="100%" stopColor="rgba(59, 130, 246, 1)" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Platform Icons */}
                    {platforms.map((platform, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            className="absolute"
                            style={{
                                top: platform.position.top,
                                left: platform.position.left,
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2
                            }}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-2xl hover:bg-white/10 transition-all cursor-pointer">
                                    {platform.icon}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Center Star Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 180 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                        className="absolute"
                        style={{
                            bottom: "5%",
                            left: "50%",
                            transform: 'translate(-50%, 0)',
                            zIndex: 3
                        }}
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
                            className="text-6xl"
                        >
                            ✦
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
