"use client"
import React, {ReactNode} from "react";
import Header from "@/components/header";
import {motion, AnimatePresence} from "framer-motion";
import {default_animation, Icons} from "@/data/config";

interface Props {
    children: ReactNode;
}


export default function Layout({children}: Props) {
    return (
        <div className="relative flex flex-col min-h-screen bg-neutral-50 dark:bg-black/30 font-nunito">
            <div className="box-border px-14 sm:px-28">
                <Header/>
                <main className="flex-col items-center dark:text-white static mt-16 md:mt-28">
                    <AnimatePresence>
                        <motion.div
                            {...default_animation}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                            }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
                <footer className="flex justify-end my-10 text-sm dark:text-neutral-400">
                    <span className="inline-flex gap-1 group">
                        <p>&copy; 2023 Dayana Ismakova </p>
                        {<Icons.sparkles className="w-4 h-4 group-hover:text-teal-200 transition-colors delay-1 duration-200"/>}
                    </span>
                </footer>
            </div>

        </div>
    );
}
