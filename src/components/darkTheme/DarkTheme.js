import { useRef, useEffect } from 'react';

import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import './darkTheme.scss';

import sum from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';

const DarkTheme = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());
    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            btnRef.current.classList.add('darkModeBtn-active');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            btnRef.current.classList.remove('darkModeBtn-active');
        }
    }, [darkMode]);
    
    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark" : "light";
            setDarkMode(newColorScheme);
        });
    }, []); 

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <button 
            className='darkModeBtn'
            onClick={() => toggleDarkMode()}
            ref={btnRef}
        >
            <img src={moon} alt="Темная тема" className='darkModeBtn__icon'/>
            <img src={sum} alt="Светлая тема" className='darkModeBtn__icon'/>
        </button>
    );
};

export default DarkTheme;