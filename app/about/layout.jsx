import '../../styles/globals.css';
import { Inter } from 'next/font/google';

import styles from '../../styles';

const inter = Inter({ subsets: ['latin'] });

export default function AboutLayout({ children }) {
  return <div>{children}</div>;
}
