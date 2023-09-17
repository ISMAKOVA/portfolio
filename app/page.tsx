import Layout from "@/components/layout";
import {skills} from "@/data/config";
import React from "react";
import Banner from "@/components/banner";
import Blob from "@/components/blob";


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
                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 sm:[&_li]:mx-8 animate-infinite-scroll">
                                {skills.map((skill) => (
                                    <li
                                        key={skill.caption + "_scroll1"}
                                        className="my-2 py-2.5 px-8 mx-2 bg-neutral-50 rounded-large shadow-md hover:shadow-inner dark:bg-neutral-800 dark:hover:text-teal-200 transition-all duration-200 delay-75"
                                    >
                                        <a href={skill.link}>{skill.caption}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 sm:[&_li]:mx-8 animate-infinite-scroll">
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
                                <Blob>
                                    <image x="-10" y="25"
                                           width="100%"
                                           height="100%"
                                           clipPath="url(#shape)"
                                           href="./photo.jpg"
                                           preserveAspectRatio="none">
                                    </image>
                                </Blob>
                            </div>
                        </div>
                        <div className="text-justify text-xs sm:text-base md:text-lg">
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
