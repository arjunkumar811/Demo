"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
    Clock,
    Flame,
    MessageSquare,
    FileText,
    Calendar as CalendarIcon,
    Scale,
    AlertCircle,
    CreditCard,
    Wallet
} from "lucide-react";

const painPoints = [
    {
        icon: Clock,
        title: "No Control",
        description: "Delays With Billing"
    },
    {
        icon: Flame,
        title: "Burnt Out Work Environment",
        description: ""
    },
    {
        icon: MessageSquare,
        title: "Poor Communication",
        description: ""
    },
    {
        icon: FileText,
        title: "Failed Management",
        description: ""
    },
    {
        icon: CalendarIcon,
        title: "Bad Deadline Tracking",
        description: ""
    },
    {
        icon: Scale,
        title: "Uneven Workload",
        description: ""
    },
    {
        icon: AlertCircle,
        title: "Budget Overruns",
        description: ""
    },
    {
        icon: CreditCard,
        title: "No Expense Tracking",
        description: ""
    }
];

export default function PainPoints() {
    return (
        <section className="py-32 px-6 bg-black text-white w-full relative overflow-hidden">
            {/* Subtle dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-[#050505]" />

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4">
                        Stop Letting Every Day <br />
                        Look Like This
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Common challenges that slow down your architecture practice
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        >
                            <Card className="p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-sm border border-white/5 hover:border-red-500/30 transition-all duration-300 h-full flex flex-col items-center text-center group relative overflow-hidden">
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Icon container */}
                                <motion.div 
                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-red-500/20 group-hover:border-red-500/40 transition-all"
                                >
                                    <point.icon className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" strokeWidth={1.5} />
                                </motion.div>
                                
                                {/* Title */}
                                <h3 className="font-semibold text-base text-white/90 group-hover:text-white transition-colors relative z-10">{point.title}</h3>
                                
                                {/* Description if exists */}
                                {point.description && (
                                    <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-400 transition-colors">{point.description}</p>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
