"use client";
import React from "react";


export function SparklesPreview() {
  return (
    <div className=" w-full bg-transparent flex flex-col pt-24 items-center justify-center overflow-hidden rounded-md">
      <h1 className="sm:text-3xl md:text-3xl text-4xl lg:text-6xl font-extrabold text-center text-black dark:text-white relative z-20">
        OUR
      </h1>
      <h1 className="sm:text-8xl md:text-8xl text-6xl lg:text-9xl font-extrabold text-center text-black dark:text-white relative z-20">
        ACADEMICS
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-600 dark:via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-600 dark:via-orange-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 dark:via-yellow-400 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 dark:via-yellow-400 to-transparent h-px w-1/4" />

      </div>
    </div>
  );
}
