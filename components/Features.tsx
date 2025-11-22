"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Bell, PoundSterling, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
    {
        icon: Lightbulb,
        title: "Intelligent Automations",
        description: "Streamline design workflows and approvals instantly, without project delays or bottlenecks.",
        gradient: "from-yellow-500 to-orange-600"
    },
    {
        icon: Users,
        title: "Resource & Team Management",
        description: "Stay on top of every build with smart insights into timelines, budgets, and team performance.",
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        icon: Bell,
        title: "Smart Project Tracking",
        description: "Get real-time updates on project milestones, design revisions, and client feedback.",
        gradient: "from-purple-500 to-pink-600"
    },
    {
        icon: PoundSterling,
        title: "Financial Oversight",
        description: "Keep every penny accounted for with built-in invoicing, expense tracking, and fee forecasting.",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        icon: Globe,
        title: "Integrated Ecosystem",
        description: "Connect all your favorite tools into one seamless workflow that keeps everyone aligned.",
        gradient: "from-indigo-500 to-blue-600"
    },
    {
        icon: ShieldCheck,
        title: "Maximum Security",
        description: "Enterprise-grade protection for your sensitive project data and client information.",
        gradient: "from-red-500 to-rose-600"
    },
];

export default function Features() {
    return (
        <section className="py-32 px-6 bg-[#050505] text-white w-full relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:80px_80px]" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-3xl rounded-full"
            />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <Badge variant="outline" className="px-4 py-2 bg-blue-900/20 border-blue-500/30 text-blue-400 mb-6">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Powerful Features
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Core Features
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The Industry&apos;s Greatest Challenge Isn&apos;t Design. <br />
                        It&apos;s The System Behind It.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Gradient glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            
                            <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative`}>
                                <feature.icon className="w-7 h-7 text-white" />
                                {/* Pulse effect */}
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl`}
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
