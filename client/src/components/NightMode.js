import { FaMoon, FaSun } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
const NightMode = () => {
  const { toggleTheme, theme } = useAppContext();
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div>
      {theme === 'light-theme' ? (
        <FaMoon className="nightmode" onClick={toggleTheme} />
      ) : (
        <FaSun className="nightmode" onClick={toggleTheme} />
      )}
    </div>
  );
};

export default NightMode;
