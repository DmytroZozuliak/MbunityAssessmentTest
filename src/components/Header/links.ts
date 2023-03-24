import { LinkType } from '../../types/types';

export const LINKS: LinkType[] = [
  {
    name: 'Home',
    nested: null,
  },
  {
    name: 'Features',
    nested: [
      { name: 'Feature-1', nested: null },
      { name: 'Feature-2', nested: null },
    ],
  },
  {
    name: 'Blog',
    nested: null,
  },
  {
    name: 'Shop',
    nested: null,
  },
  {
    name: 'About',
    nested: null,
  },
  {
    name: 'Contact',
    nested: null,
  },
];
