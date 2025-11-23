"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 87,
    suffix: "%",
    label: "Faster Approvals",
    color: "text-green-400",
  },
  {
    value: 5,
    suffix: "hrs",
    label: "Time Saved Daily",
    color: "text-blue-400",
  },
  {
    value: 100,
    suffix: "%",
    label: "Visibility",
    color: "text-purple-400",
  },
];

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;
    let increment = end / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.round(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function StatsInteractive() {
  return (
    <motion.div
      className="flex justify-center items-center gap-8 py-24 w-full relative z-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.18 }
        }
      }}
    >
      {/* Subtle animated grid background */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.2 }}
        style={{ backgroundImage: "linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(180deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }}
      />
      {stats.map((stat, i) => {
        const count = useCountUp(stat.value);
        return (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.12, boxShadow: "0 0 40px 0 rgba(59,130,246,0.18)", borderColor: stat.color.replace('text-', '') }}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring" } }
            }}
            className="bg-[#181818] rounded-2xl px-12 py-10 shadow-lg border border-white/10 flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden"
            style={{ minWidth: 260 }}
          >
            {/* Animated glow behind number */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.2 }}
            />
            <span className={`text-4xl font-bold mb-2 z-10 ${stat.color} transition-colors duration-300 group-hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]`}>
              {count}
              {stat.suffix}
            </span>
            <span className="text-lg text-gray-300 font-medium mt-2 z-10">
              {stat.label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
