"use client";

import { motion } from "framer-motion";

export default function ProblemEnhanced() {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Glowing orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-20 w-64 h-64 bg-red-600/20 blur-3xl rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        opacity: [0.1, 0.25, 0.1]
                    }}
                    transition={{ duration: 12, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-20 w-72 h-72 bg-orange-600/20 blur-3xl rounded-full"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 
                        className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-6"
                        initial={{ opacity: 0, letterSpacing: "0.05em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        The Truth
                    </motion.h2>
                    
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="block mb-4"
                        >
                            Most architecture studios aren't held back by a lack of talent.
                        </motion.span>
                        <br />
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="block text-gray-500"
                        >
                            They're held back by systems that were never built for the way architects work.
                        </motion.span>
                    </h3>
                </motion.div>

                {/* Animated icon grid showing chaos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-16 max-w-2xl mx-auto"
                >
                    {[
                        { name: "Emails", color: "from-red-500 to-red-700", delay: 0 },
                        { name: "Sheets", color: "from-green-500 to-green-700", delay: 0.1 },
                        { name: "Calls", color: "from-blue-500 to-blue-700", delay: 0.2 },
                        { name: "Notes", color: "from-yellow-500 to-yellow-700", delay: 0.3 },
                        { name: "Slack", color: "from-purple-500 to-purple-700", delay: 0.4 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: -10 }}
                            whileInView={{ opacity: 0.6, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            whileHover={{ 
                                opacity: 1, 
                                rotate: [0, -5, 5, 0],
                                scale: 1.1
                            }}
                            className={`bg-gradient-to-br ${item.color} rounded-xl p-4 flex items-center justify-center h-24`}
                        >
                            <span className="text-white text-xs font-bold text-center">{item.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Chaos indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex items-center justify-center gap-2 text-gray-500"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        ⚡
                    </motion.div>
                    <span className="text-sm uppercase tracking-wider">Disconnected • Inefficient • Chaotic</span>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        ⚡
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
