import Link from "next/link";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

export default function Navbar() {
    const { toggleTheme, theme} = useContext(ThemeContext)
    const newThemeName = theme === 'dark' ? 'light' : 'dark'

    return(
        <div>
            <Link href='/' preload={false}>Home</Link> <br />
            <Link href='/about' preload={false}>About</Link> <br />
            <Link href='/contact' preload={false}>Contacts</Link> <br />
            <button onClick={toggleTheme}>
                Set {newThemeName} Theme
            </button>
        </div>
    );
}
