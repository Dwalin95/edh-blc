import pianura from "../icons/pianura.svg";
import palude from "../../assets/icons/palude.svg";
import isola from "../../assets/icons/isola.svg";
import foresta from "../../assets/icons/foresta.svg";
// import cost1 from "../../assets/icons/1.svg";
import montagna from "../../assets/icons/montagna.svg";

// import liveBane from "../../assets/img/livebane.webp";
// import sliver from "../../assets/img/Sliver.webp";
// import vraska from "../../assets/img/vraska.webp";
import profilepicture from "../img/logo.webp";
import tutore from "../img/tutore.webp";

import idilliaco from "../img/idilliaco.webp";
// import botpng from "../img/botpng.webp";
import { GoHome, GoPerson, GoMail, GoProject } from "react-icons/go";
// import { GiPorcupinefish } from "react-icons/gi";
// import { MdOutlineArchitecture } from "react-icons/md";

import { FcSearch } from "react-icons/fc";
import { FaInstagram, FaTwitch, FaTiktok } from "react-icons/fa";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import igIcon from "../img/instagram.svg";
import telegram from "../icons/telegram.svg";
import tiktok from "../img/tiktok.svg";
import youtube from "../img/youtube.svg";
import twitch from "../img/twitch_noScritta.svg";
import mox from "../img/mox.svg";
// import biblio3 from "../img/biblio3.webp";
import arkidek from "../img/arkidek.svg";
import gldfsh from "../img/gdfh.webp";
import spotify from "../icons/spotify.png";
import sleeve from "../img/sleevechief.webp";
import iTunes from "../icons/itunes.png";

export const headerIntroData = {
  title: {
    it: "Sono Andrea!",
    en: "I'm Andrea!",
  },
  subtitle: "Gamer and Streamer",
  description: {
    it: "Ciao Viandante sono Andrea, un appassionato di videogiochi, carte, giochi da tavolo e streamer (wow quante cose, e suono anche la chitarra 🤣). Qui troverai tutte le informazioni relative alle live, e anche tutte le liste dei mazzi budget e non che costruirò in live! Cosa aspetti, vai subito a guardare!",
    en: "Hello Plansewalker, I'm Andrea, a passionate gamer, card player, board game enthusiast, and streamer (wow, so many things, and I also play the guitar 🤣). Here you will find all the information about my live streams, as well as the lists of budget and non-budget decks that I will build live! What are you waiting for, go check it out!",
  },
  suTelefono: {
    it: "Ciao Viandante e benvenuto sul mio sito!",
    en: "Hello Plansewalker and welcome to my website!",
  },
  paginaRicerca: {
    titolo: "Elenco liste!",
    descrizione:
      "Qua potrai trovare tutte le liste che ho creato durante le live, con foto e link!",
    descrizione1:
      "Qui potrai trovare tutte le liste budget a 100$ che ho creato durante il corso del tempo e delle live!",
  },

  profilepicture: profilepicture,
  seacrchPicture: tutore,
} as const;

