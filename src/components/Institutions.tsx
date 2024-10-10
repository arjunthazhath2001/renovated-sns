import React from 'react';
import {ExpandableCardDemo1 } from './ExpandableCardDemo1';
import { ExpandableCardDemo2 } from './ExpandableCardDemo2';

export default function Institutions() {
  return (
    <div className='bg-transparent w-full min-h-screen flex flex-col items-center justify-between relative mx-auto px-4'>
      {/* Left Column for the Title */}
      <div className="flex-[0.3] flex justify-center items-center">
        <span className="sm:text-5xl md:text-6xl text-4xl lg:text-7xl font-extrabold text-black dark:text-white">Our <span className='text-orange-400'>Institutions</span> </span>
      </div>
      
      {/* Right Column for the Expandable Cards */}
      <div className="flex-[0.7] grid grid-cols-2 gap-4">
        {/* First column of 5 cards */}
        <div className="flex flex-col gap-4">
          <ExpandableCardDemo1/>
          
        </div>
        {/* Second column of 5 cards */}
        <div className="flex flex-col gap-4">
          <ExpandableCardDemo2/>         
        </div>
      </div>
    </div>
  );
}
