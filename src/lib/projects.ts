import type { NavLink, Project } from '@/types'

// ─── Navigation links ─────────────────────────────────────────────────────────

export const NAV_LINKS: readonly NavLink[] = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Réalisations' },
  { href: '#contact', label: 'Contact', isCtaButton: true },
] as const

// ─── Project data ─────────────────────────────────────────────────────────────

export const PROJECTS: readonly Project[] = [
  // {
  //   id: 'photo',
  //   label: 'Photo',
  //   emoji: '📷',
  //   title: 'Photographie',
  //   description:
  //     "Passionnée par l'image sous toutes ses formes, je pratique la photographie argentique et numérique depuis le début de mon parcours.",
  //   longDescription:
  //     'Ut enim ad minim veniam, chaque cliché est une invitation à ralentir, à observer, à raconter. Des portraits intimes aux reportages dynamiques, la photographie est au cœur de mon expression créative.',
  //   tags: ['Photo argentique', 'Photo numérique', 'Portrait', 'Reportage'],
  //   photos: [
  //     {
  //       id: 'p1',
  //       caption: 'Argentique · 35mm',
  //       bgGradient: 'linear-gradient(135deg,#2a2826,#1a1816)',
  //       rotation: '-2.5deg',
  //     },
  //     {
  //       id: 'p2',
  //       caption: 'Portrait',
  //       bgGradient: 'linear-gradient(135deg,#2f2a26,#1e1816)',
  //       rotation: '2deg',
  //     },
  //     {
  //       id: 'p3',
  //       caption: 'Reportage',
  //       bgGradient: 'linear-gradient(135deg,#26282a,#16181a)',
  //       rotation: '-1deg',
  //     },
  //     {
  //       id: 'p4',
  //       caption: 'Studio',
  //       bgGradient: 'linear-gradient(135deg,#2a2826,#1a1816)',
  //       rotation: '2.5deg',
  //     },
  //     {
  //       id: 'p5',
  //       caption: 'Événement',
  //       bgGradient: 'linear-gradient(135deg,#28282a,#18181a)',
  //       rotation: '-2deg',
  //     },
  //     {
  //       id: 'p6',
  //       caption: 'Nature',
  //       bgGradient: 'linear-gradient(135deg,#2a2826,#181614)',
  //       rotation: '1deg',
  //     },
  //   ],
  // },
  // {
  //   id: 'tennis',
  //   label: 'Tennis',
  //   emoji: '🎾',
  //   title: 'Tennis',
  //   description:
  //     "Gestion complète de la communication digitale d'un club de tennis — de la stratégie éditoriale à la production des visuels.",
  //   longDescription:
  //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Création de contenu engageant pour valoriser les athlètes et fédérer la communauté du club autour d'événements clés.",
  //   tags: ['Instagram', 'LinkedIn', 'Affiches', 'Community Management'],
  //   photos: [
  //     {
  //       id: 't1',
  //       caption: 'Post Instagram',
  //       bgGradient: 'linear-gradient(135deg,#1a3a1a,#0d2a0d)',
  //       rotation: '1.5deg',
  //     },
  //     {
  //       id: 't2',
  //       caption: 'Affiche tournoi',
  //       bgGradient: 'linear-gradient(135deg,#1e3e1e,#0f2a0f)',
  //       rotation: '-2deg',
  //     },
  //     {
  //       id: 't3',
  //       caption: 'Story',
  //       bgGradient: 'linear-gradient(135deg,#1a3a1a,#0d2a0d)',
  //       rotation: '2.5deg',
  //     },
  //     {
  //       id: 't4',
  //       caption: 'Newsletter',
  //       bgGradient: 'linear-gradient(135deg,#1a3a1a,#0d2a0d)',
  //       rotation: '-1deg',
  //     },
  //   ],
  // },
  // {
  //   id: 'socotec',
  //   label: 'Socotec',
  //   emoji: '🏢',
  //   title: 'Socotec Smart Solutions',
  //   description:
  //     "Développement et déploiement de la stratégie de communication digitale pour Socotec Smart Solutions, acteur de l'innovation industrielle.",
  //   longDescription:
  //     "Excepteur sint occaecat cupidatat non proident. Création de contenus B2B percutants, gestion des plateformes LinkedIn, et conception d'infographies pour valoriser l'expertise de la marque.",
  //   tags: ['LinkedIn B2B', 'Infographies', 'Comm. interne', 'Veille stratégique'],
  //   photos: [
  //     {
  //       id: 's1',
  //       caption: 'Campagne LinkedIn',
  //       bgGradient: 'linear-gradient(135deg,#1a2a3a,#0d1a2a)',
  //       rotation: '-1.5deg',
  //     },
  //     {
  //       id: 's2',
  //       caption: 'Infographie',
  //       bgGradient: 'linear-gradient(135deg,#1e2e3e,#0f1e2e)',
  //       rotation: '2deg',
  //     },
  //     {
  //       id: 's3',
  //       caption: 'Newsletter B2B',
  //       bgGradient: 'linear-gradient(135deg,#1a2a3a,#0d1a2a)',
  //       rotation: '-2.5deg',
  //     },
  //     {
  //       id: 's4',
  //       caption: 'Rapport annuel',
  //       bgGradient: 'linear-gradient(135deg,#1a2a3a,#0d1a2a)',
  //       rotation: '1deg',
  //     },
  //   ],
  // },
  {
    id: 'rouen',
    label: 'Rouen Point',
    emoji: '📍',
    title: 'Rouen Point',
    description:
      "Communication pour Rouen Point, marque rouennaise de vêtements éco-responsables brodés localement, portée par Emmanuelle et Juliette, qui célèbre les artistes et l'énergie créative de Rouen.",
    longDescription:
      'Production de visuels percutants et gestion éditoriale pour engager une communauté locale au quotidien.',
    tags: ['Comm. locale', 'Instagram', 'Affiches', 'Événementiel'],
    photos: [
      {
        id: 'r1',
        caption: 'Événement de lancement',
        bgGradient: 'linear-gradient(135deg,#2a1a1a,#1a0d0d)',
        rotation: '2deg',
        link: '/projects/Rpoint/soiree_lancement.png', // Example of a project photo linking to a detailed case study page,
        externalLink: 'https://www.instagram.com/p/DRpenA0iCJL/?img_index=2', // Optional: if the link is external, provide the URL to open on click
        linkType: 'instagram',
      },
      {
        id: 'r2',
        caption: 'Post Instagram',
        bgGradient: 'linear-gradient(135deg,#2e1e1e,#1e0f0f)',
        rotation: '-1.5deg',
        link: '/projects/Rpoint/instagram-post.png', // Example of a project photo linking to a detailed case study page,
        linkType: 'photo',
        externalLink: 'https://www.instagram.com/p/DNiHI00IpmA', // Optional: if the link is external, provide the URL to open on click
      },
      {
        id: 'r3',
        caption: 'Affiche événement',
        bgGradient: 'linear-gradient(135deg,#2a1a1a,#1a0d0d)',
        rotation: '1.5deg',
        link: '/projects/Rpoint/inauguration_insta.png', // Example of a project photo linking to a detailed case study page,
        externalLink: 'https://www.instagram.com/p/DRPw_mmiHxU',
        linkType: 'instagram',
      },
      // {
      //   id: 'r4',
      //   caption: 'Story Rouen',
      //   bgGradient: 'linear-gradient(135deg,#2a1a1a,#1a0d0d)',
      //   rotation: '-3deg',
      // },
    ],
  },
  // {
  //   id: 'fictif',
  //   label: 'Fictif',
  //   emoji: '★',
  //   title: 'Projet Fictif',
  //   description:
  //     "Exercice créatif complet — concevoir from scratch l'identité visuelle et la stratégie de communication d'une marque fictive.",
  //   longDescription:
  //     'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. De la définition du concept créatif à la production des déclinaisons visuelles — un projet qui démontre la maîtrise du processus global.',
  //   tags: ['Concept créatif', 'Identité visuelle', 'Stratégie 360°', 'Mock-ups'],
  //   photos: [
  //     {
  //       id: 'f1',
  //       caption: 'Brand concept',
  //       bgGradient: 'linear-gradient(135deg,#2a2a1a,#1a1a0d)',
  //       rotation: '-2deg',
  //     },
  //     {
  //       id: 'f2',
  //       caption: 'Identité visuelle',
  //       bgGradient: 'linear-gradient(135deg,#2a2a1a,#1a1a0d)',
  //       rotation: '1.5deg',
  //     },
  //     {
  //       id: 'f3',
  //       caption: 'Mock-up print',
  //       bgGradient: 'linear-gradient(135deg,#2a2a1a,#1a1a0d)',
  //       rotation: '-1deg',
  //     },
  //     {
  //       id: 'f4',
  //       caption: 'Social media',
  //       bgGradient: 'linear-gradient(135deg,#2a2a1a,#1a1a0d)',
  //       rotation: '2.5deg',
  //     },
  //   ],
  // },
] as const
