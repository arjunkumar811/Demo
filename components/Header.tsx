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
            <Link href="/" className="flex items-center gap-3 group">
                {/* Bigger FLOW icon and VZNX name */}
                <span className="inline-block w-[64px] h-[64px]">
                    <img src="https://framerusercontent.com/images/Uj8jipvDg5qYMeqEsGdo9BKuos.png" alt="Flow Logo" className="w-full h-full object-contain" />
                </span>
                <span className="text-3xl font-bold tracking-tighter text-white">VZNX</span>
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
