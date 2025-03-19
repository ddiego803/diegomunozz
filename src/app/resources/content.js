import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Diego",
  lastName: "Muñoz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desarrollador Full-Stack",
  avatar: "/favicon.ico",
  //location: "España/Valencia", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Ingles"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
//  display: true,
//  title: <>Subscribe to {person.firstName}'s Newsletter</>,
//  description: (
//   <>
//      I occasionally write about design, technology, and share thoughts on the intersection of
//      creativity and engineering.
//    </>
//  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dieegomunozz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/diego-munozz/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/diegoodev_",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:diegomunozzmunoz@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Desarrollador FullStack</>,
  subline: (
    <>
      Soy Diego, desarrollador de <InlineCode>Doce UI</InlineCode>, y varios
      <br /> proyectos mas. Actualmente estoy buscando trabajo.
    </>
  ),
};

const about = {
  label: "About",
  title: "Sobre Mi",
  description: `Soy ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Diego es un desarrollador Full Stack de España, Valencia. Actualmente busca trabajo. Ahora mismo esta desarrollando un software llamado Doce UI, dodne podras encontrar componentes de React unicos, profesionales y perfectos.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Trabajo",
    experiences: [
      {
        company: "Doce UI",
        timeframe: "2024 - Present",
        role: "Fundador y Desarrollador",
        achievements: [
          <>
            Libreria de componentes de React con css, profesionales, unicos y perfectos. Tiene actualmente unos 70 Componentes.
          </>,
          <>
            Doce UI, es de codigo abierto, o lo sera muy pronto.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          //{
          // src: "/images/projects/project-01/cover-01.jpg",
          //  alt: "Once UI Project",
          //  width: 16,
          //  height: 9,
          //},
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudio",
    institutions: [
      {
        name: "IES Serra Perenxisa",
        description: <>Acabe la ESO alli.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades",
    skills: [
      {
        title: "Figma, Next.JS, React, Boostrap, Tailwind, GitHub, TypeScript, JavaScript, Git, Canva, Astro",
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: `No hay posts! Vuelve mas tarde.`,
  description: `Aqui saldran los posts que suba Diego Muñoz`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
