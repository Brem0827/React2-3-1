import '@/styles/globals.css'
import { useState } from 'react'
import ThemeContext from '@/components/ThemeContext'
import Navbar from '@/components/Navbar';

const themes = {
  dark: {
    background: 'black',
    color: 'white'
  },
  light: {
    background: 'white',
    color: 'black'
  }
}

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          ...themes[theme]
        }}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
};
