import React, { useRef } from "react";
import me from "../assets/img/Vampiric.webp";
import { aboutMeData } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import vampirico from "../assets/icons/Vampiric.ico";
import { useNavigate } from "react-router-dom";

const AboutMe: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { ref } = useSectionInView("Mazzi e liste");
  const navigate = useNavigate();
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const isExternalLink = (url:string) => url.startsWith("http");

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const onAutoplayTimeLeft = (_s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const paragraphs =
    language === "IT" ? aboutMeData.paragraphs_IT : aboutMeData.paragraphs_EN;

  return (
    <React.Fragment>
      <section className="about-me relative mt-16 " id="liste" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6 flex items-center">
              <span className="-left-8 top-3  mr-2">
                <img src={vampirico} className="w-20" />
              </span>
              {language === "IT" ? aboutMeData.title : aboutMeData.title_EN}
              <span className="ml-2 ">
                <img src={vampirico} className="w-20" />
              </span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {language === "IT"
                ? aboutMeData.description
                : aboutMeData.description_EN}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16  max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48">
          <article className="pl-10 max-lg:p-0">
            <img src={me} alt={me} />
          </article>
          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2"
          >
            {paragraphs.map((paragraph, index) => (
              <div
                className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-center gap-12 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-center max-lg:p-10 cursor-grab"
                key={index}
              >
                <div className="flex gap-10 flex-row justify-center items-center">
                  <div className="transform rotate-30">
                    <img
                      src={paragraph.icon}
                      alt={paragraph.title}
                      className="w-50"
                    />
                  </div>
                </div>
                <div>
                  <h2>{paragraph.title}</h2>
                  <p className="text-white text-4xl mt-4">
                    {paragraph.description}
                  </p>
                </div>
                <div className="flex gap-6 mt-6">
                  <button className="bg-orange text-white py-2 px-4 rounded">
                    {isExternalLink(paragraph.driveUrl) ? (
                      <a
                        href={paragraph.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vai alla lista
                      </a>
                    ) : (
                      <span onClick={() => navigate(paragraph.driveUrl)}>
                        Vai alla lista
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ))}
            <div
              className="autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-orange text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl "
              slot="container-end"
            >
              {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span> */}
            </div>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
