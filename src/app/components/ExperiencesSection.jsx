'use client';
import React, { useState, useRef } from 'react';
import ExperienceCard from './ExperiencesCard';
import { motion, useInView } from 'framer-motion';

const ExperiencesData = [
  {
    id: 1,
    title: 'Empire Life',
    description: 'May 2024 - August 2024: Software Developer Intern',
    image: '/images/work/empirelife.png',
  },
  {
    id: 2,
    title: 'University Health Network',
    description: 'Sep 2023 - Dec 2023: Frontend Developer Intern',
    image: '/images/work/uhn.jpg',
  },
  {
    id: 3,
    title: 'Purolator',
    description: 'Jan 2023 - April 2023: Frontend Developer Intern',
    image: '/images/work/purolator.png',
  },
  {
    id: 4,
    title: 'AlertDriving',
    description: 'May 2022 - May 2022: Software Engineer Intern',
    image: '/images/work/alertdriving.jpg',
  },
  {
    id: 5,
    title: 'OpenText',
    description:
      'Sep 2021 - Dec 2021: Software Quality Assurance Specialist Intern',
    image: '/images/work/opentext.png',
  },
  {
    id: 6,
    title: 'TRUSTiiN',
    description:
      'Jan 2021 - April 2021: Junior Test Automation Developer Intern',
    image: '/images/work/trustiin.png',
  },
];

const ExperiencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Experiences">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experiences
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ExperiencesData.map((Experience, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ExperienceCard
              key={Experience.id}
              title={Experience.title}
              description={Experience.description}
              imgUrl={Experience.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ExperiencesSection;
