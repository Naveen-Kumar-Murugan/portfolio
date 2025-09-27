import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { LinkPreview } from "./ui/link-preview";
import Image from "next/image";

export default function Experience() {
    const data = [
        {
            title: "Jun 25' - Aug 25'",
            content: (
                <div>
                    <h2 className="lg:text-3xl md:text-3xl text-xl mb-3 font-semibold text-neutral-800 dark:text-neutral-200">
                        Software Development Engineer Internship at{" "}
                        <LinkPreview
                            url="https://www.pearson.com/en-us.html"
                            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-800 to-cyan-800"
                        >
                            @Pearson
                        </LinkPreview>
                    </h2>
                    <p className="lg:mb-8 md:mb-8 mb-4 lg:text-xl text-base font-base text-neutral-800 md:text-xl  dark:text-neutral-200">
                        Completed a <strong>12-week internship at Pearson</strong>, contributing to real-world projects that enhanced digital learning experiences. Built features with <strong>Next.js, DynamoDB, AWS-Lamda, MCP Server and Clients</strong> while collaborating in an agile environment. The experience strengthened my problem-solving, teamwork, and ability to translate user needs into impactful solutions.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                        <Image
                            src="/Pearson1.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/Pearson2.jpeg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Jun 24' - Jul 24",
            content: (
                <div>
                    <h2 className="lg:text-3xl md:text-3xl text-xl mb-3 font-semibold text-neutral-800 dark:text-neutral-200">
                        Software Development Engineer Internship at{" "}
                        <LinkPreview
                            url="https://infisign.io"
                            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-amber-700 to-blue-700"
                        >
                            @Infisign Inc
                        </LinkPreview>
                    </h2>
                    <p className="lg:mb-8 md:mb-8 mb-4 lg:text-xl text-base font-base text-neutral-800 md:text-xl dark:text-neutral-200">
                        Worked as an <strong>SDE Intern at Infisign Inc. for 6 weeks</strong>, focusing on <strong>improving digital identity and authentication systems</strong>. Contributed to faster and more secure access processes while exploring innovative approaches like <strong>passwordless login</strong>. The role gave me valuable experience in balancing security with usability and building solutions for real-world identity challenges.
                    </p>
                    <div className="grid grid-cols-1">
                        <Image
                            src="/Infisign1.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-40 w-2/3 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-80 lg:w-1/3"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Oct 23' - present",
            content: (
                <div>
                    <h2 className="lg:text-3xl md:text-3xl text-xl mb-3 font-semibold text-neutral-800 dark:text-neutral-200">
                        Part of {" "}
                        <LinkPreview
                            url="https://cyberlabs.club/"
                            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-amber-500"
                        >
                            @Cyberlabs
                        </LinkPreview>
                        {" "}(Official Data & Software Club of IIT-Dhanbad)
                    </h2>
                    <p className="lg:mb-8 md:mb-8 mb-4 lg:text-xl text-base font-base text-neutral-800 md:text-xl dark:text-neutral-200">
                        Part of the <strong>Blockchain division at Cyberlabs, IIT (ISM) Dhanbad’s official coding and development club</strong>. Worked on smart contracts, DApps, and tokenization while exploring cryptography and distributed ledger systems. The experience strengthened my blockchain fundamentals and collaborative development skills.
                    </p>
                    {/* <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div> */}
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip bg-zinc-50" id="experience">
            <Timeline data={data} />
        </div>
    );
}
