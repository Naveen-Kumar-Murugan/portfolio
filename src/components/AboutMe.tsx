"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconBrandInstagram,
} from "@tabler/icons-react";


// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

export function AboutMe() {
    const textRef = useRef<HTMLParagraphElement>(null);

    const links = [
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/NaveenDevStack",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Naveen-Kumar-Murugan",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/naveen-kumar-murugan-4bb973255/",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/naveen_kumar_2004/",
        },
    ];

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const split = new SplitText(el, { type: "words" });

        gsap.fromTo(
            split.words,
            { opacity: 0.05 },
            {
                opacity: 1,
                stagger: 0.05,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                    end: "bottom 55%",
                    scrub: true,
                },
            }
        );

        return () => {
            split.revert();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="bg-neutral-950">
            {/* Hero Section */}
            <div className="lg:min-w-1/3 md:min-w-1/3 sm:w-full min-h-screen md:max-h-screen lg:min-h-screen flex flex-col justify-center items-center bg-zinc-50 rounded-b-[48px] shadow-b-2xl pb-20">
                <div className="mb-10">
                    <div className="w-25 h-25 outline-4 outline-white bg-white rounded-full shadow-lg shadow-gray-800 items-center justify-center flex mx-auto mt-10">
                        <Image
                            src="/portfolio_image.jpg"
                            alt="@naveen_kumar"
                            height={1000}
                            width={1000}
                            className="rounded-full h-25 w-25 outline-3 outline-black"
                        />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-center mt-5 font-figtree text-zinc-600">Naveen Kumar M</h1>
                        <p className="text-center -mt-1 text-base text-zinc-500 font-figtree">Software engineer</p>
                    </div>
                </div>
                <div className="flex items-center justify-center px-8 overflow-hidden lg:w-1/2 md:w-3/4 w-full">
                    <p
                        ref={textRef}
                        className="lg:text-6xl md:text-3xl text-xl font-bold mx-12 text-center text-zinc-500 font-figtree"
                        id="split"
                    >
                        I am a Software Developer specializing in <span className="text-zinc-700">Web, AI/ML, and Blockchain applications.</span> Skilled in architecting, building, and optimizing scalable solutions.
                    </p>
                </div>
                <div className="border-4 border-zinc-200 bg-zinc-100 mt-10 px-2 rounded-full">
                    <FloatingDock items={links} />
                </div>
            </div>
        </div>
    );
}