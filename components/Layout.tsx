import React, { ReactNode } from "react";
import Header from "@/components/Header";

interface Props {
  children: ReactNode;
}


export default function Layout({ children }: Props) {
  return (
    <div className="relative flex min-h-screen w-screen flex-col bg-neutral-50 dark:bg-black/30 font-nunito">
        <Header />
        <main className="mx-auto w-full max-w-screen-7xl flex-col items-center p-16 md:p-28 dark:text-white">
            {children}
        </main>  
    </div>
  );
}