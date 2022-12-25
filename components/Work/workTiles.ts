export type WorkTile = {
  title: string;
  description: string;
  projects: string
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    title: `what I've been up to`,
    description: 'here is',
    projects: 'projects',
    image: {
      src: '/static/images/czerwin.jpg',
      width: 600,
      height: 770,
    },
  },
  {
    title: 'Aphex Field',
    description: 'I helped build',
    projects: 'projects',
    image: {
      src: '/static/images/dim.jpg',
      width: 600,
      height: 554,
    },
  },
  {
    title: 'Aphex Planner',
    description: 'I helped maintain',
    projects: 'projects',
    image: {
      src: '/static/images/moritz.jpg',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'Aphex Publication',
    description: 'I am currently building',
    projects: 'projects',
    image: {
      src: '/static/images/pawel.jpg',
      width: 600,
      height: 717,
    },
  },
];
