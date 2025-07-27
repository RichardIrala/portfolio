import { useLanguage } from "../../context/LanguageContext";

function LangSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      className="langswitcher__button--option"
      onClick={() => setLang(lang === "en" ? "es" : "en")}
    >
      {lang === "en"
        ? "Cambiar idioma a Español"
        : "Switch Language to English"}
    </button>
  );
}

export default LangSwitcher;
