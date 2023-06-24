'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import { MaterialUISwitch } from '../utils/swith-dark-mode';
import Link from 'next/link';
import { navigations } from '../utils/data-nav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              'X'
            ) : (
              <img
                src='./menu.svg'
                alt='menu'
                className='w-[24px] h-[24px] object-contain'
              />
            )}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='a box'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            //Specified Exit animation
            exit={{ opacity: 0, x: -50 }}
            className={` ${styles.xPaddings} absolute z-[999]`}
          >
            <div className='bg-black h-screen sm:w-[250%] w-[175%]'>
              <ul className='flex flex-col px-auto'>
                {navigations.map((navigation) => (
                  <Link
                    className='my-3 flex  gap-5'
                    key={navigation.id}
                    href={navigation.link}
                  >
                    {navigation.icon} {navigation.title}
                  </Link>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
