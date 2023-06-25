'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { textVariant, staggerContainer } from '../../utils/motion';
import { Navbar, TextHeroHeading } from '@/components';
import { About, HeroAbout } from '@/sections';

const page = () => {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <About />
    </>
  );
};

export default page;
