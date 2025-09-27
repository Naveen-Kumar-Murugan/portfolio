"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils"
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { useState, useRef } from "react";

export function NavbarDemo() {
    const navItems = [
        {
            name: "Experience",
            link: "#experience",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    // Scroll tracking for visibility (floating navbar behavior)
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    // Scroll tracking for resizing (resizable navbar behavior)  
    const navRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: navRef,
        offset: ["start start", "end start"],
    });
    const [isResized, setIsResized] = useState<boolean>(false);

    // Handle visibility based on scroll direction (floating behavior)
    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const direction = current - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    // Handle resizing based on scroll position (resizable behavior)
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setIsResized(true);
        } else {
            setIsResized(false);
        }
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full" ref={navRef}>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{
                        opacity: 1,
                        y: -100,
                    }}
                    animate={{
                        y: visible ? 0 : -100,
                        opacity: visible ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={cn(
                        "fixed top-10 inset-x-0 mx-auto z-[5000]",
                    )}
                >
                    <Navbar className="sticky inset-x-0 top-0 z-10 w-full">
                        {/* Desktop Navigation */}
                        <NavBody
                            visible={isResized}
                            className={cn(
                                "border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                            )}
                        >
                            <NavbarLogo />
                            <NavItems items={navItems} />
                            <div className="flex items-center gap-4">
                                <a href="mailto:mnaveenkumar.dev04@gmail.com">
                                    <button className="p-[3px] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                        <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white ">
                                            Connect
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </NavBody>

                        {/* Mobile Navigation */}
                        <MobileNav
                            visible={isResized}
                            className={cn(
                                "border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                            )}
                        >
                            <MobileNavHeader>
                                <NavbarLogo />
                                <MobileNavToggle
                                    isOpen={isMobileMenuOpen}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                />
                            </MobileNavHeader>

                            <MobileNavMenu
                                isOpen={isMobileMenuOpen}
                                onClose={() => setIsMobileMenuOpen(false)}
                            >
                                {navItems.map((item, idx) => (
                                    <a
                                        key={`mobile-link-${idx}`}
                                        href={item.link}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="relative text-neutral-600 dark:text-neutral-300"
                                    >
                                        <span className="block">{item.name}</span>
                                    </a>
                                ))}
                                <div className="flex w-full flex-col gap-4">
                                    <a onClick={() => setIsMobileMenuOpen(false)}
                                        href="mailto:mnaveenkumar.dev04@gmail.com">
                                        <button className="p-[3px] relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                            <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white ">
                                                Connect
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </MobileNavMenu>
                        </MobileNav>
                    </Navbar>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}