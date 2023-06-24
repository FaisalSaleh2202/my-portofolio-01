'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, staggerContainer, cardVariants } from '../utils/motion';
import { TextHeroHeading } from '@/components/TextHeroHeading';
import { contacts } from '../utils/data-contact.js';
import { myWorks } from '../utils/data-my-works.js';
import Image from 'next/image';

const MyProjects = () => {
  return (
    <section className={`${styles.xPaddings}`}>
      <div className={`${styles.innerWidth} sm:mx-6 mx-1 my-12`}>
        <h1 className='text-[28px] font-bold my-6'>My Works</h1>
        <div
          className={`${styles.innerWidth} grid sm:grid-cols-2 grid-cols-1 gap-4`}
        >
          {myWorks.map((myWork) => (
            <div class='relative cursor-pointer'>
              <Image src={myWork.image} className='h-[200px] w-fit' />
              <motion.div
                variants={cardVariants}
                initial='hidden'
                whileHover='show'
                class='absolute bottom-0  w-full h-[200px] left-0 text-white bg-slate-900 bg-opacity-50 flex flex-col items-center'
              >
                <p className='pt-12 text-[22px] text-center font-bold drop-shadow-md px-2'>
                  {myWork.title}
                </p>
                <button className='align-center pt-2'>see detail</button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
