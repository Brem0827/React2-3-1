const { createContext } = require('react');

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => null
})

export default ThemeContext;