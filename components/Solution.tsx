"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRef } from "react";
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
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="pt-0 pb-20 px-6 bg-[#050505] text-white w-full relative overflow-hidden">
            {/* Top Blue Glow to match Hero bottom */}
            <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Animated background gradients - same as Hero */}
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

                {/* Animated grid lines - Continuous from Hero */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-solution" width="60" height="60" patternUnits="userSpaceOnUse">
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
                    <rect width="100%" height="100%" fill="url(#grid-solution)" />
                </svg>

                {/* Floating particles - Continuous from Hero */}
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

            <div className="max-w-[1100px] mx-auto relative z-10 w-full">
                <motion.div
                    style={{ y, scale, opacity }}
                    className="relative pt-10"
                >
                    <div className="relative">
                        {/* Dashboard Image */}
                        <Image
                            src="/XbL9tTJ3UH6dybflPQllmsBC3sM.avif"
                            alt="Control Hub Dashboard"
                            width={1920}
                            height={1080}
                            className="w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-blue-900/20"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
