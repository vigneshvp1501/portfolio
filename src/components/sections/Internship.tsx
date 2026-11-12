import React from "react";
import { motion } from "framer-motion";

import { internships } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";
import { TInternship } from "../../types";

const InternshipCard: React.FC<{ index: number } & TInternship> = ({
  index,
  title,
  companyName,
  date,
  points,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-[#1d1836] p-6 rounded-2xl w-full border border-white/5 shadow-card"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div>
          <h3 className="text-white text-[20px] font-bold">{title}</h3>
          <p className="text-secondary text-[14px] font-semibold">{companyName}</p>
        </div>
        <span className="text-[#915EFF] text-[13px] font-medium">{date}</span>
      </div>

      <ul className="mt-4 list-disc space-y-2 ml-5">
        {points.map((point, pIdx) => (
          <li
            key={`internship-point-${pIdx}`}
            className="text-white-100 text-[13px] sm:text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Internship = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.internship} />

      {internships.length > 0 ? (
        <div className="mt-12 flex flex-col gap-6">
          {internships.map((internship, index) => (
            <InternshipCard
              key={`internship-${index}`}
              index={index}
              {...internship}
            />
          ))}
        </div>
      ) : (
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="mt-10 flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-tertiary/40 py-16 px-6 text-center backdrop-blur-sm"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#915EFF]/30 bg-[#915EFF]/10 text-[#915EFF] mb-4">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-[20px] font-bold text-white">Internship Experience</h3>
          <p className="mt-2 text-secondary text-[14px] max-w-md">
            Details will be updated here soon.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Internship, "internship");
