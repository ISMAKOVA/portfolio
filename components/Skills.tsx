"use client";
import React, { ReactNode } from "react";
import { skills } from "@/data/config";

export default function Skills() {
  return (
    <div className="absolute w-screen left-0 z-20">
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap ">
            {skills.map((skill) => (
              <a
              href={skill.link}
              className="py-2.5 px-8 mx-2 bg-neutral-50 rounded-large shadow-md hover:shadow-inner dark:bg-neutral-800 dark:hover:text-teal-200 transition-all duration-200 delay-75"
            >
              {skill.caption}
            </a>    
            ))}
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap ">
            {skills.map((skill) => (
              <a
                href={skill.link}
                className="py-2.5 px-8 mx-2 bg-neutral-50 rounded-large shadow-md hover:shadow-inner dark:bg-neutral-800 dark:hover:text-teal-200 transition-all duration-200 delay-75"
              >
                {skill.caption}
              </a>
            ))}
          </div>
        </div>
      </div>
  );
}
