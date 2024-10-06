import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few technologies I have experience working with :',
    items: [
        'TensorFlow',
        'PyTorch',
        'Keras',
        'Scikit-learn',
        'OpenCV',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Deep Learning',
        'Pandas & NumPy',
        'Matplotlib & Seaborn',
        'ReactJS',
        'NextJS'
    ],
    },
    img: '/batman.jpg',
};