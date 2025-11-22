"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";

export default function Timeline() {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white w-full relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-cyan-600/10 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Timeline Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Timeline Item 1 */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-white/10"></div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold mb-1">Program Analysis</h4>
                                    <div className="flex gap-2 mb-2">
                                        <Badge className="bg-white/10 text-gray-400 border-white/10 text-xs">Programming</Badge>
                                        <Badge className="bg-white/10 text-gray-400 border-white/10 text-xs">Idea Footprint</Badge>
                                        <Badge className="bg-orange-900/30 text-orange-500 border-orange-500/20 text-xs">high</Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">100%</span>
                                        <span className="text-gray-500">Q4</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            className="h-full bg-white rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <motion.div 
                                        className="w-3 h-3 bg-green-500 rounded-full relative z-10"
                                        animate={{ boxShadow: ["0 0 0px rgba(34, 197, 94, 0.5)", "0 0 20px rgba(34, 197, 94, 0.8)", "0 0 0px rgba(34, 197, 94, 0.5)"] }}
                                        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                    />
                                    <motion.div 
                                        className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-green-500/50 to-white/10"
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        style={{ transformOrigin: "top" }}
                                    />
                                    {/* Traveling light */}
                                    <motion.div
                                        className="absolute left-1/2 -translate-x-1/2 w-1 h-3 bg-green-400 rounded-full blur-sm"
                                        animate={{ y: [0, 96, 0], opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold mb-1">Building Massing</h4>
                                    <div className="flex gap-2 mb-2">
                                        <Badge className="bg-white/10 text-gray-400 border-white/10 text-xs">Schematic Design</Badge>
                                        <Badge className="bg-white/10 text-gray-400 border-white/10 text-xs">Large-Scale</Badge>
                                        <Badge className="bg-red-900/30 text-red-500 border-red-500/20 text-xs">critical</Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">100%</span>
                                        <span className="text-gray-500">Q4</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-white rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Cards Row */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <Card className="p-4 bg-white/5 border-white/10">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h5 className="font-bold text-sm mb-0.5">Meridian Tower</h5>
                                        <p className="text-xs text-gray-400">Urban Development</p>
                                    </div>
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                                    <Calendar className="w-3 h-3" />
                                    <span>Dec 15, 2024</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Users className="w-3 h-3" />
                                    <span>8</span>
                                </div>
                            </Card>

                            <Card className="p-4 bg-white/5 border-white/10">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h5 className="font-bold text-sm mb-0.5">Riverside Pavilion</h5>
                                        <p className="text-xs text-gray-400">Public</p>
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                                    <Calendar className="w-3 h-3" />
                                    <span>Jan 8, 2025</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Users className="w-3 h-3" />
                                    <span>5</span>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Right Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Interactive Timeline <br />
                            and Project Control.
                        </h2>
                        <p className="text-xl text-gray-400">
                            View a full timeline and due dates.
                        </p>
                        <Button className="bg-white text-black hover:bg-gray-200">
                            Get started
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
