import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
function App() {
  const { theme, setTheme } = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1> Current Theme: {theme} </h1>
        <Header />
      </div>
    </ThemeContext.Provider>
  )

}
export default App;