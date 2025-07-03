'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title:
      'Machine Learning in Sports Betting: Money Line Predictions for NBA Games',
    description:
      'This project aims to predict the outcome of an NBA game using 5 different dataframes and 4 different models. Feel free to navigate through our project to see our process :)',
    image: '/images/projects/MachineLearning.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/parminpatel28/MSCI-446-Project',
    previewUrl: 'https://github.com/parminpatel28/MSCI-446-Project',
  },
  {
    id: 2,
    title: 'Schooper',
    description:
      'A web application using AI to fetch course outlines, auto-populate your academic schedule, calculate grades, and manage course information and deadlines seamlessly.',
    image: '/images/projects/Schooper.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/hassanalawie/getAround',
    previewUrl:
      'https://www.figma.com/file/WHTROVWO1lRX68bYkY5jYi/Schooper?type=design&node-id=0-1&mode=design&t=f3cF4yfOlrVaheDR-0',
  },
  {
    id: 3,
    title: 'Get Around',
    description:
      'An iOS app designed to provide guidance on wheelchair-accessible entrances at the University of Waterloo.',
    image: '/images/projects/getAround.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/hassanalawie/getAround',
    previewUrl:
      'https://www.figma.com/file/mXydxDIb3M75czj8W5S9GD/GetAround?type=design&t=W3geRR2Vx1tqnVIt-0',
  },
  {
    id: 4,
    title: 'Out of the Groupchat',
    description:
      'A user-friendly web application that simplifies event planning by allowing participants to vote and indicate their availability based on your provided options.',
    image: '/images/projects/OOTGC.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/MatthewZhang7/OOTGCcore',
    previewUrl:
      'https://www.figma.com/file/sOLxYaAi3CVvV4KMPp4EA6/OOTGC-Website-Flow?type=design&node-id=0-1&t=W3geRR2Vx1tqnVIt-0',
  },
  {
    id: 5,
    title: 'BeatsByZhang',
    description: 'Personal website to showcase and sell beats to artists',
    image: '/images/projects/BeatsbyZhang.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/MatthewZhang7/beatsbyzhang',
    previewUrl: 'https://sage-empanada-6c980f.netlify.app/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = newTag => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(project =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
