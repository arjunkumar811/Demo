"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 pb-0 overflow-hidden bg-[#050505]">
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
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
                {/* Hero headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-2"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        Cut The Chaos.
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        Build The Future.
                    </h1>
                </motion.div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
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
                    className="pt-12 space-y-8 pb-0"
                >
                    <p className="text-sm text-gray-400 font-medium tracking-wider">
                        Replace All Your Platforms With <span className="text-white font-bold">FLOW.</span>
                    </p>

                    {/* Logos Carousel */}
                    <div className="w-full overflow-hidden">
                        <motion.div
                            className="flex items-center gap-16 w-max"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex items-center gap-16 shrink-0">
                                    {/* ClickUp */}
                                    <div className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300">
                                        <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M2.5 12l2-2 5.5 5.5 9.5-9.5 2 2-11.5 11.5z" stroke="currentColor" strokeWidth="1" />
                                        </svg>
                                        <span className="text-lg font-semibold">ClickUp</span>
                                    </div>

                                    {/* QuickBooks */}
                                    <div className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300">
                                        <span className="text-lg font-bold">qb quickbooks</span>
                                    </div>

                                    {/* Slack */}
                                    <div className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300">
                                        <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zm8.834-5.042a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 20.19 10.123a2.528 2.528 0 0 1-2.521 2.521h-2.521v-2.521zM13.876 8.835a2.528 2.528 0 0 1-2.52-2.521 2.527 2.527 0 0 1 2.52-2.521h6.313A2.528 2.528 0 0 1 22.71 6.314a2.528 2.528 0 0 1-2.52 2.521h-6.314zM6.313 5.042a2.528 2.528 0 0 1-2.521 2.52A2.528 2.528 0 0 1 1.27 5.042a2.528 2.528 0 0 1 2.522-2.521h2.52v2.521zm2.522 3.793a2.528 2.528 0 0 1 2.52 2.521V17.67a2.528 2.528 0 0 1-2.52 2.521 2.528 2.528 0 0 1-2.521-2.521V8.835zm8.834 6.33a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521v-2.52h2.521zM15.147 8.835a2.528 2.528 0 0 1-2.521-2.52V0a2.528 2.528 0 0 1 2.52 2.521 2.528 2.528 0 0 1 2.522 2.521v3.793z"/>
                                        </svg>
                                        <span className="text-lg font-bold">slack</span>
                                    </div>

                                    {/* Clockify */}
                                    <div className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300">
                                        <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                                            <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <span className="text-lg font-semibold">Clockify</span>
                                    </div>

                                    {/* Notion */}
                                    <div className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300">
                                        <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4 4v16h16V4H4zm2 2h12v12H6V6zm3 2v8l5-6v6h2V8h-2l-5 6V8H9z" />
                                        </svg>
                                        <span className="text-lg font-semibold">Notion</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Blue Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[150px] bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
            </div>
        </section>
    );
}
