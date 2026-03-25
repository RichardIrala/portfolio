const projects = {
  es: [
    {
      name: "MI PORTFOLIO",
      description:
        "Es mi portfolio personal en el cuál se encuentran mis redes sociales, proyectos, etc.",
      image: "assets/projects/myPortfolio.png",
      code: "https://github.com/RichardIrala/portfolio",
      deploy: "https://mi-portfolio-richardiralas-projects.vercel.app/",
    },
    {
      name: "RETRO GAMES",
      description:
        "Se trata de una webapp en la que se puede jugar al wordle, ahorcado, entre otros.",
      image: "assets/projects/retroGames.png",
      code: "https://github.com/No-Country/S4-10-M-MERN",
    },
    {
      name: "Pretty Pets",
      description:
        "App e-commerce de Mascotas desarrollada con React Native, Express y MongoDB, este proyecto es una emulacion de 1 mes a través de No Country. Cuenta con vistas Home, List Products, Detail Products, Cart, Bag Item, Profile, List Orders, Detail Orders, Login and Register.",
      image: "assets/projects/prettyPets2.png",
      code: "https://github.com/No-Country/s3-06-m-reactnative-node",
      deploy: "",
    },
    {
      name: "Mascotas perdidas",
      description:
        "WebApp que se enfoca en la publicación de mascotas perdidas con su última ubicación. Lo último es para ayudar a su búsqueda. La misma puede ser reportada por otro usuario y entonces te llegará un mensaje al email.",
      image: "assets/projects/petLost.png",
      code: "https://github.com/RichardIrala/mascotas-perdidas-webapp-m7",
      deploy: "https://webapp-mascotas-perdidas-react.web.app/",
    },
    {
      name: "Diseño del portfolio",
      description:
        "Utilizando figma diseñé mi portfolio para luego traducirlo a código y deployarlo.",
      image: "assets/projects/portfolioDesign.png",
      code: "",
      deploy:
        "https://www.figma.com/file/7osZICUMta7OJmlx8ibqLk/Portfolio-RMI?node-id=0%3A1&t=gkvUTfBvaIvEKqN3-0",
    },
    {
      name: "PPOT Online",
      description:
        "Se trata de un juego de piedra, papel o tijeras el cuál es online por salas. Hecho con firebase y parcel.",
      image: "assets/projects/ppot.jpg",
      code: "https://github.com/RichardIrala/dwf-m6-desafio",
      deploy: "",
    },
    {
      name: "Chat",
      description:
        "Este fue un pequeño chat que hice con firebase realtime database, parcel y typescript.",
      image: "assets/projects/chat.jpg",
      code: "https://github.com/RichardIrala/dwf-m6-desafio",
      deploy: "",
    },
    {
      name: "Buscador con api de ML",
      description:
        "Se trata de un buscador de productos en mercado libre. Simple y con ese único objetivo.",
      image: "assets/projects/mlSeeker.png",
      code: "https://github.com/RichardIrala/css-modules-webpack-and-mercadolibre",
      // deploy: "https://dwf-m8-ml-buscador.web.app/",
    },
    {
      name: "To Do app",
      description:
        "Hecho con TypeScript y Parcel. App para crear tareas y organizarse. Utiliza LocalStorage para guardar los datos.",
      image: "assets/projects/toDoApp.jpg",
      code: "",
      deploy: "",
    },
    {
      name: "Web responsive",
      description:
        "Una de las primeras páginas web responsive que hice. El deploy está hecho en GitHub Pages.",
      image: "assets/projects/responsivePage.png",
      code: "https://github.com/RichardIrala/desafio-modulo-4",
      deploy: "https://richardirala.github.io/desafio-modulo-4/index.html",
    },
  ],
  en: [
    {
      name: "MY PORTFOLIO",
      description:
        "This is my personal portfolio where you can find my social media, projects, etc.",
      image: "assets/projects/myPortfolio.png",
      code: "https://github.com/RichardIrala/portfolio",
      deploy: "https://mi-portfolio-richardiralas-projects.vercel.app/",
    },
    {
      name: "RETRO GAMES",
      description:
        "This is a web app where you can play Wordle, Hangman, among others.",
      image: "assets/projects/retroGames.png",
      code: "https://github.com/No-Country/S4-10-M-MERN",
    },
    {
      name: "Pretty Pets",
      description:
        "E-commerce pet app developed with React Native, Express, and MongoDB. This project simulates a 1-month development sprint through No Country. It includes Home, List Products, Product Detail, Cart, Bag Item, Profile, List Orders, Order Detail, Login, and Register views.",
      image: "assets/projects/prettyPets2.png",
      code: "https://github.com/No-Country/s3-06-m-reactnative-node",
      deploy: "",
    },
    {
      name: "Lost Pets",
      description:
        "A WebApp focused on publishing lost pets with their last known location to assist in their recovery. Reports can be made by other users, and if so, a notification is sent via email.",
      image: "assets/projects/petLost.png",
      code: "https://github.com/RichardIrala/mascotas-perdidas-webapp-m7",
      deploy: "https://webapp-mascotas-perdidas-react.web.app/",
    },
    {
      name: "Portfolio Design",
      description:
        "Using Figma, I designed my portfolio to later translate it into code and deploy it.",
      image: "assets/projects/portfolioDesign.png",
      code: "",
      deploy:
        "https://www.figma.com/file/7osZICUMta7OJmlx8ibqLk/Portfolio-RMI?node-id=0%3A1&t=gkvUTfBvaIvEKqN3-0",
    },
    {
      name: "PPOT Online",
      description:
        "An online rock-paper-scissors game using rooms. Built with Firebase and Parcel.",
      image: "assets/projects/ppot.jpg",
      code: "https://github.com/RichardIrala/dwf-m6-desafio",
      deploy: "",
    },
    {
      name: "Chat",
      description:
        "This is a small chat app built with Firebase Realtime Database, Parcel, and TypeScript.",
      image: "assets/projects/chat.jpg",
      code: "https://github.com/RichardIrala/dwf-m6-desafio",
      deploy: "",
    },
    {
      name: "ML API Product Search",
      description:
        "A simple product search tool using the Mercado Libre API. Focused solely on searching.",
      image: "assets/projects/mlSeeker.png",
      code: "https://github.com/RichardIrala/css-modules-webpack-and-mercadolibre",
      // deploy: "https://dwf-m8-ml-buscador.web.app/",
    },
    {
      name: "To Do App",
      description:
        "Built with TypeScript and Parcel. A task management app using LocalStorage for data persistence.",
      image: "assets/projects/toDoApp.jpg",
      code: "",
      deploy: "",
    },
    {
      name: "Responsive Web Page",
      description:
        "One of the first responsive web pages I created. Deployed via GitHub Pages.",
      image: "assets/projects/responsivePage.png",
      code: "https://github.com/RichardIrala/desafio-modulo-4",
      deploy: "https://richardirala.github.io/desafio-modulo-4/index.html",
    },
  ],
};

export default projects;
