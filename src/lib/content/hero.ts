import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Vishal Mohan Nair.',
    tagline: 'I am Batman',
    description:
    "Hey there! I'm a passionate full-stack developer specializing in creating stunning web applications using React.js, Next.js, TypeScript, and TailwindCSS, ensuring not just functionality but also a delightful user experience. But that's not all—I also dive into the backend world, leveraging Node.js and Express.js to build robust APIs. What sets me apart? My love for AI/ML! From predictive analytics to natural language processing, I'm constantly exploring ways to make computers smarter and integrate AI superpowers into my projects, taking them to the next level. ",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};