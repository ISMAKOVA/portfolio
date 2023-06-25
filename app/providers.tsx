"use client"
import React, { ReactNode } from 'react';
import { ThemeProvider } from "next-themes";

interface Props{
    children: ReactNode
}

export default function Providers({children}: Props) {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  );
  
}
