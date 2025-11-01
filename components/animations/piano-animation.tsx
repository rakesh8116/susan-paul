"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PianoAnimation = () => {
  const [pressedKeys, setPressedKeys] = useState<number[]>([]);

  const whiteKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const blackKeys = [
    { position: 0.5, index: 10 },
    { position: 1.5, index: 11 },
    { position: 3.5, index: 12 },
    { position: 4.5, index: 13 },
    { position: 5.5, index: 14 },
    { position: 7.5, index: 15 },
    { position: 8.5, index: 16 },
  ];

  const handleKeyPress = (keyIndex: number) => {
    setPressedKeys([...pressedKeys, keyIndex]);
    setTimeout(() => {
      setPressedKeys((prev) => prev.filter((k) => k !== keyIndex));
    }, 200);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Piano Container */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg p-8 shadow-2xl">
        {/* Music Stand */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-lg shadow-lg">
          <div className="flex items-center justify-center h-full">
            <div className="text-musical-gold-400 font-display text-lg">
              ♪ ♫ ♪ ♫
            </div>
          </div>
        </div>

        {/* Piano Keys Container */}
        <div className="relative h-48 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-inner p-4">
          <div className="relative h-full">
            {/* White Keys */}
            <div className="absolute inset-0 flex gap-1">
              {whiteKeys.map((key) => (
                <motion.button
                  key={`white-${key}`}
                  className="flex-1 bg-white hover:bg-gray-50 rounded-b-lg shadow-md border border-gray-300 transition-all"
                  whileTap={{ y: 2 }}
                  animate={{
                    backgroundColor: pressedKeys.includes(key)
                      ? "#e9d5ff"
                      : "#ffffff",
                  }}
                  onClick={() => handleKeyPress(key)}
                  style={{
                    background: pressedKeys.includes(key)
                      ? "linear-gradient(to bottom, #e9d5ff, #d8b4fe)"
                      : "linear-gradient(to bottom, #ffffff, #f9fafb)",
                  }}
                >
                  <div className="h-full flex items-end justify-center pb-2">
                    <span className="text-xs text-gray-400">
                      {["C", "D", "E", "F", "G", "A", "B", "C", "D", "E"][key]}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Black Keys */}
            <div className="absolute inset-0 flex">
              {blackKeys.map((blackKey) => (
                <motion.button
                  key={`black-${blackKey.index}`}
                  className="absolute w-8 h-2/3 bg-gray-900 hover:bg-gray-800 rounded-b-lg shadow-lg z-10"
                  style={{
                    left: `${(blackKey.position * 10) - 1.5}%`,
                    background: pressedKeys.includes(blackKey.index)
                      ? "linear-gradient(to bottom, #a855f7, #9333ea)"
                      : "linear-gradient(to bottom, #111827, #1f2937)",
                  }}
                  whileTap={{ y: 1 }}
                  onClick={() => handleKeyPress(blackKey.index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Piano Brand */}
        <div className="mt-4 text-center">
          <div className="inline-block px-4 py-1 bg-musical-gold-600 rounded-full">
            <span className="text-white font-display text-sm">Susan Paul Music</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg" />
        
        {/* Piano Legs */}
        <div className="absolute -bottom-8 left-8 w-4 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b" />
        <div className="absolute -bottom-8 right-8 w-4 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b" />
      </div>

      {/* Floating Music Notes */}
      {pressedKeys.map((key, index) => (
        <motion.div
          key={`note-${key}-${index}`}
          className="absolute text-musical-purple-400"
          initial={{
            left: `${Math.random() * 80 + 10}%`,
            bottom: "50%",
            opacity: 1,
          }}
          animate={{
            bottom: "150%",
            opacity: 0,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          ♫
        </motion.div>
      ))}
    </div>
  );
};

export default PianoAnimation;
