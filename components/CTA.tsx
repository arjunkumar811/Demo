"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="py-32 px-6 bg-black text-white w-full relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1f3a] via-[#0d1117] to-[#1a1f3a] border border-white/10 overflow-hidden p-16 md:p-24 text-center shadow-2xl">
                        {/* Subtle glow effects */}
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative z-10 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                                    Try FLOW Beta Today
                                </h2>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                            >
                                All-in-one management that helps architecture teams automate and control their business.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex justify-center pt-6"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.05 }} 
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button 
                                        size="lg" 
                                        className="group bg-blue-600 hover:bg-blue-500 text-white text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_0_50px_0px_rgba(37,99,235,0.8)] transition-all duration-300"
                                    >
                                        Try FLOW
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
