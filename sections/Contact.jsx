'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { textVariant, staggerContainer } from '../utils/motion';
import { TextHeroHeading } from '@/components/TextHeroHeading';
import { contacts } from '../utils/data-contact.js';

const Contact = () => {
  return (
    <section className={`${styles.xPaddings} mx-6`}>
      <div className={`grid sm:grid-cols-4 grid-cols-2 gap-8`}>
        {contacts.map((contact) => (
          <button
            className={`${contact.bg} ${contact.shaowBg} w-[160px] py-3 rounded-[25px] shadow-md  `}
          >
            {contact.icon} {contact.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Contact;
