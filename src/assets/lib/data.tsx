import pianura from "../icons/pianura.svg";
import palude from "../../assets/icons/palude.svg";
import isola from "../../assets/icons/isola.svg";
import foresta from "../../assets/icons/foresta.svg";
import cost1 from "../../assets/icons/1.svg";
import montagna from "../../assets/icons/montagna.svg";
import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/trace.svg";
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
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import liveBane from "../../assets/img/livebane.webp";
import sliver from "../../assets/img/Sliver.webp";
import vraska from "../../assets/img/vraska.webp";
import profilepicture from "../img/logo.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import {
  FiGithub,
  FiLink,
  FiLinkedin,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import { FaInstagram, FaTwitch, FaTiktok } from "react-icons/fa";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    it: "Ciao! sono Andrea",
    en: "Hello! I'm Andrea",
  },
  subtitle: "Gamer and Streamer",
  description: {
    it: "Ciao Viandante sono Andrea, un appassionato di videogiochi, carte, giochi da tavolo e streamer (wow quante cose, e suono anche la chitarra 🤣). Qui troverai tutte le informazioni relative alle live, e anche tutte le liste dei mazzi budget e non che costruirò in live, sia per Magic che per Star Wars Unlimited! Cosa aspetti, vai subito a guardare!",
    en: "Hello Plansewalker, I'm Andrea, a passionate gamer, card player, board game enthusiast, and streamer (wow, so many things, and I also play the guitar 🤣). Here you will find all the information about my live streams, as well as the lists of budget and non-budget decks that I will build live, both for Magic and Star Wars Unlimited! What are you waiting for, go check it out!",
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
      name: "Mazzi",
      label: {
        it: "Alcune delle mie",
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
    title: "Bane, Lord of Darkness",
    description:
      "Bane è un comandante che prospera in un mazzo che manipola la vita e sacrifica creature per ottenere vantaggi. Grazie alla sua abilità puoi giocare dalla mano senza castare, e quindi ti eviti i rognosi counter. E non dimentichiamoci della sua indistruttibilità quando la vita del giocatore è inferiore o uguale a metà del totale iniziale, ciò lo rende difficile da rimuovere in condizioni critiche.",
    description_EN:
      "Bane is a commander that thrives in a deck that manipulates life and sacrifices creatures to gain advantages. Thanks to his ability you can play from your hand without casting, and therefore you avoid the annoying counters. And let's not forget his indestructibility when the player's life is less than or equal to half of the initial total, making him difficult to remove in critical conditions.",
    technologies: [
      { name: "1", icon: cost1 },
      { name: "Pianura", icon: pianura },
      { name: "Isola", icon: isola },
      { name: "Palude", icon: palude },
    ],
    image: liveBane,
    mtgGoldfishUrl: "https://www.mtggoldfish.com/deck/6443645#paper",
    driveUrl:
      "https://drive.google.com/file/d/1PtbqTwtj12LGTuhXFMK4NFz0nEjosz_-/view?usp=drive_link",
    downloadIcon: FiDownload,
    mtgGoldfishIcon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Vraska, the Silencer",
    description:
      "Vraska, the Silencer un perfetto mazzo Golgari basato sulla CLEPTOMANIA! Devi solo distruggere, rimuovere così da poter prendere il controllo delle creature avversarie, ed essere odiato da tutto il tavolo hehehehe 👿",
    description_EN:
      "Vraska, the Silencer a perfect Golgari deck based on CLEPTOMANIA! You just have to destroy, remove so that you can take control of the opponent's creatures, and be hated by the whole table hehehehe 👿",
    technologies: [
      { name: "1", icon: cost1 },
      { name: "Foresta", icon: foresta },
      { name: "Palude", icon: palude },
    ],
    image: vraska,
    mtgGoldfishUrl: "https://www.mtggoldfish.com/deck/6472497#paper",
    driveUrl:
      "https://drive.google.com/file/d/1PwV3CuCTPhM2R9AiSGDkbuOV_nO0AW1n/view?usp=drive_link",
    downloadIcon: FiDownload,
    mtgGoldfishIcon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "The First liver",
    description:
      "The First Sliver è un comandante potente per un mazzo basato sulla meccanica Sliver e della cascata. Ti bastano 5 terre per creare il caos e riempire la board con tanti piccoli rognosi e successivamente enormi tramutanti",
    description_EN:
      "The First Sliver is a powerful commander for a deck based on the Sliver and cascade mechanics. You only need 5 lands to create chaos and fill the board with many small annoying",
    technologies: [
      { name: "Pianura", icon: pianura },
      { name: "Isola", icon: isola },
      { name: "Palude", icon: palude },
      { name: "Montagna", icon: montagna },
      { name: "Foresta", icon: foresta },
    ],
    image: sliver,
    mtgGoldfishUrl: "https://www.mtggoldfish.com/deck/6029386#paper",
    driveUrl:
      "https://drive.google.com/file/d/1MCMgTe31SI7dRUcahUCNmqLJKzrz9cZT/view?usp=drive_link",
    downloadIcon: FiDownload,
    mtgGoldfishIcon: FiLink,
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
    it: "Trovi altre liste su GoldFish cercami, sono Bella li Colibrì!",
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
  { it: "Esempi", en: "Example", hash: "#esempi", icon: GoStack },
  { it: "Liste", en: "Lists", hash: "#lists", icon: GoProject },
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
    link: "https://www.instagram.com/bella_li_colibri?igsh=bTZsNzNoc2xtM282",
    icon: FaInstagram,
    altimgname: "instagram",
  },
  {
    link: "https://www.twitch.tv/bella_li_colibri",
    icon: FaTwitch,
    altimgname: "twitch",
  },
  {
    link: "https://www.tiktok.com/@bella_li_colibri?_t=8oP8WDyPIZ7&_r=1",
    icon: FaTiktok,
    altimgname: "tiktok",
  },
] as const;

export const quotesData = [
  {
    it: '"Facile montare un mazzo EDH con le carte OP del gioco.. prova a farlo con un budget di 100$ 😎"',
    en: `"Easy to build an EDH deck with the OP game cards.. try to do it with a budget of 100$ 😎"`,
    author: "Per chi come me non ha soldi per comprare carte OP 🍻",
  },
  {
    it: '"Scegli il commander, scegli le strategie, costruisci il mazzo e sfida i tuoi amici!"',
    en: `"Choose the commander, choose the strategies, build the deck and challenge your friends!"`,
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
    it: "🦄 Qualche secondo ed entrerai nel magico mondo delle liste... 🪄",
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
