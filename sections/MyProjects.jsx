'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, staggerContainer, cardVariants } from '../utils/motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAllWorks } from '../utils/data-my-works.js';
import Link from 'next/link';

const MyProjects = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    setWorks(getAllWorks());
  }, [works]);

  return (
    <section className={`${styles.xPaddings}`}>
      <div className={`${styles.innerWidth} sm:mx-6 my-12`}>
        <h1 className='text-[28px] font-bold my-6 mx-6'>My Works</h1>
        <div
          className={`${styles.innerWidth} grid sm:grid-cols-2 grid-cols-1 gap-4`}
        >
          {works.map((work) => (
            <div key={work.id} className='relative cursor-pointer px-4'>
              <Image
                src={work.image}
                alt={work.title}
                className='h-[200px] w-fit rounded-md'
              />
              <motion.div
                variants={cardVariants}
                initial='hidden'
                whileHover='show'
                className='absolute bottom-0 mx-4 w-auto h-[200px] left-0 text-white bg-slate-900 bg-opacity-50 flex flex-col items-center'
              >
                <p className='pt-12 text-[22px] text-center font-bold drop-shadow-md px-2'>
                  {work.title}
                </p>
                <Link href={`/${work.id}`}>
                  <button className='align-center pt-2'>see detail</button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
