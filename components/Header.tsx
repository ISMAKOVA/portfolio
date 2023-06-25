"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/app/utils";
import { Icons } from "@/data/config";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [])

  const switchTheme = () => {
    if (mounted) {
        setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <nav className="flex w-full justify-between align-middle mt-8 gap-8 px-28 ">
      <Link href={"/"} className="grow font-bold group">
        ismakova{<span className="group-hover:text-teal-200 transition-colors delay-1 duration-200">.</span>}
      </Link>
      <Link className="hover:text-teal-200 transition-colors delay-1 duration-200" href={"/work"}>work</Link>
      <div className="cursor-pointer hover:text-teal-200 transition-colors delay-1 duration-200">contact</div>
      <div
        className={cn(
          "flex w-12 h-6 p-2 items-center  rounded-full cursor-pointer ",
          mounted && theme === "light" ? "justify-end bg-neutral-200" : "justify-start bg-neutral-600"
        )}
        onClick={switchTheme}
      >
        <motion.div className="w-4 h-4 rounded-full" layout transition={spring}>
          {mounted && theme === "light" ? (
            <Icons.sun className="w-4 h-4 text-black/40" />
          ) : (
            <Icons.moonStar className="w-4 h-4 text-teal-200" />
          )}
        </motion.div>
      </div>
    </nav>
  );
}
