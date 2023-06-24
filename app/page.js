import { Navbar } from '../components';
import { Hero, Contact, MyProjects } from '../sections';

export default function Page() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Contact />
      <MyProjects />
    </div>
  );
}
