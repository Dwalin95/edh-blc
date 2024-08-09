
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { BsMouse } from "react-icons/bs";

export default function HeaderIntroRicerca() {
  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.seacrchPicture}
        alt={headerIntroData.seacrchPicture}
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
      />
      <h1>
         {headerIntroData.paginaRicerca.titolo}
        <span className="wave text-7xl">&#128269;</span>
      </h1>
      <p className="w-1/2 flex max-lg:hidden">
        { headerIntroData.paginaRicerca.descrizione}
      </p>
      <p className="w-1/2 text-center sm:hidden mb-1">
      {headerIntroData.paginaRicerca.descrizione}        
        </p>
     
      
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
     
      
     
    </section>
  )
}