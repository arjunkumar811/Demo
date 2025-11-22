"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Workflow } from "lucide-react";

export default function WorkflowVisual() {
    const nodes = [
        { id: 1, label: "Brief", position: { x: 10, y: 30 }, color: "from-cyan-500 to-blue-600" },
        { id: 2, label: "Design", position: { x: 30, y: 15 }, color: "from-purple-500 to-pink-600" },
        { id: 3, label: "Review", position: { x: 50, y: 30 }, color: "from-orange-500 to-red-600" },
        { id: 4, label: "Approve", position: { x: 70, y: 15 }, color: "from-green-500 to-emerald-600" },
        { id: 5, label: "Deliver", position: { x: 90, y: 30 }, color: "from-indigo-500 to-purple-600" },
    ];

    const connections = [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
    ];

    return (
        <section className="py-32 px-6 bg-[#050505] text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
            <motion.div
                animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.05, 0.1, 0.05] 
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <Badge variant="outline" className="px-4 py-2 bg-purple-900/20 border-purple-500/30 text-purple-400 mb-6">
                        <Workflow className="w-4 h-4 mr-2" />
                        Smart Workflow
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Automated Project Flow
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Watch tasks move seamlessly through your pipeline with intelligent routing
                    </p>
                </motion.div>

                {/* Workflow Visualization */}
                <div className="relative h-[400px] w-full max-w-5xl mx-auto">
                    {/* SVG for connection lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        <defs>
                            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                            </linearGradient>

                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Draw curved connection lines */}
                        {connections.map((conn, i) => {
                            const fromNode = nodes.find(n => n.id === conn.from);
                            const toNode = nodes.find(n => n.id === conn.to);
                            
                            if (!fromNode || !toNode) return null;

                            const x1 = `${fromNode.position.x}%`;
                            const y1 = `${fromNode.position.y}%`;
                            const x2 = `${toNode.position.x}%`;
                            const y2 = `${toNode.position.y}%`;
                            
                            // Calculate control points for smooth curve
                            const midX = (fromNode.position.x + toNode.position.x) / 2;
                            const curveY = Math.min(fromNode.position.y, toNode.position.y) - 10;
                            
                            const path = `M ${x1} ${y1} Q ${midX}% ${curveY}% ${x2} ${y2}`;

                            return (
                                <g key={i}>
                                    {/* Static path */}
                                    <motion.path
                                        d={path}
                                        fill="none"
                                        stroke="url(#flowGradient)"
                                        strokeWidth="2"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: i * 0.3 }}
                                    />

                                    {/* Traveling particle - using CSS animation instead */}
                                    <motion.circle
                                        r="5"
                                        fill="#8b5cf6"
                                        filter="url(#glow)"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: [0, 1, 1, 0] }}
                                        transition={{
                                            duration: 3,
                                            delay: 2 + i * 0.6,
                                            repeat: Infinity,
                                            repeatDelay: 2
                                        }}
                                    >
                                        <animateMotion
                                            dur="3s"
                                            repeatCount="indefinite"
                                            begin={`${2 + i * 0.6}s`}
                                            path={path}
                                        />
                                    </motion.circle>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Workflow Nodes */}
                    {nodes.map((node, i) => (
                        <motion.div
                            key={node.id}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            whileHover={{ scale: 1.15, y: -5 }}
                            className="absolute"
                            style={{
                                left: `${node.position.x}%`,
                                top: `${node.position.y}%`,
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2
                            }}
                        >
                            <div className={`relative group`}>
                                {/* Pulsing ring */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 0, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.4,
                                        repeat: Infinity
                                    }}
                                    className={`absolute inset-0 bg-gradient-to-br ${node.color} rounded-2xl blur-sm`}
                                />

                                {/* Node */}
                                <div className={`relative w-28 h-28 bg-gradient-to-br ${node.color} rounded-2xl flex flex-col items-center justify-center shadow-2xl`}>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"
                                    />
                                    <span className="text-2xl font-bold text-white relative z-10">{i + 1}</span>
                                    <span className="text-xs text-white/90 font-semibold mt-1 relative z-10">{node.label}</span>
                                </div>

                                {/* Hover tooltip */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg whitespace-nowrap text-xs">
                                    {node.label} Stage
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="grid md:grid-cols-3 gap-6 mt-32 max-w-4xl mx-auto"
                >
                    {[
                        { value: "87%", label: "Faster Approvals", color: "text-green-400" },
                        { value: "5hrs", label: "Time Saved Daily", color: "text-blue-400" },
                        { value: "100%", label: "Visibility", color: "text-purple-400" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                            <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
