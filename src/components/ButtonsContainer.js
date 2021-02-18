import { useState } from "react";

const ButtonsContainer = () => {
  const [buttonValues, setButtonsVaules] = useState([
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
    <div className={buttons}>
      <p>some buttons here</p>
      <p>some additional buttons here</p>
    </div>
  )
}

export default ButtonsContainer;