import imageMyWork1 from '../public/my-work-1.png';
import imageMyWork2 from '../public/my-work-2.png';

let works = [
  {
    id: 1,
    image: imageMyWork1,
    title: 'React Web App Notes dengan SPA + API, Context dan Hooks',
  },
  {
    id: 2,
    image: imageMyWork2,
    title: 'React Web App Forum Diskusi dengan Redux',
  },
];

function getAllWorks() {
  return works;
}

function getWork(id) {
  const foundedWork = works.find((work) => work.id === id);
  return foundedWork;
}

export { getAllWorks, getWork };
