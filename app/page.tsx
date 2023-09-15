import Layout from "@/components/layout";
import {skills} from "@/data/config";
import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";


export default function Home() {
    return (
        <Layout>
            {/* banner */}
            <Banner />

            {/* skills */}
            <section className="relative h-1/4 flex flex-col justify-center items-center overflow-hidden">
                <div className="w-full mx-auto py-24">
                    <div className="text-center">
                        <div
                            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                        >
                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                                {skills.map((skill) => (
                                    <li
                                        key={skill.caption + "_scroll1"}
                                        className="my-2 py-2.5 px-8 mx-2 bg-neutral-50 rounded-large shadow-md hover:shadow-inner dark:bg-neutral-800 dark:hover:text-teal-200 transition-all duration-200 delay-75"
                                    >
                                        <a href={skill.link}>{skill.caption}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                                {skills.map((skill) => (
                                    <li
                                        key={skill.caption + "_scroll2"}
                                        className="my-2 py-2.5 px-8 bg-neutral-50 rounded-large shadow-md hover:shadow-inner dark:bg-neutral-800 dark:hover:text-teal-200 transition-all duration-200 delay-75"
                                    >
                                        <a href={skill.link}>{skill.caption}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* about me */}
            <section className="mt-10 mb-24 h-auto">
                <div>
                    <h1 className="text-4xl text-center font-poppins font-bold ">
                        About me
                    </h1>
                    <div className="flex mt-12 flex-col lg:flex-row items-center">
                        <div className="lg:w-[140em]">
                            <div className={"w-full"}>
                                <svg version="1.1"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 30 500 500"
                                     width="100%"
                                     id="blobSvg"
                                >
                                    <image x="0" y="-50"
                                           width="100%"
                                           height="130%"
                                           clip-path="url(#shape)"
                                           href="/my_photo.jpg"
                                           preserveAspectRatio="none">
                                    </image>
                                    <clipPath id="shape">
                                        <path id="blob">
                                            <animate attributeName="d" dur="9000ms" repeatCount="indefinite"
                                                     values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>
                                        </path>
                                    </clipPath>
                                </svg>
                            </div>
                        </div>
                        <div className="text-justify">
                            <p className="mb-2">
                                Since 2020, I’ve been crafting UIs with React, specializing in
                                creating interfaces and solving business tasks.{" "}
                            </p>
                            <p className="mb-2">
                                My experience spans 3 years of working on an NLP project for a
                                university, 2 years of commercial web development of a BPM system,
                                participation in the development of mobile applications, as well
                                as developing products individually or with friends.
                            </p>
                            <p className="mb-2">
                                There are so many things in the world that I want to try to
                                master, so in addition to programming, I am fond of photography,
                                video filming, design, and I also constantly do handicrafts.{" "}
                            </p>
                            <p className="">
                                If you’re interested in collaborating or have any project ideas,
                                you can{" "}
                                <a className="pointer underline hover:decoration-teal-400">
                                    write
                                </a>{" "}
                                me.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* work */}
            {/* contact */}
        </Layout>
    );
}
