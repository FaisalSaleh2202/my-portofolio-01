'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import profileImg from '../public/FaisalSaleh.jpg';
import Image from 'next/image';

const HeroAbout = () => {
  return (
    <div
      className={`${styles.xPaddings} flex mx-auto items-center sm:gap-20 justify-center relative m-6`}
    >
      <div className='flex-col gap-0 relative sm:mb-[200px] mb-[100px] top-0'>
        <h1 className='absoulte sm:text-[122px] text-[64px] font-extrabold text-orange-400 '>
          React
        </h1>
        <h2 className='absolute sm:text-[122px] text-[64px]  font-extrabold text-orange-400  '>
          Developer
        </h2>
      </div>
      <Image
        src={profileImg}
        alt='faisalsaleh'
        className='rounded-full sm:w-1/3 w-1/2'
      />
    </div>
  );
};

export default HeroAbout;
