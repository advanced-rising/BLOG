export type WorkTile = {
  title: string;
  description: string;
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
    image: {
      src: '/static/images/czerwin.jpg',
      width: 600,
      height: 770,
    },
  },
  {
    title: 'Aphex Field',
    description: 'I helped build',
    image: {
      src: '/static/images/dim.jpg',
      width: 600,
      height: 554,
    },
  },
  {
    title: 'Aphex Planner',
    description: 'I helped maintain',
    image: {
      src: '/static/images/moritz.jpg',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'Aphex Publication',
    description: 'I am currently building',
    image: {
      src: '/static/images/pawel.jpg',
      width: 600,
      height: 717,
    },
  },
];
