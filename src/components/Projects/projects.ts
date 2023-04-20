const projects = [
  {
    id: 1,
    url: 'portfolio',
    img: '/projects/portfolio/thumb.png',
    title: 'Portfolio',
    type: "Website",
    icon: "/projects/portfolio/home.webp",
    github: '',
    web: '',
    description: 'Meu portfólio criado com o objetivo de mostrar meus projetos ao longo da minha carreira.',
    tags: [
      {name: "Next JS", icon: '/skills/next-js.svg' },
      {name: "TypeScript", icon: '/skills/typescript.svg' },
      {name: "Styled Components", icon: '/skills/styled-components.svg' },
      {name: "React", icon: '/skills/react.svg' },
    ],
    print: [
      {name: 'Thumb', img:'/projects/portfolio/thumb.png'},
      {name: 'About', img:'/projects/portfolio/about.png'},
      {name: 'Skills', img:'/projects/portfolio/skills.png'},
      {name: 'Projects', img:'/projects/portfolio/projects.png'},
      {name: 'Contact', img:'/projects/portfolio/contact.png'},

    ],
    video: ''
  },
  
  {
    id: 3,
    url: 'playstation',
    img: '/projects/playstation/ps1.png',
    title: 'PlayStation',
    type: "Website",
    icon: "/projects/playstation/icon.svg",
    github: 'https://github.com/felipejohnsonn/playstation-website',
    web: 'https://playstation-website.vercel.app/',
    description: 'E-commerce Website da PlayStation para vendas de controles.',
    tags: [
      {name: "Html", icon: '/skills/html.svg' },
      {name: "Css", icon: '/skills/css.svg' },
      {name: "JavaScript", icon: '/skills/javascript.svg' },
    ],
    print: [
      {name: 'Home', img:'/projects/playstation/ps1.png'},
      {name: 'Home-2', img:'/projects/playstation/ps2.png'},
      {name: 'About', img:'/projects/playstation/ps3.png'},
      {name: 'Product', img:'/projects/playstation/ps4.png'},
      {name: 'Product-2', img:'/projects/playstation/ps5.png'},      
    ],
    video: ''
  },
  {
    id: 4,
    url: 'pokedex',
    img: '/projects/supermario/mario.png',
    title: 'Super Mario',
    type: "Website",
    icon: "/projects/supermario/super-mario.svg",
    github: 'https://github.com/felipejohnsonn/super-mario',
    web: 'https://super-mario-one.vercel.app/',
    description: 'Simples jogo do Super Mario.',
    tags: [
      {name: "Html", icon: '/skills/html.svg' },
      {name: "JavaScript", icon: '/skills/javascript.svg' },
      {name: "css", icon: '/skills/css.svg' },
    ],
    print: [
      {name: 'Home', img:'/projects/supermario/mario.png'},

    ],
    video: ''
  },
]

export default projects