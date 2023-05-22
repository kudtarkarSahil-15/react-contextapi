import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <>
    <span className="px-2">off</span>
      <label className="switch" onChange={ () => {
            setThemeMode(themeMode === "light" ? "dark" : "light")
            console.log("clicked..!!")
        }}>
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    <span className="px-2">on</span>
    </>
  );
};

export default ThemeToggler;
