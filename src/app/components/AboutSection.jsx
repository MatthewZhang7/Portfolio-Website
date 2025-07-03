'use client';
import React, { useTransition, useState } from 'react';

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-48">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-center font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            Hey! I'm Matthew and I'm a Systems Design Engineering student at the
            University of Waterloo. I'm also an aspiring software engineer who
            loves building cool things and exploring new technologies. I've
            previously interned at Empire Life, University Health Network,
            Purolator, AlertDriving, Opentext, and TrustiiN.
          </p>
          <br></br>
          <p className="text-base lg:text-lg">
            I grew up in Toronto, Canada and started programming when I was 14
            years old. Ever since then, I've been trying to make cool projects
            that I can impress my friends with. Recently, I've been exploring
            AI, LLMs, and machine learning.
          </p>
          <br></br>
          <p className="text-base lg:text-lg">
            During my free time, you can find me at the gym (trying to be a
            personal trainer), making music so Drake might notice me, going to
            see my favorite artists at concerts, or trying new foods and
            recipes.
          </p>
          <br></br>
          <p className="text-base lg:text-lg">
            I’m currently exploring 2025 new grad opportunities related to
            Software Development (Front-end/Full-stack). Please feel free to
            reach out, I'm always up for a chat and connecting with new people!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
