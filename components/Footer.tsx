"use client";

import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-24 px-6 bg-black text-white w-full border-t border-white/5 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Left Column - Logo & Description */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            <h1 className="text-4xl font-bold tracking-tight">VZNX</h1>
                            <div className="relative w-7 h-7">
                                <div className="absolute inset-0 bg-blue-500 blur-md opacity-60 rounded-full" />
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white relative z-10">
                                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                                </svg>
                            </div>
                        </div>

                        <p className="text-gray-500 leading-relaxed text-base max-w-md">
                            FLOW by VZNX is a digital management platform that helps architecture firms and architects track, control, and optimize their expenses, projects and team, all-in-one.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white hover:scale-105 duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white hover:scale-105 duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white hover:scale-105 duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white hover:scale-105 duration-200">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-2 space-y-5">
                        <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider">Product</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Integrations</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Changelog</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-5">
                        <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-5">
                        <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Status</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">
                        © 2025 FLOW by VZNX. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
