import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few technologies I have experience working with :',
    items: [
        'NextJs',
        'TailwindCSS',
        'ExpressJs',
        'Unit Testing',
        'TypeScript',
        'CSS Animations',
        'Tensorflow',
        'OpenCv',
        'ReactJs',
        'Solidity',
    ],
    },
    img: '/batman.jpg',
};