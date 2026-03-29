import { useCallback, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { Lang } from "~/types";

function LangSwitcher() {
  const { lang, setLang } = useLanguage();
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const changeLanguage = useCallback((value: Lang) => {
    setLang(value);
    setShowOptions(false);
  }, []);

  return (
    <div>
      <button
        className="langswitcher__button--option"
        onClick={() => setShowOptions(!showOptions)}
      >
        {lang === "en" ? "Language: English" : "Idioma: Español"}
      </button>

      <div className="langswitcher__relativeContainer">
        {showOptions && (
          <div className="langswitcher__optionsContainer">
            <div
              className="langswitcher__option"
              onClick={() => changeLanguage("en")}
            >
              English
            </div>
            <div className="langswitcher__horizontalLine"></div>
            <div
              className="langswitcher__option"
              onClick={() => changeLanguage("es")}
            >
              Español
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LangSwitcher;
