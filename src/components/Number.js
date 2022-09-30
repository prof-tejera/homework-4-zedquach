import { useState } from "react";
import styles from "../style/Button.module.css";

const Number = ({ value, onClick, style}) => {
  const [clicked, setClicked] = useState(false)
  return (
    <button
      style={{
        width: "60px",
        border: "1px solid black",
        cursor: "pointer",
        flexGrow: "1",
        ...style
      }}
      onClick={() => {
        onClick(value)
      }}
      onMouseDownCapture={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
      className={clicked ? styles.clickAnimate : ""}
    >
      {value}
    </button>
  );
};

export default Number;
