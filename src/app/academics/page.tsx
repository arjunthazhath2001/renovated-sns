import Institutions from '@/components/Institutions'
import { ProgrammesOffered } from '@/components/ProgrammesOffered'
import { SparklesPreview } from '@/components/SparklesPreview'
import React from 'react'

export default function AcademicsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center">       
          <SparklesPreview/>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          
          <ProgrammesOffered/>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <Institutions/>
        </div>
      </section>

      {/* Section 4 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Section 4: SPINE
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Meet our world-class faculty dedicated to student success.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Section 5: Our Facilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Experience a vibrant and inclusive campus life.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Section 6: Our Tech
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Discover global programs that expand your horizons.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Section 7: Our Faculty
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Learn how our alumni are making a difference globally.
          </p>
        </div>
      </section>

      
    </div>
  )
}
