"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users, DollarSign, CheckCircle2, TrendingUp, TrendingDown } from "lucide-react";

export default function Analytics() {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white w-full overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-3xl rounded-full"
            />
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Text Content (Left Side) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 max-w-xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        Personalised Analytics.
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        See efficiency, performance and budget, all in one place.
                    </p>

                    <button className="group px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                        Get started
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </motion.div>

                {/* Metric Cards (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {/* Projects Completed */}
                    <motion.div
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                            <CheckCircle2 className="w-4 h-4" /> Projects Completed
                        </div>
                        <div className="flex items-end gap-3">
                            <span className="text-4xl font-bold">2</span>
                            <span className="text-xs font-medium text-green-500 flex items-center gap-0.5 mb-1.5">
                                <TrendingUp className="w-3 h-3" /> +15% vs last month
                            </span>
                        </div>
                    </motion.div>

                    {/* Avg Delay */}
                    <motion.div
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                            <Clock className="w-4 h-4" /> Avg Delay (Days)
                        </div>
                        <div className="flex items-end gap-3">
                            <span className="text-4xl font-bold">3.2</span>
                            <span className="text-xs font-medium text-red-500 flex items-center gap-0.5 mb-1.5">
                                <TrendingUp className="w-3 h-3" /> +0.8 vs last month
                            </span>
                        </div>
                    </motion.div>

                    {/* Budget Variance */}
                    <motion.div
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                            <DollarSign className="w-4 h-4" /> Budget Variance
                        </div>
                        <div className="flex items-end gap-3">
                            <span className="text-4xl font-bold text-green-500">-2.1%</span>
                            <span className="text-xs font-medium text-green-500 flex items-center gap-0.5 mb-1.5">
                                <TrendingDown className="w-3 h-3" /> Under budget
                            </span>
                        </div>
                    </motion.div>

                    {/* Team Utilization */}
                    <motion.div
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-amber-900/20 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/40 transition-all relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                            <Users className="w-4 h-4" /> Team Utilization
                        </div>
                        <div className="flex items-end gap-3">
                            <span className="text-4xl font-bold">78%</span>
                            <span className="text-xs font-medium text-yellow-500 flex items-center gap-0.5 mb-1.5">
                                <TrendingUp className="w-3 h-3" /> +5% vs last month
                            </span>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}
