"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "en" | "tr";

type LanguageContextType = {
  language: Language;
  isTurkish: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage === "en" || savedLanguage === "tr") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isTurkish: language === "tr",
        setLanguage,
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
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}