"use client";

import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import CanvasLoader from "./models/Loader";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import Mac from "./models/Mac";
import Headphones from "./models/Headphones";
import Controller from "./models/Controller";
import { useMediaQuery } from "react-responsive";


// 3D model components with scroll animation
function ControllerModel({ scrollFactor }: { scrollFactor: number }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const ref1 = useRef<THREE.Group>(null);
    const ref2 = useRef<THREE.Group>(null);
    const ref3 = useRef<THREE.Group>(null);


    const initialX = -0.17;
    const initialY = 0.25;
    const initialRotationY = -0.12;

    const initialX2 = -0.3;
    const initialY2 = 0.25;
    const initialRotationY2 = -0.12;

    const initialX3 = 0.23;
    const initialY3 = -0.1;
    const initialRotationY3 = -0.12;

    useFrame(() => {
        if (ref1.current) {
            ref1.current.position.y = THREE.MathUtils.lerp(ref1.current.position.y, initialY + scrollFactor * 0.1, 0.05);
            ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x, initialX - scrollFactor * 0.3, 0.05);
            ref1.current.rotation.y = THREE.MathUtils.lerp(ref1.current.rotation.y, initialRotationY + scrollFactor, 0.07);
        }
    });

    useFrame(() => {
        if (ref2.current) {
            ref2.current.position.y = THREE.MathUtils.lerp(ref2.current.position.y, initialY2 + scrollFactor * 0.3, 0.05);
            ref2.current.position.x = THREE.MathUtils.lerp(ref2.current.position.x, initialX2 - scrollFactor, 0.05);
            ref2.current.rotation.y = THREE.MathUtils.lerp(ref2.current.rotation.y, initialRotationY2 + scrollFactor * 0.5, 0.05);
        }
    });
    useFrame(() => {
        if (ref3.current) {
            ref3.current.position.y = THREE.MathUtils.lerp(ref3.current.position.y, initialY3 + scrollFactor * 0.3, 0.05);
            ref3.current.position.x = THREE.MathUtils.lerp(ref3.current.position.x, initialX3 - scrollFactor, 0.05);
            ref3.current.rotation.y = THREE.MathUtils.lerp(ref3.current.rotation.y, initialRotationY3 + scrollFactor * 0.5, 0.05);
        }
    });
    return (
        <>
            {isMobile && (
                <Controller ref={ref1} position={[initialX, initialY, -1.5]} rotation={[-0.1, initialRotationY, -2.0]} scale={[0.2, 0.2, 0.2]} />
            )}
            {
                isTablet && (
                    <Controller ref={ref2} position={[initialX, initialY, -1.5]} rotation={[-0.1, initialRotationY, -2.3]} scale={[0.25, 0.25, 0.25]} />
                )
            }
            {
                isLaptop && (
                    <Controller ref={ref3} position={[initialX, initialY, -1.5]} rotation={[-0.1, initialRotationY, -2.3]} scale={[0.55, 0.55, 0.55]} />
                )}
        </>);
}

function HeadphonesModel({ scrollFactor }: { scrollFactor: number }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const ref1 = useRef<THREE.Group>(null);
    const ref2 = useRef<THREE.Group>(null);
    const ref3 = useRef<THREE.Group>(null);

    const initialX = 0.15;
    const initialY = -0.23;
    const initialRotationY = -3;

    const initialX2 = 0.15;
    const initialY2 = -0.23;
    const initialRotationY2 = -3;

    const initialX3 = -0.01;
    const initialY3 = -0.1;
    const initialRotationY3 = 0.39;

    useFrame(() => {
        if (ref1.current) {
            ref1.current.position.y = THREE.MathUtils.lerp(ref1.current.position.y, initialY - scrollFactor * 0.02, 0.02);
            ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x, initialX + scrollFactor * 0.1, 0.05);
            ref1.current.rotation.y = THREE.MathUtils.lerp(ref1.current.rotation.y, initialRotationY + scrollFactor * 0.5, 0.05);
        }
    });
    useFrame(() => {
        if (ref2.current) {
            ref2.current.position.y = THREE.MathUtils.lerp(ref2.current.position.y, initialY2 - scrollFactor * 0.02, 0.02);
            ref2.current.position.x = THREE.MathUtils.lerp(ref2.current.position.x, initialX2 + scrollFactor * 0.1, 0.05);
            ref2.current.rotation.y = THREE.MathUtils.lerp(ref2.current.rotation.y, initialRotationY2 + scrollFactor * 0.3, 0.05);
        }
    });

    useFrame(() => {
        if (ref3.current) {
            ref3.current.position.y = THREE.MathUtils.lerp(ref3.current.position.y, initialY3 - scrollFactor * 0.05, 0.02);
            ref3.current.position.x = THREE.MathUtils.lerp(ref3.current.position.x, initialX3 - scrollFactor * 0.4, 0.05);
            ref3.current.rotation.y = THREE.MathUtils.lerp(ref3.current.rotation.y, initialRotationY3 - scrollFactor, 0.05);
        }
    });

    return (
        <>
            {isMobile && (
                <Headphones ref={ref1} position={[initialX, initialY, -0.7]} rotation={[0.04, initialRotationY, -1.0]} scale={[0.9, 0.9, 0.9]} args={[]} />
            )}
            {
                isTablet && (
                    <Headphones ref={ref2} position={[initialX, initialY, -0.7]} rotation={[0.04, initialRotationY, -1.0]} scale={[1, 1, 1]} args={[]} />
                )
            }
            {
                isLaptop && (
                    <Headphones ref={ref3} position={[initialX, initialY, -0.7]} rotation={[0.04, initialRotationY, -1.0]} scale={[2.8, 2.8, 2.8]} args={[]} />
                )}
        </>);
}

