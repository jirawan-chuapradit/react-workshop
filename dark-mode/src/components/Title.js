import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";
const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleSwitch = (checked) => {
    setTheme(checked);
  };
  return (
    <header>
      <span>Mode [{theme}]</span>
      <Switch />
    </header>
  );
};

export default Title;
