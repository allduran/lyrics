import { useLanguage } from '../context/useLanguage';

import '../styles/ToggleLanguage.css';

const ToggleLanguage = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="toggle-language">
      {language === 'EN' ? 'EN' : 'ES'}
    </button>
  );
};

export default ToggleLanguage;
