import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "My Blogs",
  projects: [
    {
      id: getId(),
      name: '',
      description: '',
      tasks:'',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    },
    
  ],
};

export default featuredProjectsSection;
