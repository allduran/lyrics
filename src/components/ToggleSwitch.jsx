import { useState, useEffect } from 'react';
import '../styles/ToggleSwitch.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

const ToggleSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if(isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <button className={isDarkMode ? 'toggle-theme toggle-dark' : 'toggle-theme toggle-light'} onClick={toggleTheme}>
            <img src={isDarkMode ? moon : sun} alt="Theme Icon" />
        </button>
    )
};

export default ToggleSwitch;