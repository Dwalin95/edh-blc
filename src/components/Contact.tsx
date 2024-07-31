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
              <span className="ml-2 max-lg:hidden">
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
        <div className="flex mt-10 gap-40 justify-center max-lg:flex-col">
          <div className="w-1/3 max-lg:w-full">
            <SkillSection skillsData={skillsDataWeb} theme={theme} />
          </div>
          <div className="flex flex-col h-[inherit]  justify-around max-lg:gap-40">
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
           
          </div>
        </div>
{/* 
        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          <div className="w-1/2  bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress">
            <Highlight
              code={codeSnippet}
              language="tsx"
              theme={themes.nightOwl}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-4xl `} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
          <form
            className="flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={
                  language === "IT"
                    ? `${input.placeholder.it}`
                    : `${input.placeholder.en}`
                }
                name={input.name}
                value={
                  input.name === "name"
                    ? name
                    : input.name === "email"
                    ? email
                    : input.name === "subject"
                    ? subject
                    : message
                }
                required
                onFocus={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onChange={handleInputChange}
                className={`${
                  theme === "dark"
                    ? "bg-[--blackblue] dark-mode-shadow "
                    : "bg-[--icewhite] dark-shadow "
                }`}
              />
            ))}
            <textarea
              rows={contactData.textarea.rows}
              placeholder={
                language === "IT"
                  ? `${contactData.textarea.placeholder.it}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--icewhite] dark-shadow"
              }`}
            />
            <div className="privacy-checkbox flex gap-16">
              <label
                className="block w-2 h-2 cursor-pointer"
                htmlFor="checkbox-label"
              >
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                />
                <span className="checkbox"></span>
              </label>
              <p>
                {language === "IT"
                  ? `${contactData.privacyOptIn.checkbox.it}`
                  : `${contactData.privacyOptIn.checkbox.en}`}
              </p>
            </div>
            <p>
              {language === "IT"
                ? `${contactData.privacyOptIn.description.it}`
                : `${contactData.privacyOptIn.description.en}`}
            </p>
            <Button
              value={
                language === "IT"
                  ? `${contactData.button.value.it}`
                  : `${contactData.button.value.en}`
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div> */}
      </section>
    </React.Fragment>
  );
};

export default Contact;
