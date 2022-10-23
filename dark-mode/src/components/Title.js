import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";
const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleSwitch = (checked) => {
    setTheme(
        theme === "light" ? "dark": "light"
    );
  };
  return (
    <header>
      <span>Mode [{theme}]</span>
      <Switch onChange={toggleSwitch} checked={theme==="dark"} />
    </header>
  );
};

export default Title;
