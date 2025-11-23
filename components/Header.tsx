"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
        >
            {/* Logo with animated arrow */}
            <Link href="/" className="flex items-center gap-1 group">
                <span className="text-2xl font-bold tracking-tighter text-white">VZNX</span>
                <motion.div
                    animate={{
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="text-blue-600"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                </motion.div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {["Overview", "Features", "How it Works"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            {/* CTA */}
            <button className="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-all flex items-center gap-2 group">
                Contact Us
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
        </motion.header>
    );
}
