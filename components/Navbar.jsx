'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-6 relative`}
  >
    <div className={`${styles.innerWidth} flex justify-between`}>
      <img src='/letter-f.png' className='w-[64px] h-[64px] ' alt='logo' />
      <img
        src='./menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
      />
    </div>
  </motion.nav>
);

export default Navbar;
