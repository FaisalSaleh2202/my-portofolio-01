'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, staggerContainer } from '../utils/motion';
import { TextHeroHeading } from '../components/TextHeroHeading';

const Hero = () => {
  return (
    <section className={`${styles.paddings}  `}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto  ${styles.xPaddings} flex-col text-justify`}
      >
        <TextHeroHeading title='PORTOFOLIO' textStyles='text-center' />
        <div className='mx-auto flex-col justify-center items-center relative'>
          <motion.h1
            variants={textVariant(1.3)}
            className={`sm:text-[38px] text-[24px] font-extrabold`}
          >
            <span className='text-yellow-300'> Hi... </span> Saya Faisal Saleh.
          </motion.h1>
          <motion.p
            variants={textVariant(1.6)}
            className={`mx-auto sm:text-[22px] text-[16px] my-3 leading-10`}
          >
            Lulusan Teknik Informatika dari Universitas Indraprasta PGRI 🎓.
            <span className='text-pink-600'> React</span> Developer
            bersertifikat Dicoding Indonesia dan Kampus Merdeka
          </motion.p>
          <motion.p
            variants={textVariant(1.9)}
            className={`mx-auto sm:text-[22px] text-[16px] my-3 text-white-500 leading-10`}
          >
            dengan 2 tahun pengalaman dalam ReactJs, NextJs, React Hooks, React
            Router, Javascript, Tailwind CSS, CSS
          </motion.p>
          <motion.p
            variants={textVariant(2.1)}
            className={`mx-auto sm:text-[22px] text-[16px] my-3 leading-10`}
          >
            dalam mengembangkan{' '}
            <span className='text-blue-400'>Front-End Web 🌐 </span> Front-End
            Web yang responsif, reusable, performa yang baik, memiliki
            aksesibilitas yang baik, dan mudah di-maintenance
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
