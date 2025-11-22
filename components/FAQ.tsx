"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is FLOW?",
        answer: "FLOW is a comprehensive operating system designed specifically for architecture studios. It integrates project management, financial tracking, resource allocation, and team collaboration into a single, intuitive platform.",
    },
    {
        question: "Who is FLOW designed for?",
        answer: "FLOW is built for architecture firms of all sizes, from boutique studios to large international practices. It addresses the specific workflows, phases (RIBA/AIA), and billing structures unique to the architectural industry.",
    },
    {
        question: "Is FLOW just another project management tool?",
        answer: "No. While it handles project management, FLOW is a complete business operating system. It connects your projects directly to your financials, resource planning, and studio health metrics, giving you insights that standalone PM tools can&apos;t provide.",
    },
    {
        question: "Do I need to change how my studio already works?",
        answer: "FLOW is designed to adapt to your existing workflows while suggesting best practices. It&apos;s flexible enough to accommodate your specific project stages and team structures without forcing a rigid process.",
    },
    {
        question: "Who&apos;s behind FLOW?",
        answer: "FLOW was created by a team of architects and software engineers who were frustrated with the fragmented tools available to the industry. We built the tool we wished we had.",
    },
];

export default function FAQ() {
    return (
        <section className="py-32 px-6 bg-black text-white w-full relative overflow-hidden">
            {/* Clean gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
            
            <div className="max-w-4xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Get instant answers to most common questions about <span className="text-white font-semibold">FLOW.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border border-white/5 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-sm px-8 data-[state=open]:border-white/10 hover:border-white/10 transition-all duration-300 group"
                                >
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-left text-white/90 group-hover:text-white transition-colors [&[data-state=open]]:text-white">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed pb-6 text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

            </div>
        </section>
    );
}
