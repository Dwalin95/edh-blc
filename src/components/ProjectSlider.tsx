import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { ToastContainer } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import magic from "../assets/icons/magic.webp";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Magic");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className="skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2"
        id="magic"
        ref={ref}
      >
        <ToastContainer
          className="w-max text-3xl block p-3"
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6 flex items-center justify-between">
                <span className="flex-shrink-0 mr-2">
                  <img src={magic} className="w-20" />
                </span>
                {language === "IT"
                  ? "Magic The Gathering"
                  : "Magic The Gathering"}
                <span className="flex-shrink-0 ml-2">
                  <img src={magic} className="w-20" />
                </span>
              </p>
              <h2 className="text-[--white] mb-16">
                {language === "IT"
                  ? "News dal Magic! 🪄"
                  : "News from Magic! 🪄"}
              </h2>
            </motion.div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className="w-[60vw] max-lg:hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {projectsData.map((project, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-between rounded-2xl p-20 text-left max-lg:hidden"
                >
                  <div className="w-[55%] flex flex-col gap-12 justify-between">
                    <h2>{project.title}</h2>
                    <p className="text-white">
                      {language === "IT"
                        ? project.description
                        : project.description_EN}
                    </p>
                    {/* --- icone costo di mana commentate --- */}
                    {/* <div className="technologies">
                      <h3>
                        {language === "IT" ? "Costo di mana" : "Mana cost"}
                      </h3>
                      <div className="grid grid-cols-6 gap-10 p-4">
                        {project.technologies.map(
                          (technology, innerIndex: number) => (
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="h-[5rem] w-[60%]"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                          )
                        )}
                      </div>
                    </div> */}
                    <div className="buttons flex flex-row flex-wrap gap-2 max-w-full max-lg:flex-col max-lg:items-center">
                      <>
                        <Button
                          label="Instagram"
                          link={project.mtgGoldfishUrl}
                          iconSVG={project.mtgGoldfishIcon}
                          buttoncolor={project.colors.main}
                          iconcolor={project.colors.icon}
                          className="w-full max-lg:w-1/2 max-lg:w-auto"
                        />
                        <Button
                          label="Twitch"
                          link={project.driveUrl}
                          iconSVG={project.downloadIcon}
                          buttoncolor={project.colors.main}
                          iconcolor={project.colors.icon}
                          className="w-full max-lg:w-1/2 max-lg:w-auto"
                        />
                      </>
                    </div>
                  </div>
                  <div className="right-content relative h-[40rem] overflow-hidden rounded-xl w-[40%] transition-all duration-200 ">
                    <div
                      dangerouslySetInnerHTML={{ __html: project.embedHtml }}
                      className="w-full"
                    />
                    {/* <img
                      src={project.image}
                      alt={`${project.title}-project-mockup`}
                      className={`w-full h-auto transition-all duration-[6000ms] transform opacity-100 hover:translate-y-[-50%]`}
                    /> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {projectsData.map((project, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <h2 className="text-white">{project.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: project.embedHtml }}
                  className="w-full"
                />
                <div className="flex justify-center items-center gap-4">
                  <Button
                    label=""
                    link={project.mtgGoldfishUrl}
                    iconSVG={project.mtgGoldfishIcon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                    className="w-[45%]"
                  />
                  <Button
                    label=""
                    link={project.driveUrl}
                    iconSVG={project.downloadIcon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                    className="w-[45%]"
                  />
                </div>
                <p className="text-white max-lg:text-4xl">
                  {language === "IT"
                    ? project.description
                    : project.description_EN}
                </p>
                {/* --- Commentati costi di mana --- */}
                {/* <div className="technologies">
              <h3 className="text-white">
                {language === "IT" ? "Costo di mana" : "Mana cost"}
              </h3>
              <div className="grid grid-cols-3 gap-10 p-4">
                {project.technologies.map(
                  (technology, innerIndex: number) => (
                    <img
                      key={innerIndex}
                      src={technology.icon}
                      alt={`${project.title}-icon`}
                      className="h-[5rem] w-[60%]"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={technology.name}
                    />
                  )
                )}
              </div>
            </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>
      <LiveTicker />
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default ProjectSlider;
