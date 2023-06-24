import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

export const navigations = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: 3,
    title: 'My Works',
    link: '/my-works',
    icon: <BeenhereOutlinedIcon />,
  },
  {
    id: 4,
    title: 'Contacts',
    link: '/contacts',
    icon: <ConnectWithoutContactOutlinedIcon />,
  },
];
