"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
    LayoutDashboard,
    FolderOpen,
    Clock,
    CheckSquare,
    DollarSign,
    Wallet,
    Users,
    MessageSquare,
    BarChart3,
    Settings,
    Search,
    Plus,
    Bell,
    User,
    Calendar,
    ArrowRight
} from "lucide-react";

export default function Solution() {
    return (
        <section className="min-h-screen py-20 px-6 bg-[#050505] text-white w-full relative overflow-hidden flex items-center">
            {/* Animated sine wave background */}
            <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                    {/* Animated sine waves */}
                    {[0, 1, 2].map((i) => (
                        <motion.path
                            key={i}
                            d={`M 0 ${200 + i * 100} Q 250 ${150 + i * 100} 500 ${200 + i * 100} T 1000 ${200 + i * 100} T 1500 ${200 + i * 100} T 2000 ${200 + i * 100}`}
                            stroke="url(#waveGradient)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ 
                                pathLength: 1, 
                                opacity: 0.3,
                                x: [-100, 100]
                            }}
                            transition={{ 
                                pathLength: { duration: 2, delay: i * 0.2 },
                                opacity: { duration: 1, delay: i * 0.2 },
                                x: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" }
                            }}
                        />
                    ))}
                </svg>
            </div>

            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
            
            {/* Animated gradient orbs */}
            <motion.div
                animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.08, 0.15, 0.08] 
                }}
                transition={{ duration: 14, repeat: Infinity }}
                className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-blue-600/10 blur-3xl rounded-full"
            />
            <motion.div
                animate={{ 
                    scale: [1, 1.3, 1],
                    x: [0, -80, 0],
                    y: [0, 50, 0],
                    opacity: [0.06, 0.12, 0.06] 
                }}
                transition={{ duration: 16, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto relative z-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <Badge variant="outline" className="px-3 py-1.5 bg-blue-900/20 border-blue-500/30 text-blue-400 mb-4 text-xs">
                        <LayoutDashboard className="w-3 h-3 mr-1.5" />
                        Command Center
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
                        The Solution: <br />
                        <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">Control Hub</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        AI-enhanced operations for modern architecture studios
                    </p>
                </motion.div>

                {/* Dashboard Preview with scroll-up effect */}
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                        duration: 1,
                        delay: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div
                        whileInView={{ y: [0, -15, 0] }}
                        viewport={{ once: false }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 bg-gradient-to-br from-[#0a0a0a] to-[#050505]">
                            {/* Dashboard Image */}
                            <Image
                                src="/XbL9tTJ3UH6dybflPQllmsBC3sM.avif"
                                alt="Control Hub Dashboard"
                                width={1920}
                                height={1080}
                                className="w-full h-auto scale-90"
                                priority
                            />
                            
                            {/* Overlay gradient for better visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
