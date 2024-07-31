import React, {  useRef } from "react";


import { contactData } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";

import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import magic from "../assets/icons/magic.webp";
import morteNera from "../assets/icons/MorteNera.webp";
import SkillSection from "./SkillSection.tsx";
import {
  skillsDataDesign,
  skillsDataWeb,
} from "../assets/lib/data";

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  



  

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
            className="text-center"
          >
            <p className="text-[--black] mb-6 ml-6 flex items-center justify-center">
              <span className="flex-shrink-0 mr-2">
                <img src={magic} className="w-20" />
              </span>
              {language === "IT" ? contactData.title.it : contactData.title.en}
              <span className="ml-2 ">
                <img src={morteNera} className="w-20" />
              </span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "IT"
                ? contactData.description.it
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex mt-10 gap-10 justify-center max-lg:flex-col">
  <div className="w-1/3 max-lg:w-full">
    <SkillSection skillsData={skillsDataWeb} theme={theme} />
  </div>
  <div className="w-1/3 flex flex-col gap-10 max-lg:w-full">
    <SkillSection skillsData={skillsDataDesign} theme={theme} />
    {/* <SkillSection skillsData={schedule} theme={theme} /> */}
  </div>
</div>


      </section>
    </React.Fragment>
  );
};

export default Contact;
