import { Navbar } from '../components';
import { Hero, Contact, MyProjects } from '../sections';

export default function Page() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Contact />
      <MyProjects />
    </div>
  );
}
