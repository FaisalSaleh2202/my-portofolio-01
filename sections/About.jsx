'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, staggerContainer } from '../utils/motion';
import { TextHeroHeading } from '../components/TextHeroHeading';
import { contacts } from '../utils/data-contact.js';
import { aboutme, experience } from '@/utils/data-contact';

const About = () => {
  return (
    <div className={`${styles.xPaddings} m-5`}>
      <div className='my-8'>
        <hr className='my-8' />
        <div className='grid sm:grid-cols-2 gap-3 '>
          <h3 className=''>About me</h3>
          <p>
            Saya Faisal Saleh lulusan Teknik Informatika dari Universitas
            Indraprasta PGRI. ReactJs Developer bersertifikat Dicoding Indonesia
            dan Kampus Merdeka dengan 2 tahun pengalaman dalam ReactJs, NextJs,
            React Hooks, React Router, Javascript, Tailwind CSS, CSS dalam
            mengembangkan Front-End Web yang responsif, reusable, performa yang
            baik, memiliki aksesibilitas yang baik, dan mudah di-maintenance
          </p>
        </div>
        <hr className='my-8' />
      </div>
    </div>
  );
};

export default About;
