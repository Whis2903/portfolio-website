import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Vishal Mohan Nair.',
    tagline: 'I am a Student',
    description:
    "Hey there! I'm a passionate AI/ML developer specializing in creating intelligent systems with deep learning and machine learning technologies. From predictive analytics to natural language processing, I’m constantly exploring ways to make computers smarter and more efficient. I work with tools like TensorFlow, PyTorch, and Scikit-learn to build AI-driven applications that solve complex problems. But I don't stop there—I also integrate my AI/ML expertise into web development, using React.js, Next.js, and TypeScript to create smart, seamless web applications. My backend skills in Node.js and Express.js ensure that the AI features are supported by robust, scalable APIs, taking every project to the next level.",
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};