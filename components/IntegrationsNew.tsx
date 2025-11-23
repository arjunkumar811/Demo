"use client";

import { motion } from "framer-motion";

const platforms = [
    {
        name: "Notion",
        icon: "https://framerusercontent.com/images/WdDj7tpYLeOYZCCLZnc9blwYqw.png",
    },
    {
        name: "Asana",
        icon: "https://framerusercontent.com/images/lwC8A4acEtviLVJB1j9c77G2lCs.svg",
    },
    {
        name: "Monday",
        icon: "https://framerusercontent.com/images/hJSghgHgWLCjXFPo3MkU17KlSg.svg",
    },
    {
        name: "Trello",
        icon: "https://framerusercontent.com/images/bcNsMLnEo1im42fDUUcYht3D9EU.png",
    },
    {
        name: "ClickUp",
        icon: "https://framerusercontent.com/images/mrwqzelYcnumKD2xctC7e71M.png",
    },
    {
        name: "Airtable",
        icon: "https://framerusercontent.com/images/QgfJxmHrGkoJd5YWrqMkhtV1K4.webp",
    },
];

export default function IntegrationsNew() {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white overflow-hidden w-full relative min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-5xl mx-auto relative z-10 w-full text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Replace All Your Platforms With <span className="text-white">FLOW.</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Seamless plug-and-play setup - we handle the full transition so your team can get building faster.
                    </p>
                </motion.div>

                {/* Connection Visualization */}
                <div className="relative w-full max-w-4xl mx-auto h-[400px]">
                    
                    {/* Icons Row */}
                    <div className="grid grid-cols-6 gap-4 items-center relative z-20">
                        {platforms.map((platform, i) => (
                            <div key={i} className="flex justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="w-20 h-20 bg-[#0A0A0A] rounded-[24px] border border-white/5 flex items-center justify-center shadow-2xl hover:border-white/10 transition-colors overflow-hidden p-4"
                                >
                                    <img src={platform.icon} alt={platform.name} className="w-full h-full object-contain opacity-90" />
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Connecting Lines SVG */}
                    <svg className="absolute top-10 left-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                        <defs>
                            <filter id="glow-blue">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Lines from each icon to center bottom */}
                        {platforms.map((_, i) => {
                            // Calculate start X based on grid distribution
                            // Each item is 1/6th of width. Center is (1/6 * i) + (1/12)
                            const startX = `${(i * (100 / 6)) + (100 / 12)}%`; 
                            
                            return (
                                <g key={i}>
                                    {/* Base Line */}
                                    <motion.path
                                        d={`M ${startX} 80 Q 50% 220, 50% 320`}
                                        stroke="#222"
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.7 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeInOut" }}
                                    />
                                    {/* Flowing Light Particle */}
                                    <motion.path
                                        d={`M ${startX} 40 C ${startX} 200, 50% 200, 50% 320`}
                                        stroke="#fff"
                                        strokeWidth="6"
                                        fill="none"
                                        filter="url(#glow-blue)"
                                        initial={{ strokeDasharray: "40 100", strokeDashoffset: 140, opacity: 0 }}
                                        animate={{ 
                                            strokeDashoffset: [140, -140],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: i * 0.2,
                                        }}
                                    />
                                </g>
                            );
                        })}
                        
                        {/* Central Blue Glow Line at bottom */}
                        <g>
                            <motion.path
                                d="M 50% 320 L 50% 360"
                                stroke="#3B82F6"
                                strokeWidth="5"
                                filter="url(#glow-blue)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                            />
                            <motion.path
                                d="M 50% 320 L 50% 360"
                                stroke="#60A5FA"
                                strokeWidth="2"
                                filter="url(#glow-blue)"
                                initial={{ strokeDasharray: "0 40", opacity: 0 }}
                                animate={{ strokeDasharray: "20 40", opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 2.5
                                }}
                            />
                        </g>
                    </svg>

                    {/* Bottom Star Icon */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 2.2, type: "spring" }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
                    >
                        <img 
                            src="https://framerusercontent.com/images/Uj8jipvDg5qYMeqEsGdo9BKuos.png" 
                            alt="Flow Star" 
                            className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
