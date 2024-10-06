import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what I do',
    skills: [
    {
        id: getId(),
        title: 'full stack development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
            name: 'typeScript',
            icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        ],
    },
    {
        id: getId(),
        title: 'Data Analyst',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Experience in building data-driven models to uncover insights and trends',
        'Experience in developing machine learning pipelines and workflows',
        'Providing data-driven solutions to improve decision-making and business outcomes',
        ],
        softwareSkills: [
        { name: 'tensorflow', icon: 'logos:tensorflow' },
        { name: 'pytorch', icon: 'logos:pytorch' },
        { name: 'pandas', icon: 'logos:pandas' },
        { name: 'numpy', icon: 'logos:numpy' },
        { name: 'matplotlib', icon: 'logos:matplotlib' },
        { name: 'seaborn', icon: 'logos:seaborn' },
        { name: 'openCV', icon: 'logos:opencv' },
        { name: 'python', icon: 'vscode-icons:file-type-python' }, // Python added back to Data Analyst section
        ],
    },
    ],
};
