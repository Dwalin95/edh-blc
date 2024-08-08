import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../assets/lib/data";
import ScrollToAnchor from "./Listener";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import LanguageSwitch from "./LanguageSwitch";
import magic from "../assets/icons/magic.webp";
import morteNera from "../assets/icons/MorteNera.webp";
import logo from "../assets/img/logo.webp";

const NavBar: React.FC = () => {
  const location = useLocation();
  const isSearchList = location.pathname === "/searchList";

  const iconMap: { [key: string]: string } = {
    Home: logo,
    Magic: magic,
    "Star Wars Unlimited": morteNera,
    Contact: logo,
  };

  const { theme } = useTheme();
  const { language } = useLanguage();

  const [isSticky, setIsSticky] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.outerHeight * 0.1;
      setIsSticky(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileMenuActive(true);
        setIsSticky(false);
      } else {
        setIsMobileMenuActive(false);
        setIsSticky(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomNavLink: React.FC<CustomNavLinkProps> = ({ link, children, linkEn }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLinkActive = isHovered || linkEn === activeSection;

    const linkClasses = isLinkActive
      ? "transition-all duration-200 relative"
      : "opacity-20 transition-all duration-700";

    const iconSrc = linkEn && iconMap[linkEn] ? iconMap[linkEn] : "";

    const leftArrow = isLinkActive && (
      <span className="text-[--orange] absolute -left-12 top-1 max-lg:hidden">
        <img src={iconSrc} className="w-10" />
      </span>
    );

    return (
      <NavLink
        to={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${linkClasses}`}
      >
        <span>
          {leftArrow}
          {children}
        </span>
      </NavLink>
    );
  };

  return (
    <React.Fragment>
      <ScrollToAnchor />
      {!isMobileMenuActive && (
        <nav
          className={`max-lg:hidden flex-row flex justify-center items-center gap-24 font-semibold p-5 top-0 ${
            isSticky && !isMobileMenuActive
              ? `sticky top-10 z-50 ml-auto mr-auto w-max px-16 py-5 transition-all ease-in-out duration-100 rounded-full border border-white border-opacity-40 bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${
                  theme === "dark" ? "bg-darkblue" : "bg-white"
                }`
              : ""
          }`}
        >
          {isSearchList ? (
            <CustomNavLink link="/" linkEn="Home">
              {language === "IT" ? "Home" : "Home"}
            </CustomNavLink>
          ) : (
            navLinks.map((link, index) => (
              <CustomNavLink key={index} link={link.hash} linkEn={link.en}>
                {link.en === activeSection ? (
                  <div>{language === "IT" ? link.it : link.en}</div>
                ) : (
                  <div
                    onClick={() => {
                      setActiveSection(link.en);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {language === "IT" ? link.it : link.en}
                  </div>
                )}
              </CustomNavLink>
            ))
          )}
          {!isSearchList && <LanguageSwitch />}
        </nav>
      )}
      {isMobileMenuActive && (
        <nav
          className={`max-lg:flex w-[100vw] flex-row justify-between fixed bottom-0 left-0 z-50 bg-darkblue p-10 text-center items-center transition-all ease-in-out duration-100 rounded-t-3xl bg-opacity-100 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${
            theme === "dark" ? "bg-darkblue" : "bg-white"
          }`}
        >
          {isSearchList ? (
            <CustomNavLink link="/" linkEn="Home">
              <div className="text-[3.2rem] flex flex-col items-center">
                <img src={iconMap["Home"]} className="w-8 h-8" />
              </div>
            </CustomNavLink>
          ) : (
            navLinks.map((link, mobileIndex) => (
              <CustomNavLink key={mobileIndex} link={link.hash} linkEn={link.en}>
                {link.en === activeSection ? (
                  <div className="text-[3.2rem] flex flex-col items-center">
                    <img src={iconMap[link.en]} className="w-8 h-8" />
                  </div>
                ) : (
                  <div
                    className="text-[2rem] flex flex-col items-center"
                    onClick={() => {
                      setActiveSection(link.en);
                      setTimeOfLastClick(Date.now());
                      if (link.en === "Home") {
                        document.body.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    <img src={iconMap[link.en]} className="w-6 h-6" />
                  </div>
                )}
              </CustomNavLink>
            ))
          )}
          {!isSearchList && <LanguageSwitch />}
        </nav>
      )}
    </React.Fragment>
  );
};

interface CustomNavLinkProps {
  link: string;
  children: React.ReactNode;
  linkEn?: string;
}

export default NavBar;
