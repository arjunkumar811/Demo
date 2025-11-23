"use client";
import { motion } from "framer-motion";

const platforms = [
  { name: "Notion", icon: "https://framerusercontent.com/images/WdDj7tpYLeOYZCCLZnc9blwYqw.png" },
  { name: "Asana", icon: "https://framerusercontent.com/images/lwC8A4acEtviLVJB1j9c77G2lCs.svg" },
  { name: "Monday", icon: "https://framerusercontent.com/images/hJSghgHgWLCjXFPo3MkU17KlSg.svg" },
  { name: "Trello", icon: "https://framerusercontent.com/images/bcNsMLnEo1im42fDUUcYht3D9EU.png" },
  { name: "ClickUp", icon: "https://framerusercontent.com/images/mrwqzelYcnumKD2xctC7e71M.png" },
  { name: "Airtable", icon: "https://framerusercontent.com/images/QgfJxmHrGkoJd5YWrqMkhtV1K4.webp" },
];

// reference image you uploaded (toolchain will convert this local path to a URL)
// /mnt/data/bafc0311-4cfe-4541-8cac-efbf6a6e6651.png

export default function IntegrationsFramerAlignedIcons() {
  const n = platforms.length;

  return (
    <section className="py-28 px-6 bg-[#050505] text-white overflow-hidden w-full relative min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Replace All Your Platforms With <span className="text-white">FLOW.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Seamless plug-and-play setup — we handle the full transition so your team can get building faster.
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto h-[440px]">
          {/* Icons absolutely positioned to match each path endX */}
          <div className="absolute top-6 left-0 w-full h-16 z-30 pointer-events-auto">
            {platforms.map((p, i) => {
              // Calculate left percent for icon center alignment
              const leftPercent = (n === 1) ? 50 : (i / (n - 1)) * 100;
              // Icon size smaller (w-9 h-9 = 36px)
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  style={{
                    position: "absolute",
                    left: `calc(${leftPercent}% - 22px)`,
                    transform: "translateX(-84%)",
                    top: -22, // move icons 22px up from the line end
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.name}
                    className="w-9 h-9 object-contain"
                    style={{ display: "block" }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* SVG - LEFT UNCHANGED (lines kept exactly as before) */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow-blue" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Fan lines - kept exactly as before */}
            {platforms.map((_, i) => {
              const endX = (n === 1) ? 50 : (i / (n - 1)) * 100;
              const endY = 45; // unchanged so icons sit above this
              const startX = 50;
              const startY = 350;
              const controlX = 50 + (endX - 50) * 0.3;
              const controlY = 200;
              return (
                <motion.path
                  key={i}
                  d={`M ${startX} ${startY} Q ${controlX} ${controlY}, ${endX} ${endY}`}
                  stroke="#ffffff"
                  strokeWidth="0.45"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 1.1, delay: 0.35 + i * 0.06 }}
                />
              );
            })}

            {/* center trunk & pulse left unchanged */}
            <motion.line
              x1="50"
              y1="270"
              x2="50"
              y2="345"
              stroke="#2563EB"
              strokeWidth="3.2"
              strokeLinecap="round"
              filter="url(#glow-blue)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
            />

            <motion.line
              x1="50"
              y1="270"
              x2="50"
              y2="345"
              stroke="#60A5FA"
              strokeWidth="0.9"
              strokeLinecap="round"
              filter="url(#glow-blue)"
              initial={{ strokeDasharray: "0 10", opacity: 0 }}
              animate={{ strokeDasharray: "6 10", opacity: 1 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.6
              }}
            />
          </svg>

          {/* Star (center) - unchanged */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -160 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute left-1/2 -translate-x-1/2 z-30"
            style={{ width: 72, height: 72, bottom: '0px' }}
          >
            <img
              // keep your star image as before, or swap to the uploaded reference if you'd like:
              // src="/mnt/data/bafc0311-4cfe-4541-8cac-efbf6a6e6651.png"
              src="https://framerusercontent.com/images/Uj8jipvDg5qYMeqEsGdo9BKuos.png"
              alt="Flow Star"
              className="w-full h-full object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.9)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
