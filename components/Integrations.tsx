"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle2, TrendingUp } from "lucide-react";

const integrations = [
    { name: "Notion", color: "bg-white", icon: "N" },
    { name: "Asana", color: "bg-orange-400", dots: true },
    { name: "Monday", color: "bg-yellow-500", shape: "diamond" },
    { name: "Trello", color: "bg-blue-500" },
    { name: "ClickUp", color: "bg-purple-500" },
    { name: "Airtable", color: "bg-yellow-500" },
];

export default function Integrations() {
    return (
        <section className="py-32 px-6 bg-black text-white overflow-hidden w-full relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <Badge variant="outline" className="px-4 py-2 bg-purple-900/20 border-purple-500/20 text-purple-400 hover:bg-purple-900/30">
                        <Zap className="w-4 h-4 mr-2" />
                        Seamless Integration
                    </Badge>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        Replace All Your Platforms With{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                            FLOW.
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Seamless plug-and-play setup - we handle the full transition so your team can get building faster.
                    </p>
                </motion.div>

                {/* Flow Visualization */}
                <div className="relative h-[500px] flex flex-col items-center justify-between py-8">

                    {/* Top Row - Tool Cards */}
                    <div className="flex justify-center items-center gap-6 md:gap-8 relative z-10 flex-wrap max-w-4xl">
                        {integrations.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05
                                }}
                            >
                                <Card className="group relative p-4 bg-[#0a0a0a] border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-default">
                                    <motion.div
                                        animate={{
                                            y: [0, -6, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.3
                                        }}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className={`w-14 h-14 ${tool.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                                            {tool.icon && (
                                                <span className="text-black font-bold text-xl">{tool.icon}</span>
                                            )}
                                            {tool.dots && (
                                                <div className="flex items-center gap-1">
                                                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                                    <div className="w-2 h-2 bg-white rounded-full" />
                                                    <div className="w-2 h-2 bg-white rounded-full" />
                                                </div>
                                            )}
                                            {tool.shape === "diamond" && (
                                                <div className="w-7 h-7 bg-white rotate-45" />
                                            )}
                                            {!tool.icon && !tool.dots && tool.shape !== "diamond" && (
                                                <div className="w-full h-full rounded-xl" />
                                            )}
                                        </div>
                                        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{tool.name}</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                        className="absolute -top-2 -right-2"
                                    >
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Connecting Lines SVG with Traveling Lights */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                                </linearGradient>

                                <radialGradient id="lightGlow">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </radialGradient>
                            </defs>

                            {integrations.map((_, index) => {
                                const startX = 180 + (index * 80);
                                const startY = 80;
                                const endX = 400;
                                const endY = 400;
                                const pathId = `path-${index}`;

                                return (
                                    <g key={index}>
                                        <motion.path
                                            id={pathId}
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 0.3 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.5,
                                                delay: 0.5 + index * 0.1,
                                                ease: "easeInOut"
                                            }}
                                            d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${(startY + endY) / 2 - 40}, ${endX} ${endY}`}
                                            stroke="url(#lineGradient)"
                                            strokeWidth="2"
                                            fill="none"
                                            className="drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                                        />

                                        <motion.circle
                                            r="4"
                                            fill="url(#lightGlow)"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: [0, 1, 1, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                delay: 1.5 + index * 0.2,
                                                repeat: Infinity,
                                                repeatDelay: 1,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <animateMotion
                                                dur="3s"
                                                repeatCount="indefinite"
                                                begin={`${1.5 + index * 0.2}s`}
                                            >
                                                <mpath href={`#${pathId}`} />
                                            </animateMotion>
                                        </motion.circle>

                                        <motion.circle
                                            r="8"
                                            fill="url(#lightGlow)"
                                            opacity="0.4"
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: [0, 0.4, 0.4, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                delay: 1.5 + index * 0.2,
                                                repeat: Infinity,
                                                repeatDelay: 1,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <animateMotion
                                                dur="3s"
                                                repeatCount="indefinite"
                                                begin={`${1.5 + index * 0.2}s`}
                                            >
                                                <mpath href={`#${pathId}`} />
                                            </animateMotion>
                                        </motion.circle>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Central VZNX Card */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            type: "spring",
                            bounce: 0.4
                        }}
                        className="relative z-20 mt-auto"
                    >
                        <Card className="relative px-8 py-6 bg-gradient-to-br from-blue-900/40 via-[#0a0a0a] to-purple-900/40 border-white/30 shadow-2xl backdrop-blur-sm">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg blur-xl"
                            />

                            <div className="relative flex items-center gap-4">
                                <div className="w-14 h-14 flex items-center justify-center">
                                    <motion.svg
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-full h-full text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                    >
                                        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                                    </motion.svg>
                                </div>

                                <div className="text-left">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">VZNX</h3>
                                    <p className="text-sm text-gray-400">Control Hub</p>
                                </div>

                                <TrendingUp className="w-5 h-5 text-green-400 ml-3" />
                            </div>
                        </Card>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
