'use client';
import React, { useState, useRef } from 'react';
import ExperienceCard from './ExperiencesCard';
import { motion, useInView } from 'framer-motion';

const ExperiencesData = [
  {
    id: 1,
    title: 'Schooper',
    description:
      'A web application using AI to fetch course outlines, auto-populate your academic schedule, calculate grades, and manage course information and deadlines seamlessly.',
    image: '/images/Experiences/Schooper.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/hassanalawie/getAround',
    previewUrl:
      'https://www.figma.com/file/WHTROVWO1lRX68bYkY5jYi/Schooper?type=design&node-id=0-1&mode=design&t=f3cF4yfOlrVaheDR-0',
  },
  {
    id: 2,
    title: 'Get Around',
    description:
      'An iOS app designed to provide guidance on wheelchair-accessible entrances at the University of Waterloo.',
    image: '/images/Experiences/getAround.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/hassanalawie/getAround',
    previewUrl:
      'https://www.figma.com/file/mXydxDIb3M75czj8W5S9GD/GetAround?type=design&t=W3geRR2Vx1tqnVIt-0',
  },
  {
    id: 3,
    title: 'Out of the Groupchat',
    description:
      'A user-friendly web application that simplifies event planning by allowing participants to vote and indicate their availability based on your provided options.',
    image: '/images/Experiences/OOTGC.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/MatthewZhang7/OOTGCcore',
    previewUrl:
      'https://www.figma.com/file/sOLxYaAi3CVvV4KMPp4EA6/OOTGC-Website-Flow?type=design&node-id=0-1&t=W3geRR2Vx1tqnVIt-0',
  },
  {
    id: 4,
    title: 'BeatsByZhang',
    description: 'Personal website to showcase and sell beats to artists',
    image: '/images/Experiences/BeatsbyZhang.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/MatthewZhang7/beatsbyzhang',
    previewUrl: 'https://sage-empanada-6c980f.netlify.app/',
  },
];

const ExperiencesSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = newTag => {
    setTag(newTag);
  };

  const filteredExperiences = ExperiencesData.filter(Experience =>
    Experience.tag.includes(tag)
  );

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
        {filteredExperiences.map((Experience, index) => (
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
              gitUrl={Experience.gitUrl}
              previewUrl={Experience.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ExperiencesSection;
