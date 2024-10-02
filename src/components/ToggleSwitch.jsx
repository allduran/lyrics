import { useState, useEffect } from 'react';
import '../styles/ToggleSwitch.css';

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
            <i class={isDarkMode ? "bi bi-moon-fill" : "bi bi-sun-fill"}></i>
            </button>
    )
};

export default ToggleSwitch;