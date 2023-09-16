"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import {default_animation} from "@/data/config";


export default function Banner() {
  return (
      <section className="relative">
          <div className="flex h-1/4 md:h-[35em] w-full justify-between flex-col lg:flex-row box-border">
              <div className="flex flex-col justify-center text-center lg:text-left xl:text-left ">
                  <motion.div
                      {...default_animation}
                      className="lg:hidden self-center pb-6">
                      <Image
                          src="/profile-square.jpg"
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
                      src="/profile-vertical.jpg"
                      height={882}
                      width={496}
                      className="rounded-large shadow-lg gradient-radial lg:w-64 md:w-48"
                      alt="Picture of the author"
                  />
              </motion.div>
          </div>
      </section>
  )
}
