import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const contacts = [
  {
    id: 1,
    link: 'mailto:faisal.saleh127@gmail.com',
    text: 'Email',
    icon: <AlternateEmailOutlinedIcon />,
    bg: 'bg-red-400',
    shaowBg: 'shadow-red-400',
  },
  {
    id: 2,
    link: 'https://wa.me/081283993386',
    text: 'Phone',
    icon: <PhoneEnabledOutlinedIcon />,
    bg: 'bg-green-400',
    shaowBg: 'shadow-green-400',
  },
  {
    id: 3,
    link: 'https://wa.me/081283993386',
    text: 'Linkedln',
    icon: <LinkedInIcon />,

    bg: 'bg-blue-600',
    shaowBg: 'shadow-blue-500',
  },
  {
    id: 4,
    link: 'https://wa.me/081283993386',
    text: 'Github',
    icon: <GitHubIcon />,

    bg: 'bg-black-300',
    shaowBg: 'shadow-black-300 border',
  },
];
