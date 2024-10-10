import React from 'react';
import {ExpandableCardDemo1 } from './ExpandableCardDemo1';
import { ExpandableCardDemo2 } from './ExpandableCardDemo2';

export default function Institutions() {
  return (
    <div className='bg-transparent w-full min-h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-8 relative'>
      {/* Title Section */}
      <div className="w-full text-center">
        <span className="sm:text-5xl md:text-6xl text-4xl lg:text-7xl font-extrabold text-black dark:text-white">Our <span className='text-yellow-400'>Institutions</span> </span>
      </div>
      
      {/* Right Column for the Expandable Cards */}
      <div className="w-full max-w-7xl px-4 md:px-0 grid sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {/* First column of 5 cards */}
        <div className="flex flex-col sm:gap-4">
          <ExpandableCardDemo1/>
          
        </div>
        {/* Second column of 5 cards */}
        <div className="flex flex-col sm:gap-4">
          <ExpandableCardDemo2/>         
        </div>
      </div>
    </div>
  );
}
