
interface ISkills {
    caption: string,
    icon: string,
    link: string
}

export const skills: ISkills[] = [
    {
      caption: 'HTML',
      icon: '',
      link: ''
    },
    {
      caption: 'CSS',
      icon: '',
      link: ''
    },
    {
      caption: 'TypeScript',
      icon: '',
      link: 'https://www.typescriptlang.org/'
    },
    {
      caption: 'Python',
      icon: '',
      link: 'https://www.python.org/'
    },
    {
      caption: 'React',
      icon: '',
      link: 'https://react.dev/'
    },
    {
      caption: '.NET',
      icon: '',
      link: 'https://dotnet.microsoft.com/en-us/'
    },
    {
      caption: 'Next.js',
      icon: '',
      link: 'https://nextjs.org/'
    },
      {
      caption: 'Redux',
      icon: '',
      link: 'https://redux.js.org/'
    },
    {
      caption: 'Tailwind',
      icon: '',
      link: 'https://tailwindcss.com/'
    },
    {
      caption: 'Jest',
      icon: '',
      link: 'https://jestjs.io/'
    },
    {
      caption: 'Git',
      icon: '',
      link: 'https://github.com/'
    },
    {
      caption: 'PostgreSQL',
      icon: '',
      link: 'https://www.postgresql.org/'
    },  
    {
      caption: 'Photoshop',
      icon: '',
      link: ''
    },
    {
      caption: 'Figma',
      icon: '',
      link: ''
    },
  
];


import {
  Sun,
  Sparkles,
  MoonStar,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;
export const Icons = {
  sun: Sun,
  sparkles: Sparkles,
  moonStar: MoonStar,
}