function MacModel({ scrollFactor }: { scrollFactor: number }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const ref1 = useRef<THREE.Group>(null);
    const ref2 = useRef<THREE.Group>(null);
    const ref3 = useRef<THREE.Group>(null);

    const initialX1 = 0.09;
    const initialY1 = 0.15;
    const initialRotationY1 = 0.39;

    const initialX2 = 0.09;
    const initialY2 = 0.15;
    const initialRotationY2 = 0.39;

    const initialX3 = 0.08;
    const initialY3 = 0;
    const initialRotationY3 = 0.39;

    useFrame(() => {
        if (ref1.current) {
            ref1.current.position.y = THREE.MathUtils.lerp(ref1.current.position.y, initialY1 - scrollFactor * 0.05, 0.02);
            ref1.current.position.x = THREE.MathUtils.lerp(ref1.current.position.x, initialX1 + scrollFactor * 0.1, 0.05);
            ref1.current.rotation.y = THREE.MathUtils.lerp(ref1.current.rotation.y, initialRotationY1 + scrollFactor * 0.3, 0.05);
        }
    });

    useFrame(() => {
        if (ref2.current) {
            ref2.current.position.y = THREE.MathUtils.lerp(ref2.current.position.y, initialY2 - scrollFactor * 0.05, 0.02);
            ref2.current.position.x = THREE.MathUtils.lerp(ref2.current.position.x, initialX2 + scrollFactor * 0.1, 0.05);
            ref2.current.rotation.y = THREE.MathUtils.lerp(ref2.current.rotation.y, initialRotationY2 + scrollFactor * 0.3, 0.05);
        }
    });

    useFrame(() => {
        if (ref3.current) {
            ref3.current.position.y = THREE.MathUtils.lerp(ref3.current.position.y, initialY3 - scrollFactor * 0.05, 0.02);
            ref3.current.position.x = THREE.MathUtils.lerp(ref3.current.position.x, initialX3 + scrollFactor * 0.1, 0.05);
            ref3.current.rotation.y = THREE.MathUtils.lerp(ref3.current.rotation.y, initialRotationY3 + scrollFactor * 0.3, 0.05);
        }
    });

    return (<>
        {isMobile && (
            <Mac ref={ref1} position={[initialX1, initialY1, -0.5]} rotation={[1.57, initialRotationY1, 0]} scale={[0.6, 0.6, 0.6]} args={[]} />
        )}
        {
            isTablet && (
                <Mac ref={ref2} position={[initialX1, initialY2, -0.5]} rotation={[1.57, initialRotationY2, 0]} scale={[0.7, 0.7, 0.7]} args={[]} />
            )
        }
        {
            isLaptop && (
                <Mac ref={ref3} position={[initialX3, initialY3, -0.5]} rotation={[1.57, initialRotationY3, 0]} scale={[1, 1, 1]} args={[]} />
            )}
    </>);
}

