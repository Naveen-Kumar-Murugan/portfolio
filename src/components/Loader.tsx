"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Ensure loader stays at least 1.5s
            setTimeout(() => setIsLoading(false), 1500);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] text-5xl font-bold flex flex-col items-center justify-center bg-zinc-50 text-gray-500 font-figtree"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Naveen.dev
                    {/* Loading bar */}
                    <motion.div
                        className=" h-1 w-40 rounded-full bg-gray-500 overflow-hidden"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.div className="h-full w-full bg-gray-500 rounded-full" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
