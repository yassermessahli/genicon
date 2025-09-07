import i18n from "@/i18n";
import { resources as languages } from "@/locales/resources";

export function useLanguageOptions() {
  // Keep all language definitions intact, but only display EN and AR in the UI
  const allLanguages = Object.keys(languages);
  const DISPLAY_LANGUAGES = ["en", "ar"];
  const supportedLanguages = DISPLAY_LANGUAGES.filter((lng) =>
    allLanguages.includes(lng)
  );

  const languageNames = new Intl.DisplayNames(supportedLanguages, {
    type: "language",
  });

  const changeLanguage = (newLang = "en") => {
    if (!allLanguages.includes(newLang)) return false;
    i18n.changeLanguage(newLang);
  };

  return {
    currentLanguage: i18n.language || "en",
    supportedLanguages,
    getLanguageName: (lang = "en") => languageNames.of(lang),
    changeLanguage,
  };
}
