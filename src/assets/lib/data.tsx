import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    it: "Ciao, sono Alpay",
    en: "Hi, I'm Alpay",
  },
  subtitle: "Sviluppatore Fullstack",
  description: {
    it: "Sono Alpay, uno sviluppatore fullstack con l'obiettivo di far progredire la mia carriera e partecipare a progetti stimolanti. Qui presento il mio lavoro e la mia passione per lo sviluppo web. Lavoriamo insieme per creare soluzioni digitali e plasmare il futuro!",
    en: "I'm Alpay, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        it: "Contattami",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        it: "I miei progetti",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description:
      "Un'app di ricette che abbiamo costruito come team con React e l'API MealDB. Sono stato lo sviluppatore front-end e ho programmato funzionalità come la ricerca vocale o la stampa in PDF. Il design è stato creato con Figma. Il sito web è responsive e ottimizzato per i dispositivi mobili.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Silentmoon",
    description:
      "Un'app di yoga e meditazione che abbiamo costruito come team con React, MongoDB, Express e Node.js. Il mio compito come gitmaster e sviluppatore back-end era quello di programmare il back-end con connessione tramite un'API restful e modellare il database in MongoDB.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    description:
      "Un'app per l'organizzazione dei mobili che abbiamo programmato come team di duo con React, MongoDB, Express e Node.js. Come gitmaster, mi sono occupato della connessione del frontend al backend e della modellazione del database. L'app è responsive e ottimizzata per i dispositivi mobili.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    it: "Altri progetti su Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Sviluppo Web",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { it: "Home", en: "Home", hash: "#home", icon: GoHome },
  { it: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { it: "Progetti", en: "Projects", hash: "#projects", icon: GoProject },
  { it: "Chi sono", en: "About me", hash: "#about-me", icon: GoPerson },
  { it: "Contatti", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { it: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { it: "Privacy", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/alpay/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/AlpayC",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:myemail@com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    it: '"Non è affatto importante farlo bene la prima volta. È fondamentale farlo bene l\'ultima volta."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    it: '"Il web è come una tela e il codice è il colore. Crea il tuo capolavoro."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Chi sono",
  title_EN: "About me",
  description: "Alcuni frammenti di codice su di me",
  description_EN: "A few code snippets about me",
  paragraphs_IT: [
    {
      title: "I circuiti del mio cuore",
      description:
        "Quando non sono immerso nel mondo digitale, esploro il fascinante mondo della tecnologia e dell'hardware. Circuiti e saldature sono come pezzi di un puzzle in un'avventura emozionante.",
      icon: hardwareicon,
    },
    {
      title: "Sulla corsia veloce della vita",
      description:
        "Oltre al coding, mi piace essere sulla corsia veloce - nel vero senso della parola. Le auto sono la mia passione e mi piace percorrere strade sconosciute con macchine potenti.",
      icon: caricon,
    },
    {
      title: "La gioia della scoperta come motto di vita",
      description:
        "Il mio percorso come sviluppatore web è solo una parte del mio cammino di vita. Vivo secondo il motto che l'avventura inizia solo quando si lascia alle spalle il familiare. Scoprire nuovi luoghi e culture è la mia forma di ispirazione creativa.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    it: "Contatti",
    en: "Contact",
  },
  description: {
    it: "Scrivimi un messaggio e ti risponderò al più presto.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        it: "Il tuo nome",
        en: "Your Name",
      },
      type: "text",
      validation: {
        it: "Inserisci il tuo nome",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        it: "La tua email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        it: "Inserisci la tua email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        it: "Oggetto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        it: "Inserisci un oggetto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      it: "Il tuo messaggio",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      it: "Inserisci il tuo messaggio",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      it: "Invia",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      it: "Acconsento che Alpay possa utilizzare i miei dati personali (nome e indirizzo email) per contattarmi.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      it: "Inviando questa richiesta, confermi di aver letto l'Informativa sulla privacy",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    it: "🦄 La demo live si aprirà a breve. Avvio dei server in corso...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    it: "🦄 Grazie per la tua email. Mi metterò in contatto con te al più presto",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    it: "🦄 Purtroppo l'invio della tua email non è riuscito. Riprova più tardi",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    it: "Inserisci il tuo nome",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    it: "IT",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
