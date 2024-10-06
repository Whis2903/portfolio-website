import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "My Blogs",
  projects: [
    {
      id: getId(),
      name: 'The Impact of Hackathons on Learning: A Personal Reflection',
      description: 'Explore the excitement of hackathons in our latest blog, where innovation meets collaboration! Discover tips for success, the thrill of coding, and how these events foster creativity and community.',
      tasks:'',
      url: 'https://medium.com/@vishalmadridrox/the-impact-of-hackathons-on-learning-a-personal-reflection-b5295735c3e1',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'Hackahton'],
    },
    
  ],
};

export default featuredProjectsSection;