export const projectsData = [
  // {
  //   title: "Bane, Lord of Darkness",
  //   description:
  //     "Bane è un comandante che prospera in un mazzo che manipola la vita e sacrifica creature per ottenere vantaggi. Grazie alla sua abilità puoi giocare dalla mano senza castare, e quindi ti eviti i rognosi counter. E non dimentichiamoci della sua indistruttibilità quando la vita del giocatore è inferiore o uguale a metà del totale iniziale, ciò lo rende difficile da rimuovere in condizioni critiche.",
  //   description_EN:
  //     "Bane is a commander that thrives in a deck that manipulates life and sacrifices creatures to gain advantages. Thanks to his ability you can play from your hand without casting, and therefore you avoid the annoying counters. And let's not forget his indestructibility when the player's life is less than or equal to half of the initial total, making him difficult to remove in critical conditions.",
  //   technologies: [
  //     { name: "1", icon: cost1 },
  //     { name: "Pianura", icon: pianura },
  //     { name: "Isola", icon: isola },
  //     { name: "Palude", icon: palude },
  //   ],
  //   image: liveBane,
  //   mtgGoldfishUrl: "https://www.mtggoldfish.com/deck/6443645#paper",
  //   driveUrl:
  //     "https://www.archidekt.com/decks/9653926/live_bane",
  //   downloadIcon: MdOutlineArchitecture,
  //   mtgGoldfishIcon: GiPorcupinefish,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#70B9BE",
  //   },
  // },
  // {
  //   title: "Cerchi altre liste?",
  //     description:
  //       "Se vuoi cercare altre liste clicca il tasto Cerca o l'icona della lente di ingrandimento con il mondo per acceder a tutte le liste che ho fato fino ad ora, con foto e link!",
  //     description_EN:
  //       "If you want to search for other lists click here, and you will be taken to a page where I keep all my budget lists, with photos and links!",
  //     technologies: [

  //       { name: "Palude", icon: palude },

  //     ],
  //     image: biblio3,
  //     mtgGoldfishUrl: "",
  //     driveUrl:
  //       "",
  //     downloadIcon: FcSearch,
  //     mtgGoldfishIcon: GiPorcupinefish,
  //     colors: {
  //       main: "main-btn",
  //       second: "secondary-btn",
  //       icon: "white",
  //       projectcolor: "#E3964A",
  //     },
  //   },
  // {
  //   title: "Vraska, the Silencer",
  //   description:
  //     "Vraska, the Silencer un perfetto mazzo Golgari basato sulla CLEPTOMANIA! Devi solo distruggere, rimuovere così da poter prendere il controllo delle creature avversarie, ed essere odiato da tutto il tavolo hehehehe 👿",
  //   description_EN:
  //     "Vraska, the Silencer a perfect Golgari deck based on CLEPTOMANIA! You just have to destroy, remove so that you can take control of the opponent's creatures, and be hated by the whole table hehehehe 👿",
  //   technologies: [
  //     { name: "1", icon: cost1 },
  //     { name: "Foresta", icon: foresta },
  //     { name: "Palude", icon: palude },
  //   ],
  //   image: vraska,
  //   mtgGoldfishUrl: "https://www.mtggoldfish.com/deck/6472497#paper",
  //   driveUrl:
  //     "https://www.archidekt.com/decks/9653946/give_it_to_me",
  //   downloadIcon: MdOutlineArchitecture,
  //   mtgGoldfishIcon: GiPorcupinefish,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#FFD5BD",
  //   },
  // },
  {
    title: "Commander Bracket",
    description:
      "I Commander Brackets sono un sistema di matchmaking per le partite di Commander, suddiviso in cinque livelli per migliorare l’esperienza di gioco, dai mazzi ultra-casual del Bracket 1 ai mazzi competitivi del Bracket 5. I Game Changers sono carte che influenzano fortemente le partite, offrendo vantaggi strategici. Attualmente in fase di beta testing, il feedback dei giocatori sarà essenziale per perfezionare questo sistema e garantire un’esperienza di gioco ottimale.",
    description_EN:
      "The Commander Brackets are a matchmaking system for Commander games, divided into five levels to improve the gaming experience, from ultra-casual decks of Bracket 1 to competitive decks of Bracket 5. The Game Changers are cards that strongly influence the games, offering strategic advantages. Currently in beta testing, player feedback will be essential to refine this system and ensure an optimal gaming experience.",
    technologies: [
      { name: "Pianura", icon: pianura },
      { name: "Isola", icon: isola },
      { name: "Palude", icon: palude },
      { name: "Montagna", icon: montagna },
      { name: "Foresta", icon: foresta },
    ],
    embedHtml: `<div style="position: relative; width: 100%; height: 0; padding-top: 100.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGe02gd3kE/YEcT0V9gJXmTifyvdilOdA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>

   `,
    mtgGoldfishUrl:
      "https://www.instagram.com/mtg_colibri?igsh=OWk3Nmx6b3BwdHhw",
    driveUrl: "https://www.twitch.tv/mtg_colibri",
    downloadIcon: FaTwitch,
    mtgGoldfishIcon: FaInstagram,
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
    it: "Sono anche su Spotify!",
    en: "I'm also on Spotify!",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Social",
    skills: [
      {
        title: "Instagram",
        hash: "https://www.instagram.com/mtg_colibri?igsh=OWk3Nmx6b3BwdHhw",
        icon: igIcon,
        color: "#ff00cc",
      },
      {
        title: "TikTok",
        hash: "https://www.tiktok.com/@mtg_colibri?_t=8pzun8g5lRZ&_r=1",
        icon: tiktok,
        color: "#00ddff",
      },
      {
        title: "Twitch",
        hash: "https://www.twitch.tv/mtg_colibri",
        icon: twitch,
        color: "#a600ff",
      },
      {
        title: "Youtube",
        hash: "https://www.youtube.com/@Mtg_Colibri",
        icon: youtube,
        color: "#ff0011",
      },
      {
        title: "iTunes",
        hash: "http://itunes.apple.com/album/id1782732757?ls=1&app=itunes",
        icon: iTunes,
        color: "#800080",
      },
      {
        title: "Spotify",
        hash: "https://open.spotify.com/intl-it/artist/72o9wb21qrmxrciRNAUvy1?si=9lW6eFIhQSahiRiSynjtIg",
        icon: spotify,
        color: "#1fbf0d",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Siti",
    skills: [
      {
        title: "Moxfield",
        hash: "https://moxfield.com/bookmarks/oWMJJ-100-",
        icon: mox,
        color: "#F24E1E",
      }, // URL completo
      {
        title: "GoldFish",
        hash: "https://www.mtggoldfish.com",
        icon: gldfsh,
        color: "#ff9d00",
      }, // URL completo
      {
        title: "Archidekt",
        hash: "https://www.archidekt.com/folders/727949?dir=asc&orderBy=name",
        icon: arkidek,
        color: "#aba9a2",
      },
      {
        title: "5% COLIBRI",
        hash: "https://sleevechief.myshopify.com?sca_ref=8189350.8TfzeCs7AV",
        icon: sleeve,
        color: "#FFD700",
      },
      {
        title: "Telegram Bot!",
        hash: "https://t.me/MTG_Colibri_Bot",
        icon: telegram,
        color: "#00f7ff",
      },

    ],
  },
] as const;

// export const schedule = [
//   {
//     skillsTitle: "Discount",
//     skills: [
//       {

//         icon: sleeve,
//         color: "#F24E1E",
//         text: "5%",
//       },

//     ],
//   },
// ] as const;

export const navLinks = [
  { it: "Home", en: "Home", hash: "#home", icon: GoHome },
  { it: "Cerca", en: "Search", hash: "/searchList", icon: FcSearch },
  {
    it: "Mazzi e liste",
    en: "Mazzi e liste",
    hash: "#liste",
    icon: GoPerson,
  },
  { it: "Magic", en: "Magic", hash: "#magic", icon: GoProject },
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
    link: "https://www.instagram.com/mtg_colibri?igsh=OWk3Nmx6b3BwdHhw",
    icon: FaInstagram,
    altimgname: "instagram",
  },
  {
    link: "https://www.twitch.tv/mtg_colibri",
    icon: FaTwitch,
    altimgname: "twitch",
  },
  {
    link: "https://www.tiktok.com/@mtg_colibri?_t=8pzun8g5lRZ&_r=1",
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
  title: "Tutora una lista!",
  title_EN: "List tutor!",
  description: "Qui potrai trovare tutte le liste che ho creato.",
  description_EN: "Here you can find all the lists I have created.",
  paragraphs_IT: [
    // {
    //   title: "Telegram Bot",
    //   description:
    //     "Sfruttiamo la potenza di Telegram, clicca sul link per accedere al bot e cercare la tua lista!",
    //   icon: botpng,
    //   driveUrl: "https://t.me/MTG_Colibri_Bot",
    // },
    {
      title: "Cerca la tua Lista!",
      description:
        "In questa sezione troverai tutte le liste e i collegamenti ai siti dove poterle vedere e scaricare!",
      icon: idilliaco,
      driveUrl: "/searchList",
    },
  ],
  paragraphs_EN: [
    // {
    //   title: "Telegram Bot",
    //   description:
    //     "Let's take advantage of the power of Telegram, click on the link to access the bot and search for your list!",
    //   icon: botpng,
    //   driveUrl:
    //     "https://drive.google.com/file/d/1gg3mYLPE7nyNQFuaI_q1_mUj1bFrxM57/view?usp=drive_link",
    // },
    {
      title: "Search your List!",
      description:
        "In this section you will find all the lists and links to the sites where you can view and download them!",
      icon: idilliaco,
      driveUrl: "/searchList",
    },
  ],
};

export const contactData = {
  title: {
    it: "Contatti",
    en: "Contact",
  },
  description: {
    it: "Sono Live su Twitch il Lunedì e il Martedì/Giovedì dalle 21:30",
    en: "Here is where you can find me!",
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
  icon: tiktok,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      it: "Acconsento che possa utilizzare i miei dati personali (nome e indirizzo email) per contattarmi.",
      en: "I agree that may use my personal data (name and e-mail address) to contact me.",
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
