import ThemeContext from "../context/ThemeContext";
import React, { useContext } from "react";

function Header() {

    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <h2>Current theme :{theme}</h2>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                Toggle Theme
            </button>

        </div>
    )

}
export default Header;