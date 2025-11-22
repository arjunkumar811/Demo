"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight } from "lucide-react";

export default function Organised() {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white w-full relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
                transition={{ duration: 11, repeat: Infinity }}
                className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-violet-600/10 blur-3xl rounded-full"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-lg font-medium text-gray-400 mb-4">Introducing FLOW</h3>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                                Stay Organised, <br />
                                Effortlessly.
                            </h2>
                            <p className="text-xl text-gray-400">
                                Track expenses, approvals, budgets, and receipts in one place.
                            </p>
                        </div>
                        <Button className="bg-white text-black hover:bg-gray-200">
                            Get started
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </motion.div>

                    {/* Right Side - Project Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* Meridian Tower Card */}
                        <Card className="p-6 bg-[#0a0a0a] border-yellow-500/30 hover:bg-white/5 transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h4 className="font-bold mb-1">Meridian Tower</h4>
                                    <p className="text-xs text-gray-400 mb-0.5">Urban Development Corp</p>
                                    <p className="text-xs text-gray-500">Downtown</p>
                                </div>
                                <Badge className="bg-green-900/30 text-green-500 border-green-500/20 text-xs">active</Badge>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs mb-1.5">
                                        <span className="text-gray-400">Progress</span>
                                        <span className="font-medium">78%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "78%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                            className="h-full bg-white rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Phase</p>
                                        <p className="font-medium">Design Development</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Budget</p>
                                        <p className="font-medium">$2.4M</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Budget</p>
                                        <p className="font-medium">$1.97M</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Spent</p>
                                        <p className="font-medium">$400K</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <Badge className="bg-orange-900/30 text-orange-500 border-orange-500/20 text-xs">high</Badge>
                                    <div className="flex items-center gap-1 ml-auto text-xs text-gray-400">
                                        <Users className="w-3 h-3" />
                                        <span>8 team members</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-xs text-gray-500 pt-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>Dec 15, 2024</span>
                                    <Users className="w-3 h-3 ml-auto" />
                                    <span>8</span>
                                </div>
                            </div>
                        </Card>

                        {/* Riverside Pavilion Card */}
                        <Card className="p-6 bg-[#0a0a0a] border-green-500/30 hover:bg-white/5 transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h4 className="font-bold mb-1">Riverside Pavilion</h4>
                                    <p className="text-xs text-gray-400 mb-0.5">City Parks Department</p>
                                    <p className="text-xs text-gray-500">Public</p>
                                </div>
                                <Badge className="bg-green-900/30 text-green-500 border-green-500/20 text-xs">active</Badge>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs mb-1.5">
                                        <span className="text-gray-400">Progress</span>
                                        <span className="font-medium">45%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "45%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-white rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Phase</p>
                                        <p className="font-medium">Schematic Design</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Budget</p>
                                        <p className="font-medium">$890K</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Budget</p>
                                        <p className="font-medium">$400K</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Spent</p>
                                        <p className="font-medium">$400K</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <Badge className="bg-yellow-900/30 text-yellow-500 border-yellow-500/20 text-xs">medium</Badge>
                                    <div className="flex items-center gap-1 ml-auto text-xs text-gray-400">
                                        <Users className="w-3 h-3" />
                                        <span>5 team members</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-xs text-gray-500 pt-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>Jan 8, 2025</span>
                                    <Users className="w-3 h-3 ml-auto" />
                                    <span>5</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
