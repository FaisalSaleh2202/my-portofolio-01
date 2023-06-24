'use client';

import { useState } from 'react';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, navVariants } from '../utils/motion';
import { MaterialUISwitch } from '../utils/swith-dark-mode';
import { TextHeroHeading } from '../components/TextHeroHeading';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang='en'>
      <head></head>
      <body suppressHydrationWarning={true} className={inter.className}>
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
        {/* <AnimatePresence> */}
        {isOpen && (
          <motion.div
            key='a box'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            //Specified Exit animation
            exit={{ opacity: 0, x: -50 }}
            className={` ${styles.xPaddings} absolute z-[999] `}
          >
            <div className='bg-black h-screen sm:w-[500%] w-[250%]'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>My Works</li>
                <li>Contact</li>
              </ul>
            </div>
          </motion.div>
        )}
        {/* </AnimatePresence> */}

        {children}
      </body>
    </html>
  );
}
