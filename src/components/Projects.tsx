"use client";

import React, { useState, useRef, useEffect } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion, AnimatePresence } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

interface ProjectCard {
    id: number;
    title: string;
    description: string;
    category: string;
    image?: string;
    content: React.ReactNode;
    containerClassName?: string;
    bgColor?: string;
    link?: string;
}

const ProjectModal = ({
    card,
    isOpen,
    onClose
}: {
    card: ProjectCard | null;
    isOpen: boolean;
    onClose: () => void;
}) => {
    const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    useOutsideClick(containerRef, () => onClose());
    return (
        <AnimatePresence>
            {card && isOpen && (
                <div className="fixed inset-0 z-[9998] h-screen overflow-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        ref={containerRef}
                        className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
                    >
                        <button
                            className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                            onClick={onClose}
                        >
                            <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                        </button>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-base font-medium text-black dark:text-white font-figtree"
                        >
                            {card.category}
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-2xl flex items-center font-semibold text-neutral-700 md:text-5xl dark:text-white font-figtree"
                        >
                            {card.link ?
                                <a href={card.link} className="flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
                                    {card.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 mt-2 icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                                </a>
                                :
                                card.title
                            }
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="py-10"
                        >
                            {card.content}
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const ProjectDetailContent = ({
    title,
    description,
    features,
    technologies,
    images
}: {
    title: string;
    description: string;
    features?: string[];
    technologies?: string[];
    images?: string[];
}) => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200 font-figtree">
                    Project Overview
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-lato">
                    {description}
                </p>
            </div>

            {features && (
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200 font-figtree">
                        Key Features
                    </h3>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-neutral-600 dark:text-neutral-300 font-lato">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {technologies && (
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200 font-figtree">
                        Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium font-lato"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {images && (
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200 font-figtree">
                        Screenshots
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                width={500}
                                height={500}
                                alt={`${title} screenshot ${index + 1}`}
                                className="rounded-lg object-cover w-2/3 border-2 border-black"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project: ProjectCard) => {
        console.log("Opening project:", project.title);
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const projects: ProjectCard[] = [
        {
            id: 1,
            title: "Agentic Chatbot and MCP Systems",
            description: "Design-to-code agentic workflow equipped with MCP servers for seamless generation and deployment of e-commerce sites.",
            category: "AI/ML Development",
            image: "/mcp-agent.png",
            link: "https://github.com/Naveen-Kumar-Murugan/bc-mcp",
            containerClassName: "col-span-1 lg:col-span-3 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]",
            content: (
                <ProjectDetailContent
                    title="Agentic Chatbot and MCP Systems"
                    description="A sophisticated design-to-code workflow that leverages agentic AI systems and Model Context Protocol (MCP) servers to automatically generate and deploy complete e-commerce websites. This system bridges the gap between design concepts and production-ready code."
                    features={[
                        "Automated design-to-code conversion using AI agents",
                        "MCP server integration for seamless data flow",
                        "Real-time deployment pipeline",
                        "E-commerce template generation",
                        "Custom component creation and optimization",
                        "Multi-platform deployment support"
                    ]}
                    technologies={["Python", "TypeScript", "React", "Next.js", "OpenAI API", "Docker", "AWS"]}
                    images={["/mcp-agent.png"]}
                />
            )
        },
        {
            id: 2,
            title: "BigCommerce Data-Model Extension",
            description: "Extended BigCommerce's native data models to support metafields of various objects within the admin panel.",
            category: "E-commerce Development",
            containerClassName: "col-span-2 min-h-[300px] bg-indigo-700",
            content: (
                <ProjectDetailContent
                    title="BigCommerce Data-Model Extension"
                    description="A comprehensive extension that enhances BigCommerce's data architecture by adding support for custom metafields across various object types. This solution provides merchants with greater flexibility in managing product data and storefront customization."
                    features={[
                        "Custom metafield support for products, categories, and orders",
                        "Admin panel integration for easy management",
                        "API endpoints for metafield CRUD operations",
                        "Validation and type checking for data integrity",
                        "Bulk import/export functionality",
                        "GraphQL API integration"
                    ]}
                    technologies={["JavaScript", "BigCommerce API", "DynamoDB", "GraphQL", "Next.Js", "AWS Lambda"]}
                    images={["/bc-app-extension.png", "/bc-flowchart.png"]}
                />
            )
        },
        {
            id: 3,
            title: "Attendance System Hyperhack",
            description: "Developed an Enterprise Blockchain based Attendance System in Hyperledger Fabric for secure and transparent attendance tracking.",
            category: "Blockchain Development",
            link: "https://github.com/Naveen-Kumar-Murugan/Attendance_sys_Hyperhack",
            containerClassName: "col-span-2 min-h-[300px] bg-green-700",
            content: (
                <ProjectDetailContent
                    title="Enterprise Blockchain Attendance System"
                    description="A secure and transparent attendance tracking system built on Hyperledger Fabric blockchain technology. This enterprise-grade solution ensures data integrity and provides immutable attendance records with multi-organizational support."
                    features={[
                        "Blockchain-based immutable attendance records",
                        "Multi-organization network support",
                        "Smart contract automation for attendance validation",
                        "Real-time attendance tracking and reporting",
                        "Role-based access control",
                        "Integration with biometric systems",
                        "Audit trail and compliance reporting"
                    ]}
                    technologies={["Hyperledger Fabric", "Go", "Node.js", "React", "Docker", "CouchDB"]}
                />
            )
        },
        {
            id: 4,
            title: "CryptoWallet MetaMask Clone",
            description: "Developed CryptoWallet-MetaMask Clone software capable of handling cryptocurrency transactions in real-time.",
            category: "Blockchain Development",
            image: "/crypto-wallet.png",
            link: "https://github.com/Naveen-Kumar-Murugan/CryptoWallet-MetaMask-Clone",
            containerClassName: "col-span-1 lg:col-span-3 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]",
            content: (
                <ProjectDetailContent
                    title="CryptoWallet MetaMask Clone"
                    description="A comprehensive cryptocurrency wallet application that replicates MetaMask functionality with additional features. Built for secure transaction handling, multi-chain support, and seamless DApp integration."
                    features={[
                        "Multi-chain cryptocurrency support (Ethereum, BSC, Polygon)",
                        "Secure key management and storage",
                        "DApp integration and Web3 provider functionality",
                        "Real-time transaction processing",
                        "Token swapping and exchange integration",
                        "Portfolio tracking and analytics",
                        "Hardware wallet integration",
                        "Custom network configuration"
                    ]}
                    technologies={["React", "TypeScript", "Web3.js", "Ethers.js", "Electron", "Node.js"]}
                    images={["/crypto-wallet.png", "/wallet-demo-1.png", "/wallet-demo-2.png"]}
                />
            )
        }
    ];

    return (
        <div className="bg-neutral-950" id="projects">
            <div className="w-full h-full bg-zinc-50 pt-20 dark:bg-neutral-950 font-sans md:px-10 lg:pb-20 md:pb-15 pb-10 ">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-10">
                    <HeroHighlight>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [20, -5, 0] }}
                            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                        >
                            <div className="lg:text-6xl md:text-5xl text-2xl mb-4 text-neutral-600 dark:text-white font-figtree font-semibold">
                                Projects that
                                <Highlight className="lg:text-6xl md:text-5xl text-2xl ml-2 mb-4 text-black dark:text-white font-figtree font-base">
                                    I have worked on
                                </Highlight>
                            </div>
                        </motion.h1>
                    </HeroHighlight>

                    <p className="text-neutral-700 dark:text-neutral-300 lg:text-2xl md:text-2xl sm:text-lg max-w-4/5 font-figtree">
                        A showcase of my technical projects, highlighting innovative solutions
                        across AI, Blockchain, and Web-Application development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-10">
                    {/* First Row: 3/5 span, then 2/5 span */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 * 0.1, duration: 0.5 }}
                        className="col-span-1 lg:col-span-3"
                    >
                        <WobbleCard
                            containerClassName="h-full bg-indigo-800 md:min-h-[500px] min-h-[400px] lg:min-h-[300px] cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                            onClick={() => {
                                console.log("Card clicked");
                                handleProjectClick(projects[0])
                            }}
                        >
                            <div className="lg:max-w-5/9 md:max-w-5/9 w-full relative z-10 lg:mt-0 md:mt-0 -mt-13 lg:ml-0 md:ml-0 ml-4">
                                <h2 className="text-left text-balance font-lato text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    {projects[0].title}
                                </h2>
                                <p className="mt-4 text-left lg:text-lg md:text-lg text-base  text-neutral-200">
                                    {projects[0].description}
                                </p>
                                <div className="lg:mt-6 md:mt-6 mt-2">
                                    <span className="lg:inline-block md:inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                                        Click to view details
                                    </span>
                                </div>
                            </div>
                            {projects[0].image && (
                                <Image
                                    src={projects[0].image}
                                    width={400}
                                    height={400}
                                    alt={`${projects[0].title} preview`}
                                    className="absolute -right-6 lg:-right-[15%] -bottom-10 object-contain rounded-2xl"
                                />
                            )}
                        </WobbleCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 * 0.1, duration: 0.5 }}
                        className="col-span-1 lg:col-span-2"
                    >
                        <WobbleCard
                            containerClassName="h-full bg-violet-600 md:min-h-[300px] min-h-[200px] lg:min-h-[300px] cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                            onClick={() => handleProjectClick(projects[1])}
                        >
                            <div className=" w-full relative z-10 lg:mt-0 md:mt-0 -mt-13 lg:ml-0 md:ml-0 ml-4">
                                <h2 className="text-left text-balance font-lato text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    {projects[1].title}
                                </h2>
                                <p className="mt-4 text-left lg:text-lg md:text-lg text-base  text-neutral-200">
                                    {projects[1].description}
                                </p>
                                <div className="lg:mt-6 md:mt-6 mt-2">
                                    <span className="lg:inline-block md:inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                                        Click to view details
                                    </span>
                                </div>
                            </div>
                        </WobbleCard>
                    </motion.div>

                    {/* Second Row: 2/5 span, then 3/5 span */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 * 0.1, duration: 0.5 }}
                        className="col-span-1 lg:col-span-2"
                    >
                        <WobbleCard
                            containerClassName="h-full lg:bg-violet-600 bg-indigo-800 md:min-h-[300px] min-h-[200px] lg:min-h-[300px] cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                            onClick={() => handleProjectClick(projects[2])}
                        >
                            <div className="w-full relative z-10 lg:mt-0 md:mt-0 -mt-13 lg:ml-0 md:ml-0 ml-4">
                                <h2 className="text-left text-balance font-lato text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    {projects[2].title}
                                </h2>
                                <p className="mt-4 text-left lg:text-lg md:text-lg text-base text-neutral-200">
                                    {projects[2].description}
                                </p>
                                <div className="lg:mt-6 md:mt-6 mt-2">
                                    <span className="lg:inline-block md:inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                                        Click to view details
                                    </span>
                                </div>
                            </div>
                        </WobbleCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 * 0.1, duration: 0.5 }}
                        className="col-span-1 lg:col-span-3"
                    >
                        <WobbleCard
                            containerClassName="h-full bg-violet-600 lg:bg-indigo-800 md:min-h-[500px] min-h-[400px] lg:min-h-[300px] cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                            onClick={() => {
                                console.log("Card clicked");
                                handleProjectClick(projects[3])
                            }}
                        >
                            <div className="lg:max-w-5/9 md:max-w-5/9 w-full relative z-10 lg:mt-0 md:mt-0 -mt-13 lg:ml-0 md:ml-0 ml-4">
                                <h2 className="text-left text-balance font-lato text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    {projects[3].title}
                                </h2>
                                <p className="mt-4 text-left lg:text-lg md:text-lg text-base  text-neutral-200">
                                    {projects[3].description}
                                </p>
                                <div className="lg:mt-6 md:mt-6 mt-2">
                                    <span className="lg:inline-block md:inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                                        Click to view details
                                    </span>
                                </div>
                            </div>
                            {projects[3].image && (
                                <Image
                                    src={projects[3].image}
                                    width={400}
                                    height={400}
                                    alt={`${projects[3].title} preview`}
                                    className="absolute -right-6 lg:-right-[15%] -bottom-10 object-contain rounded-2xl"
                                />
                            )}
                        </WobbleCard>
                    </motion.div>
                </div>

                <ProjectModal
                    card={selectedProject}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
        </div>
    );
}
