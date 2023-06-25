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

export const aboutme = [
  {
    id: 1,
    location: 'Indonesia',
    website: 'https://my-portofolio-01-git-master-faisalsaleh2202.vercel.app/',
    email: 'faisal.saleh127@gmail.com',
  },
];

export const experience = [
  {
    id: 1,
    company: 'PT Tata Kelola Dokumen',
    date: 'Jan 2022 - Okt 2022 · 10 bln',
    role: 'Front-Web Developer',
    jobdesk: [
      'Mengembangkan aplikasi web di sisi Front-End menggunakan ReactJs',
      'Memanfaatkan API dan menampilkan data yang dinamis pada aplikasi yang dibuat',
    ],
  },
  {
    id: 2,
    company:
      'Program Magang Bersertifikat Merdeka Belajar Kampus Merdeka pada PT Petrokimia Gresik',
    date: '23 Agu 2021 - 21 Jan 2022',
    role: 'Front-Web Developer',
    jobdesk: [
      'Hasil akhir dari program magang. Membuat system monitoring laporan kerja menggunakan Stack MERN (Mongodb ExpressJs ReactJs NodeJs). System yang berfungsi untuk monitoring laporan kerja oleh vendor untuk pengawasan proyek, laporan yang diserahkan berbentuk PDF dan Excel. Laporan yang dikirm sesuai dengan due date proyek yang dibagi menjadi tiga laporan yaitu, laporan harian, laporan mingguan, dan bulanan. Kemudia laporan tersebut direview oleh staf untuk diserahkan hasil rekap review kepada kepala unit kerja',
    ],
  },
];
