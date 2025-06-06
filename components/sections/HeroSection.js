"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
export default function HeroSection({ scrollToSection }) {
  return (
    <Parallax
      bgImage="/bg3.png"
      strength={200}
      blur={{ min: -5, max: 5 }}
      bgImageStyle={{
        objectFit: "cover",
        objectPosition: "center",
        opacity: 0.6,
        width: "100%",
        height: "100%",
      }}
    >
      <section
        id="hero"
        className="min-h-screen  flex items-center justify-center pt-20 relative"
      >
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, when: "beforeChildren" },
            },
          }}
        >
          <div className="flex mt-12 flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.5 },
                },
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow">
                Szia, <span className="text-green-500">Roland</span> vagyok
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Webfejlesztő és dizájner
              </h2>
              <p className="text-gray-200 text-lg mb-8 max-w-xl">
                „Weboldalakat készítek vállalkozásoknak és mindenkinek, aki
                online szeretne kitűnni – akár angol nyelven is. Dolgozzunk
                együtt a digitális megjelenéseden!”
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Munkáim megtekintése
                </a>
                <a
                  href="#contact"
                  className="border border-green-600 text-green-500 hover:bg-green-600/10 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Lépj kapcsolatba
                </a>
                <a
                  href="tel:+36301234567"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-green-400 hover:text-green-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.16 3.49a1 1 0 01-.27 1.08L7.91 9.91a16.01 16.01 0 006.18 6.18l1.66-1.66a1 1 0 011.08-.27l3.49 1.16a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
                    />
                  </svg>
                  +36 30 123 4567
                </a>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="hero-image-container relative">
                <div className="absolute inset-0 rounded-full blur-md bg-green-500/0 scale-100 transition-all duration-500 hero-glow"></div>

                <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 transition-all duration-500 hero-border">
                  <div
                    className="w-full h-full border-4 border-green-400/50 rounded-full"
                    style={{ borderStyle: "dashed" }}
                  ></div>
                </div>

                <div className="relative mb-4 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500/30 transition-all duration-300 hover:border-green-400/80 z-10">
                  <Image
                    src="/tr2.png"
                    alt="Roland"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#about"
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
              transition: {
                y: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              },
            }}
          >
            <ChevronDown className="w-10 h-10 text-green-500" />
          </motion.a>
        </motion.div>
      </section>
    </Parallax>
  );
}
