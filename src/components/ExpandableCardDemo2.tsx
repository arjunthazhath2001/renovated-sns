"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo2() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[550px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg break-words"
                    >
                      {active.title}
                    </motion.h3>

                   

                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 mb-5"
                    >
                      {active.description}
                    </motion.p>


                     
                    <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-5 py-2 text-sm rounded-full font-bold bg-yellow-500 text-white flex-shrink-0 min-w-[100px] text-center"
                  >
                    {active.ctaText}
                  </motion.a>

                  </div>

                 
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 sm:space-y-3">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-3 sm:gap-4 flex-row items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
              <Image
                  width={1000}
                  height={1000}
                  src={card.src}
                  alt={card.title}
                  className="h-10 w-10 rounded-md sm:h-12 sm:w-12 md:h-16 md:w-16 sm:rounded-lg object-cover object-center"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-[11px] sm:text-sm text-neutral-800 dark:text-neutral-200 text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 text-[9px] sm:text-sm dark:text-neutral-400 text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-2 py-2 sm:px-4 sm:py-2 text-[5px] sm:text-sm rounded-full font-bold transition-colors duration-100 bg-black text-white dark:bg-gray-100 dark:hover:text-black dark:hover:bg-yellow-500 hover:text-black hover:bg-yellow-500  dark:text-black sm:ml-8 sm:mt-4 mt-0 "
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
    {
      description: "Accredited by NAAC-UGC with 'A+' Grade",
      title: (
        <>
          Dr.SNS Rajalakshmi College of <br /> Arts and Sciences
        </>
      ),
      src: "/images/card6.png",
      ctaText: "KNOW MORE",
      ctaLink: "https://drsnsrcas.ac.in/",
      content: () => {
        return (
          <p>
            Dr. SNS Rajalakshmi College of Arts and Science, provides world-class education to learners from all sections of society, ensuring accessibility and academic excellence.
          </p>
        );
      },
    },
    {
      description: "Accredited by NAAC with 'A++' Grade",
      title: "SNS College of Technology",
      src: "/images/card7.png",
      ctaText: "KNOW MORE",
      ctaLink: "https://snsct.org/",
      content: () => {
        return (
          <p>
SNS College of Technology, Coimbatore, is renowned for excellence in teaching, learning, and research in various fields of engineering and technology. 
          </p>
        );
      },
    },
  
    {
      description: "Accredited by NAAC-UGC with 'A' Grade",
      title: "SNS College of Engineering",
      src: "/images/card8.png",
      ctaText: "KNOW MORE",
      ctaLink: "https://snsce.ac.in/",
      content: () => {
        return (
          <p>
     SNS College of Engineering, known for quality education, produces internationally recognized engineers and entrepreneurs with its renowned system.
           </p>
        );
      },
    },
    {
      description: "Aff. to the TN Dr.MGR Medical University",
      title: (
        <>
          SNS College of Pharmacy <br /> and Health Sciences
        </>
      ),
      src: "/images/card9.png",
      ctaText: "KNOW MORE",
      ctaLink: "https://snscphs.org/",
      content: () => {
        return (
          <p>
SNS College of Pharmacy, produces holistic, industry-ready graduates with strong social awareness, adding value to their family, society, and nation.

</p>
        );
      },
    },
    {
      description: "Aff. to the TN Dr MGR Medical University",
      title: (
        <>
          SNS College of Allied <br /> Health Sciences
        </>
      ),
      src: "/images/card10.png",
      ctaText: "KNOW MORE",
      ctaLink: "https://snscahs.org/",
      content: () => {
        return (
          <p>
          SNS College of Allied Health Sciences, provides cutting-edge medical education with a focus on distinguished teaching and learning environments for students.
          </p>
        );
      },
    },
  ];
  