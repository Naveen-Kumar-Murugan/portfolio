"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { useMediaQuery } from "react-responsive";
import { Vortex } from "./ui/vortex";

export default function ContactMe() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const onButtonClick = () => {
        const pdfUrl = "Naveen-Kumar-resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Naveen-Kumar-resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            {isMobile && (
                <>
                    <div className="w-full mx-auto h-[30rem] overflow-hidden bg-neutral-950" id="contact">
                        <Vortex
                            backgroundColor="black"
                            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                        >
                            <div className="flex flex-col items-center w-4/5">
                                <p className="flex flex-col w-full items-center text-center text-xl font-bold text-white dark:text-white mb-4">
                                    <span className="text-3xl mb-4 bg-linear-to-br from-violet-300 to-fuchsia-300 via-blue-300 text-transparent bg-clip-text">Let&apos;s Connect to create something Awesome!</span>
                                    <span className="w-full">
                                        Reach out to me for collaborations, inquiries, or just to say hello. I&apos;m excited to hear from you!
                                    </span>
                                </p>
                                <div className="flex gap-10">
                                    <a href="mailto:mnaveenkumar.dev04@gmail.com">
                                        <button className="p-[3px] relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                            <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white ">
                                                Connect
                                            </div>
                                        </button>
                                    </a>
                                    <button className="p-[3px] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full " />
                                        <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white "
                                            onClick={onButtonClick}
                                        >
                                            Resume
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Vortex>
                    </div>
                    {/* <BackgroundBeams /> */}
                </>
            )
            }
            {isTablet && (
                <>
                    <div className="w-full mx-auto h-[50rem] overflow-hidden bg-neutral-950" id="contact">
                        <Vortex
                            backgroundColor="black"
                            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                        >
                            <div className="flex flex-col items-center w-4/5">
                                <p className="flex flex-col w-full items-center text-center text-2xl font-bold text-white dark:text-white mb-4">
                                    <span className="text-5xl mb-4 bg-linear-to-br from-violet-300 to-fuchsia-300 via-blue-300 text-transparent bg-clip-text">Let&apos;s Connect to create something Awesome!</span>
                                    <span className="w-4/5">
                                        Reach out to me for collaborations, inquiries, or just to say hello. I&apos;m excited to hear from you!
                                    </span>
                                </p>
                                <div className="flex gap-10">
                                    <a href="mailto:mnaveenkumar.dev04@gmail.com">
                                        <button className="p-[3px] relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                            <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white ">
                                                Connect
                                            </div>
                                        </button>
                                    </a>
                                    <button className="p-[3px] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full " />
                                        <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white "
                                            onClick={onButtonClick}
                                        >
                                            Resume
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Vortex>
                    </div>
                </>
            )
            }
            {isLaptop && (
                <div className="flex min-h-screen bg-neutral-950 w-full items-center justify-center overflow-hidden antialiased">
                    <div id="contact" className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                        <Vortex
                            backgroundColor="black"
                            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                        >
                            <div className="flex flex-col items-center w-1/2">
                                <p className="flex flex-col w-full items-center text-center text-2xl font-bold text-white dark:text-white mb-4">
                                    <span className="text-7xl mb-4 bg-linear-to-br from-violet-300 to-fuchsia-300 via-blue-300 text-transparent bg-clip-text">Let&apos;s Connect to create something Awesome!</span>
                                    <span className="w-3/5">
                                        Reach out to me for collaborations, inquiries, or just to say hello. I&apos;m excited to hear from you!
                                    </span>
                                </p>
                                <div className="flex gap-10">
                                    <a href="mailto:mnaveenkumar.dev04@gmail.com">
                                        <button className="p-[3px] relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                            <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white ">
                                                Connect
                                            </div>
                                        </button>
                                    </a>
                                    <button className="p-[3px] relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full " />
                                        <div className="px-6 py-2 font-bold rounded-full bg-white text-xl relative group transition duration-200 hover:bg-transparent hover:cursor-pointer hover:text-white "
                                            onClick={onButtonClick}
                                        >
                                            Resume
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Vortex>
                        <BackgroundBeams />
                    </div>
                </div>)}
        </>
    );
}
