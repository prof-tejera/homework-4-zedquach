import styles from "../style/Button.module.css";
import { useState } from "react";

const Operation = ({ value, onClick }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <button
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        cursor: "pointer"
      }}
      onClick={() => onClick(value)}
      onMouseDownCapture={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
      className={clicked ? styles.clickAnimate : ""}
    >
      {value}
    </button>
  );
};

export default Operation;
