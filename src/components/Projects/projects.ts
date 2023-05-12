const projects = [
  {
    id: 1,
    url: 'portfolio',
    img: '/projects/portfolio/thumb.png',
    title: 'Portfolio',
    type: "Website portfolio",
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
    type: "Website ecommerce",
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
    url: 'supermario',
    img: '/projects/supermario/mario.png',
    title: 'Super Mario',
    type: "Website Game",
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
  {
    id: 5,
    url: 'spotify clone',
    img: 'https://camo.githubusercontent.com/e07b99e46c3912152be50590a5bf921e09d07c269f098b489282d953fec22b78/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313038383131323534343930353936393733362f313039393131343439313334373735303931322f696d6167652e706e673f77696474683d31303538266865696768743d353935',
    title: 'Spotify Clone',
    type: "Website Clone",
    icon: "/projects/spotifyclone/spotify-2.svg",
    github: 'https://github.com/felipejohnsonn/SpotifyClone',
    web: 'https://spotify-clonee-pi.vercel.app/',
    description: 'apenas um clone da pagina web do Spotify',
    tags: [
      {name: "Html", icon: '/skills/html.svg' },
      {name: "JavaScript", icon: '/skills/javascript.svg' },
      {name: "css", icon: '/skills/css.svg' },
    ],
    print: [
      {name: 'Home', img:'https://media.discordapp.net/attachments/1088112544905969736/1099114491347750912/image.png?width=1058&height=595'},

    ],
    video: ''
  },
  {
    id: 6,
    url: 'Netflix Clone',
    img: '/projects/netflix/home.png',
    title: 'Netflix Clone',
    type: "Website Clone",
    icon: "/projects/netflix/icon.webp",
    github: 'https://github.com/felipejohnsonn/Netflix-clone',
    web: 'https://netflix-landing-sable.vercel.app',
    description: 'Netflix landing page clone',
    tags: [
      {name: "React", icon: '/skills/react.svg' },
      {name: "TypeScript", icon: '/skills/typescript.svg' },
      {name: "Vite", icon: '/skills/vite.svg' },
    ],
    print: [
      {name: 'Home', img:'https://user-images.githubusercontent.com/128244805/234773510-84a6d446-9b3e-4f3d-8b12-7378e02e55be.png'},

    ],
    video: ''
  },
  {
    id: 7,
    url: 'Nike store Clone',
    img: 'https://media.discordapp.net/attachments/1088112544905969736/1101270847051808768/image.png?width=1058&height=595',
    title: 'Nike Store Clone',
    type: "Website Clone",
    icon: "https://static.vecteezy.com/ti/vetor-gratis/t2/10994412-nike-logotipo-preto-com-nome-design-de-roupas-icone-abstrato-futebol-ilustracaoial-com-fundo-branco-gratis-vetor.jpg",
    github: 'https://github.com/felipejohnsonn/nikeStore',
    web: 'https://nike-storee.vercel.app/',
    description: 'Nike store clone',
    tags: [
      {name: "React", icon: '/skills/react.svg' },
      {name: "TypeScript", icon: '/skills/typescript.svg' },
      {name: "Redux", icon: '/skills/redux.svg' },
      {name: "Next.js", icon: '/skills/nextjs.svg' },
      {name: "Html", icon: '/skills/html.svg' },
      {name: "Css", icon: '/skills/css.svg' },
      {name: "Tailwind CSS", icon: '/skills/tailwindcss.svg' },
    ],
    print: [
      {name: 'Home', img:'https://media.discordapp.net/attachments/1088112544905969736/1101270847051808768/image.png?width=1058&height=595'},
      {name: 'page2', img:'https://media.discordapp.net/attachments/1088112544905969736/1101270918912819292/image.png?width=1058&height=595'},
      {name: 'page3', img:'https://media.discordapp.net/attachments/1088112544905969736/1101270986168488037/image.png?width=1058&height=595'},

    ],
    video: ''
  },
  {
    id: 8,
    url: 'Gamex - eSports Template Free',
    img: 'https://user-images.githubusercontent.com/128244805/236636667-80c32805-abe3-4a07-8dc1-f8b1e6e97f38.png',
    title: 'Gamex eSports',
    type: "Website eSports",
    icon: "https://th.bing.com/th/id/R.0ca41046c1244af3207c68ad97e5edc6?rik=MQ5HMhq7y3WQNA&pid=ImgRaw&r=0",
    github: 'https://github.com/felipejohnsonn/Gamex-template',
    web: 'https://gamex-template.vercel.app/',
    description: ' Gamex é uma empresa fictícia de jogos que busca oferecer aos jogadores experiências de jogo excepcionais e envolventes. Comprometida com a inovação, criatividade e excelência, a Gamex desenvolve jogos cuidadosamente projetados para proporcionar diversão, desafios e imersão aos jogadores.',
    tags: [
      {name: "JavaScript", icon: '/skills/javascript.svg' },
      {name: "Html", icon: '/skills/html.svg' },
      {name: "Css", icon: '/skills/css.svg' },
      {name: "Bootstrap", icon: '/skills/Bootstrap_logo.svg' },
      {name: "Swiper", icon: '/skills/Swiper.png' },
      {name: "Lightbox", icon: '/skills/Lightbox_logo.svg' },
      {name: "jQuery", icon: '/skills/jquery.png' },
      {name: "FancyBox", icon: '/skills/FancyBox.svg' },
    ],
    print: [
      {name: 'Home', img:'https://user-images.githubusercontent.com/128244805/236636667-80c32805-abe3-4a07-8dc1-f8b1e6e97f38.png'},
      {name: 'Home2', img:'https://user-images.githubusercontent.com/128244805/236676379-99708f4f-9dd0-4bf7-88f5-55e8aeaf7b8d.png'},
      {name: 'page2', img:'https://user-images.githubusercontent.com/128244805/236676183-cd58e60f-7be5-4e02-a65a-82bdf2e533cf.png'},
      {name: 'page3', img:'https://user-images.githubusercontent.com/128244805/236676333-6e0dad1f-cf9c-4af2-b322-f5a4f82f17f9.png'},
      {name: 'page4', img:'https://user-images.githubusercontent.com/128244805/236676447-5ef9c2ba-cfbb-420e-9310-fbcaa246967d.png'},
      {name: 'page5', img:'https://user-images.githubusercontent.com/128244805/236676713-ac2bc775-dc3d-4fa4-815f-314db5e5fa25.png'},
      {name: 'page6', img:'https://user-images.githubusercontent.com/128244805/236676741-21e682e1-53eb-4dd8-bf61-5958b502d379.png'},

    ],
    video: ''
  },
  
]

export default projects
