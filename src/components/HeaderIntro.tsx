import React from "react";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";
import Typewriter from "../hooks/Typerwrite";

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
      />
      <h1>
        {language === "IT"
          ? headerIntroData.title.it
          : headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h2>{headerIntroData.subtitle}</h2>
      <p className="w-1/2 text-center max-lg:hidden">
        {language === "IT"
          ? headerIntroData.description.it
          : headerIntroData.description.en}
      </p>
      <p className="w-1/2 text-center sm:hidden mb-1">
      <Typewriter text={language === "IT" ? headerIntroData.suTelefono.it : headerIntroData.suTelefono.en} />        
        </p>
     
      
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
