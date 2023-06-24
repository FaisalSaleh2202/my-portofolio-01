'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import { MaterialUISwitch } from '../utils/swith-dark-mode';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-6 relative`}
  >
    <div className={`flex justify-between px-4`}>
      <img
        src='/letter-f.png'
        className='sm:w-[64px] sm:h-[64px] h-[46px] w-[46px] '
        alt='logo'
      />
      <MaterialUISwitch />
      <img
        src='./menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
      />
    </div>
  </motion.nav>
);

export default Navbar;
