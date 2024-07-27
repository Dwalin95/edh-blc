import { useEffect, useState, createContext, useContext } from "react";

type language = "EN" | "IT";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<language>("EN");

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("IT");
      window.localStorage.setItem("language", "IT");
      document.documentElement.classList.add("IT");
    } else {
      setLanguage("EN");
      window.localStorage.setItem("language", "EN");
      document.documentElement.classList.remove("IT");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === "IT") {
        document.documentElement.classList.add("IT");
      }
    } else if (window.matchMedia("(prefers-color-scheme: IT)").matches) {
      setLanguage("IT");
      document.documentElement.classList.add("IT");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }
  return context;
}
