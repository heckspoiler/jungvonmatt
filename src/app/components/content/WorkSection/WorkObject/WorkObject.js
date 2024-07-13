export const workObject = [
  {
    title: 'Schwarz Architekten AG',
    url: 'https://www.schwarz-architekten.com/',
    technologies: ['Next.js', 'CSS Modules', 'Prismic CMS', 'Zustand'],
    description: 'New Website for an Architecture Firm based in Zurich',
    imageUrl: '/assets/img/projects/schwarz-architekten.png',
    key: 'a',
  },
  {
    title: 'Kustplanet',
    url: 'https://www.kunstplanet.ch/de/',
    technologies: ['Vanilla JS', 'CSS Modules', 'Prismic CMS', 'Three.js'],
    description: 'Website for an Art Residency in Valais, Switzerland',
    imageUrl: '/assets/img/projects/kunstplanet.png',
    key: 'b',
  },
  {
    title: 'IMDSG 2024',
    url: 'https://www.imdsg.ch/',
    technologies: ['Vanilla JS', 'CSS Modules', 'Prismic CMS', 'Three.js'],
    description: 'Website for the Interactive Media Design Days in St. Gallen',
    imageUrl: '/assets/img/projects/imdsg.png',
    key: 'c',
  },

  {
    title: 'Ozelot010 - Exxodus',
    url: 'https://exxodus.ozelot.ltd/',
    technologies: ['Vanilla JS', 'CSS', 'HTML'],
    description: 'Release Website for Ozelot010 by Manuel Fischer',
    imageUrl: '/assets/img/projects/exxodus.png',
    key: 'd',
  },
  {
    title: 'Soli for Palestine, Sudan and Congo',
    url: 'https://soli.ozelot.ltd/',
    technologies: ['Vanilla JS', 'CSS', 'HTML', 'Three.js'],
    description: 'Website for a Fundraiser',
    imageUrl: '/assets/img/projects/soli.png',
    key: 'e',
  },
  {
    title: 'Old Portfolio',
    url: 'https://www.carlothedom.digital/#about',
    technologies: ['Vanilla JS', 'CSS', 'HTML', 'GSAP'],
    description: 'Check out my old portfolio for more works!',
    imageUrl: '/assets/img/projects/dom.png',
    key: 'f',
  },
].map((project) => ({
  ...project,
  altText: `Image of Project ${project.title}`,
}));
