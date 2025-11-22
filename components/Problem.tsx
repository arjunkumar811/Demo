"use client";

import { motion } from "framer-motion";

export default function Problem() {
    return (
        <section className="py-24 px-6 bg-vznx-black text-white">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-mono tracking-widest uppercase text-gray-400 mb-4">
                        The Truth
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold leading-tight text-balance">
                        Most architecture studios aren’t held back by a lack of talent.
                        <br />
                        <span className="text-gray-500">They’re held back by systems that were never built for the way architects work.</span>
                    </h3>
                </motion.div>
            </div>
        </section>
    );
}
