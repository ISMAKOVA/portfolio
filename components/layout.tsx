import React, { ReactNode } from "react";
import Header from "@/components/header";

interface Props {
  children: ReactNode;
}


export default function Layout({ children }: Props) {
  return (
    <div className="relative flex flex-col min-h-screen bg-neutral-50 dark:bg-black/30 font-nunito">
      <div className="box-border px-28">
        <Header />
        <main className="flex-col items-center dark:text-white static mt-16 md:mt-28">
            {children}
        </main> 
      </div>
      
    </div>
  );
}
