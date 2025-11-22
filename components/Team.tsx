"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Team() {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white w-full overflow-hidden relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-600/10 blur-3xl rounded-full"
            />
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Profile Card (Left Side) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full max-w-md"
                >
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 relative overflow-hidden shadow-2xl">
                        {/* Ambient glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                        
                        {/* Header */}
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                                    {/* Placeholder Avatar */}
                                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Sarah Chen</h3>
                                    <p className="text-sm text-gray-500 mb-1">Senior Architect</p>
                                    <div className="flex items-center gap-1 text-xs text-gray-600">
                                        <MapPin className="w-3 h-3" /> San Francisco, CA
                                    </div>
                                </div>
                            </div>
                            <motion.span 
                                animate={{ boxShadow: ["0 0 0px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(59, 130, 246, 0.8)", "0 0 0px rgba(59, 130, 246, 0.5)"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 border border-blue-500/30"
                            >
                                active
                            </motion.span>
                        </div>

                        {/* Stats */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-400">Current Load</span>
                                    <span className="font-bold text-red-400">85%</span>
                                </div>
                                <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-white rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Active Projects</p>
                                    <p className="text-xl font-bold">2</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Tasks Progress</p>
                                    <p className="text-xl font-bold">24/28</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400 mb-2">Priority Level</p>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-900/30 text-orange-500 border border-orange-500/20">high</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Text Content (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 max-w-xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        Team and Roles Overview <br />
                        with Load Amounts.
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        View team members, working hours and current projects to assign and remove tasks.
                    </p>

                    <button className="group px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                        Get started
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
