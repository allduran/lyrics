import { useLanguage } from '../context/useLanguage';

const Header = () => {
  const { language, translations } = useLanguage();

  return (
    <h1>{translations[language].title}</h1>
  );
};

export default Header;
