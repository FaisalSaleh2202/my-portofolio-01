'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TextHeroHeading = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-bold sm:text-[124px] text-[42px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = () => <h2>Title Text</h2>;
