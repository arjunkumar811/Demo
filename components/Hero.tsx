"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#050505]">
            {/* Animated background gradients with grid */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        scale: [0.8, 1.2, 0.8],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 0.8, 1],
                        x: [0, -50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 10, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"
                />
                
                {/* Animated grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <motion.path
                                d="M 60 0 L 0 0 0 60"
                                fill="none"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="0.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                {/* Hero headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                        Cut The Chaos.
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                        Build The Future.
                    </h1>
                </motion.div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                    It's the operating system for architecture studios - one intelligent platform that brings projects, people, and progress together.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white text-base font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50">
                        Book a Demo
                    </button>
                </motion.div>

                {/* Integration section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pt-16 space-y-8"
                >
                    <p className="text-sm text-gray-500 font-medium tracking-wider">
                        Replace All Your Platforms With <span className="text-white font-bold">FLOW.</span>
                    </p>

                    {/* Logo carousel */}
                    <div className="relative overflow-hidden py-4">
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex items-center gap-12 md:gap-16"
                        >
                            {/* Double the logos for seamless loop */}
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex items-center gap-12 md:gap-16 shrink-0">
                                    {/* Procore */}
                                    <div className="text-gray-600 hover:text-gray-400 transition-colors shrink-0">
                                        <svg className="h-6 md:h-8 w-auto" viewBox="0 0 80 20" fill="currentColor">
                                            <path d="M8 2h4c3.3 0 6 2.7 6 6s-2.7 6-6 6H8V2zm0 16v-2h4c4.4 0 8-3.6 8-8s-3.6-8-8-8H6v18h2z"/>
                                        </svg>
                                    </div>

                                    {/* QuickBooks */}
                                    <div className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors shrink-0">
                                        <svg className="h-6 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="8" cy="8" r="4"/>
                                            <circle cx="16" cy="16" r="4"/>
                                        </svg>
                                        <span className="text-base md:text-lg font-semibold">quickbooks</span>
                                    </div>

                                    {/* Slack */}
                                    <div className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors shrink-0">
                                        <svg className="h-6 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <rect x="3" y="3" width="4" height="4" rx="1"/>
                                            <rect x="10" y="3" width="4" height="4" rx="1"/>
                                            <rect x="17" y="3" width="4" height="4" rx="1"/>
                                            <rect x="3" y="10" width="4" height="4" rx="1"/>
                                            <rect x="10" y="10" width="4" height="4" rx="1"/>
                                            <rect x="17" y="10" width="4" height="4" rx="1"/>
                                        </svg>
                                        <span className="text-base md:text-lg font-semibold">slack</span>
                                    </div>

                                    {/* Clockify */}
                                    <div className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors shrink-0">
                                        <svg className="h-6 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M12 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <span className="text-base md:text-lg font-semibold">clockify</span>
                                    </div>

                                    {/* Notion */}
                                    <div className="flex items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors shrink-0">
                                        <svg className="h-6 md:h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
                                            <path d="M8 8h8M8 12h8M8 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                        </svg>
                                        <span className="text-base md:text-lg font-semibold">Notion</span>
                                    </div>

                                    {/* Plus icon */}
                                    <div className="text-gray-700 text-2xl shrink-0">+</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-gray-600 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