// Main Hero component
export function Hero() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const words = ["Innovative", "Optimised", "Scalable", "Robust", "Intuitive", "Efficient", "Reliable"];

    // Track scroll
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollFactor = scrollY * 0.001; // Adjust sensitivity

    return (
        <>
            {isMobile && (
                <div className="w-full max-h-screen justify-between">
                    <div className="w-full h-screen relative z-0">
                        <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                            <Suspense fallback={<CanvasLoader />}>
                                <PerspectiveCamera makeDefault />
                                <MacModel scrollFactor={scrollFactor} />
                                <ambientLight intensity={17} />
                                <directionalLight position={[-4, 2, 13]} intensity={2.6} castShadow />
                                <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                            </Suspense>
                        </Canvas>
                        <div className=" absolute inset-0 z-10">
                            <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault />
                                    <ControllerModel scrollFactor={scrollFactor} />
                                    <ambientLight intensity={6.1} />
                                    <directionalLight position={[3, 0.5, 12]} intensity={1.8} castShadow />
                                    <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                    <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                                </Suspense>
                            </Canvas>
                        </div>
                        <div className=" absolute inset-0 z-20">
                            <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault />
                                    <HeadphonesModel scrollFactor={scrollFactor} />
                                    <ambientLight intensity={12.7} />
                                    <directionalLight position={[-2, 1, 8]} intensity={2.2} castShadow />
                                    <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                    <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                                </Suspense>
                            </Canvas>
                        </div>
                        <div className="min-w-1/3 flex flex-col justify-center absolute items-center inset-0 z-30">
                            <div>
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
                            <div className="flex justify-center items-center w-full">
                                <div className="lg:text-xl md:text-xl text-2xl mx-auto font-figtree font-semibold text-neutral-600 dark:text-neutral-400 justify-center text-center">
                                    Building
                                    <FlipWords words={words} /> <br />
                                    solutions through
                                    <br />
                                    clean code.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isTablet && (
                <div className="w-full max-h-screen justify-between">
                    <div className="w-full h-screen relative z-0">
                        <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                            <Suspense fallback={<CanvasLoader />}>
                                <PerspectiveCamera makeDefault />
                                <MacModel scrollFactor={scrollFactor} />
                                <ambientLight intensity={17} />
                                <directionalLight position={[-4, 2, 13]} intensity={2.6} castShadow />
                                <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                            </Suspense>
                        </Canvas>
                        <div className=" absolute inset-0 z-10">
                            <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault />
                                    <ControllerModel scrollFactor={scrollFactor} />
                                    <ambientLight intensity={6.1} />
                                    <directionalLight position={[3, 0.5, 12]} intensity={1.8} castShadow />
                                    <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                    <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                                </Suspense>
                            </Canvas>
                        </div>
                        <div className=" absolute inset-0 z-20">
                            <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault />
                                    <HeadphonesModel scrollFactor={scrollFactor} />
                                    <ambientLight intensity={12.7} />
                                    <directionalLight position={[-2, 1, 8]} intensity={2.2} castShadow />
                                    <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                    <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                                </Suspense>
                            </Canvas>
                        </div>
                        <div className="min-w-1/3 flex flex-col justify-center absolute items-center inset-0 z-30">
                            <div>
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
                            <div className="flex justify-center items-center w-full">
                                <div className="lg:text-7xl md:text-5xl text-2xl mx-auto font-figtree font-semibold text-neutral-600 dark:text-neutral-400 justify-center text-center">
                                    Building
                                    <FlipWords words={words} /> <br />
                                    solutions through
                                    <br />
                                    clean code.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isLaptop && (
                <div className="flex w-full max-h-screen justify-between">
                    {/* Left Column: Controller + Headphones */}
                    <div className="w-1/3 h-screen flex flex-col">
                        <div className="h-1/2 relative">
                            <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault />
                                    <ControllerModel scrollFactor={scrollFactor} />
                                    <ambientLight intensity={6.1} />
                                    <directionalLight position={[3, 0.5, 12]} intensity={1.8} castShadow />
                                    <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                    <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                                </Suspense>
                            </Canvas>
                        </div>

                        <div className="h-1/2 relative">
                            <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault />
                                    <HeadphonesModel scrollFactor={scrollFactor} />
                                    <ambientLight intensity={12.7} />
                                    <directionalLight position={[-2, 1, 8]} intensity={2.2} castShadow />
                                    <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                    <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>

                    {/* Center Column: Photo + Text */}
                    <div className="min-w-1/3 flex flex-col justify-center items-center">
                        <div>
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
                        <div className="flex justify-center items-center w-full">
                            <div className="lg:text-6xl mx-auto font-figtree font-semibold text-neutral-600 dark:text-neutral-400 justify-center text-center">
                                Building
                                <FlipWords words={words} /> <br />
                                solutions through
                                <br />
                                clean code.
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Mac */}
                    <div className="w-2/7 h-screen relative">
                        <Canvas className="w-full h-full" style={{ pointerEvents: "auto" }}>
                            <Suspense fallback={<CanvasLoader />}>
                                <PerspectiveCamera makeDefault />
                                <MacModel scrollFactor={scrollFactor} />
                                <ambientLight intensity={17} />
                                <directionalLight position={[-4, 2, 13]} intensity={2.6} castShadow />
                                <pointLight position={[-10, -10, -10]} intensity={0.3} />
                                <hemisphereLight args={["#ffffff", "#60666C"]} intensity={0.4} />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            )}
        </>
    );
}
