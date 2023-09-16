"use client"
import React, {MouseEvent, useCallback, useState} from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import {default_animation, Icons} from "@/data/config";

function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

export default function Banner() {
    const [rotate, setRotate] = useState({x: 0, y: 0});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            setRotate({x: rotateX, y: rotateY});
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({x: 0, y: 0});
    };

    return (
        <section className="relative">
            <div className="flex h-1/4 md:h-[35em] w-full justify-between flex-col lg:flex-row box-border">
                <div className="flex flex-col justify-center text-center lg:text-left xl:text-left ">
                    <motion.div
                        {...default_animation}
                        className="lg:hidden self-center pb-6">
                        <Image
                            src="./profile-square.jpg"
                            height={882}
                            width={496}
                            className="rounded-full shadow-lg gradient-radial w-24 h-24"
                            alt="Picture of the author"
                        />
                    </motion.div>
                    <motion.p
                        {...default_animation}
                        className="font-poppins font-bold pb-6 pl-1 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Hello web stranger,
                    </motion.p>
                    <motion.p
                        {...default_animation}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                            delay: 0.2,
                        }}
                        className="font-poppins font-bold pb-6 text-4xl md:text-7xl lg:text-8xl lg:pb-14 xl:text-9xl">
                        I&apos;m Dayana
                    </motion.p>

                    <motion.div
                        {...default_animation}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                            delay: 0.4,
                        }}
                        className="pl-1 w-3/4 xl:w-2/3 self-center lg:self-start text-xs md:text-base">
                            <span>
                              I’m a <strong>Junior Full Stack Developer</strong> with{" "}
                                <strong>2+ years</strong> of experience currently based in
                              Siberia :){" "}
                            </span>
                        <p>Clean code - my pleasure, wonderful site - your treasure</p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{opacity: 0, x: 90, y: 0}}
                    animate={{opacity: 1, x: 0, y: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: 1.2,
                        delay: 0.2
                    }}
                    className="hidden lg:block">
                    <Image
                        src="./profile-vertical.jpg"
                        height={882}
                        width={496}
                        className="relative rounded-large shadow-lg gradient-radial lg:w-64 md:w-48"
                        alt="Picture of the author"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                        }}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    />
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -60, y: -10}}
                    animate={{opacity: 1, x: 0, y: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.2
                    }}
                    className={"absolute -top-2 right-44 hidden lg:block transition-colors delay-1 duration-200"}>
                    <div
                        className="group w-64 h-14 flex justify-center items-center px-2 py-4 backdrop-blur-sm bg-white/30 rounded-large gap-5"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                        }}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        {<Icons.music
                            className="w-4 h-4 md:w-5 md:h-5 group-hover:text-teal-200 "/>}
                        <div className="flex flex-col">
                             <span className="text-xs">On repeat</span>
                            <span className="text-sm">Twenty one pilots - Ride</span>
                        </div>

                    </div>

                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: -90, y: -65}}
                    animate={{opacity: 1, x: 0, y: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: 1.2,
                        delay: 0.2
                    }}
                    className="absolute top-32 right-80 hidden lg:block transition-colors delay-1 duration-200">

                    <div
                        className="group w-14 h-14 p-6 backdrop-blur-sm bg-white/30 rounded-large flex flex-col justify-center items-center"
                        style={{
                            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                        }}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        <span className="group-hover:text-teal-200">60</span>
                        <span className="text-xs">wpm</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
