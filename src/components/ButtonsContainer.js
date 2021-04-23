import { useState } from "react";
import Buttons from "./Buttons";
import styles from "../css/ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const [buttonValues, setButtonsValues] = useState([
      7,
      8,
      9,
      "/",
      4,
      5,
      6,
      "x",
      1,
      2,
      3,
      "-",
      "clear",
      0,
      "+",
      "=",
    ]);

  return(
    <div className={styles.button}>
      {buttonValues.map((value) => (
        <Buttons key={value} data={value} />
      ))}
    </div>
  )
}

export default ButtonsContainer;