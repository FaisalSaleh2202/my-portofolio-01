'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, staggerContainer } from '../utils/motion';
import { TextHeroHeading } from '@/components/TextHeroHeading';

const Hero = () => {
  return (
    <section className={`${styles.paddings} relative z-10 `}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto  ${styles.xPaddings} flex-col text-justify`}
      >
        <TextHeroHeading title='PORTOFOLIO' textStyles='text-center' />
        <div className='mx-auto flex-col justify-center items-center relative z-10'>
          <motion.h1
            variants={textVariant(1.3)}
            className={`sm:text-[38px] text-[24px] font-extrabold`}
          >
            <span className='text-pink-800'> Hi... </span> Saya Faisal Saleh.
          </motion.h1>
          <motion.p
            variants={textVariant(1.6)}
            className={`mx-auto sm:text-[22px] text-[16px] my-3 leading-10`}
          >
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure,
            distinctio molestiae numquam natus officia asperiores veritatis?
          </motion.p>
          <motion.p
            variants={textVariant(1.9)}
            className={`mx-auto sm:text-[22px] text-[16px] my-3 text-yellow-500 leading-10`}
          >
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
          <motion.p
            variants={textVariant(2.1)}
            className={`mx-auto sm:text-[22px] text-[16px] my-3 leading-10`}
          >
            distinctio molestiae numquam natus officia asperiores veritatis?
            Asperiores, aspernatur fugiat officiis{' '}
            <span className='text-green-500'>
              sit? Quod dolorem porro expedita?{' '}
            </span>{' '}
            libero eum molestias nemo
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
