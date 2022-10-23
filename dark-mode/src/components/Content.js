import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Content = () => {
   const {theme} =  useContext(ThemeContext)
  return (
    <main className={theme ==="dark"? "dark": "light"}>
      <div>
        <h1>KongRuksiam official</h1>
        <p>DarkMode Workshop</p>
      </div>
      <img src={light} alt="Logo" />
    </main>
  );
};

export default Content;
