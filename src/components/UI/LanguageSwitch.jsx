import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function LanguageSwitch() {
    const { t, i18n } = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  
  
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
    };

  return (
    <div className="flex gap-[10px] justify-center items-center">
        <button
            onClick={() => changeLanguage('en')}
            className={`font-days ${currentLanguage === 'en' ? 'text-custom-orange' : ''}`}
        >
            EN
        </button>
        <button
            onClick={() => changeLanguage('ru')}
            className={`font-days ${currentLanguage === 'ru' ? 'text-custom-orange' : ''}`}
        >
            RU
        </button>
    </div>
  )
}
