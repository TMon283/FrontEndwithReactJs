import React, { createContext, useContext, useState} from 'react';
import type { ChangeEvent } from 'react';

type Language = 'en' | 'vi';

const LanguageContext = createContext<Language>('en');

function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>('en');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  const Greeting = () => {
    const lang = useContext(LanguageContext);
    return <h2>{lang === 'en' ? 'Welcome!' : 'Xin chào!'}</h2>;
  };

  return (
    <LanguageContext.Provider value={language}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <label>Ngôn ngữ hiện tại: </label>
        <select value={language} onChange={handleChange}>
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
        </select>
        <Greeting />
      </div>
    </LanguageContext.Provider>
  );
}

export default LanguageSwitcher;
