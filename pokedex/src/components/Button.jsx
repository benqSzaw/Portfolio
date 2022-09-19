import { useState } from "react";
import "./Button.css";
import TypeColor from "./TypeColor";

const Button = ({ text, onClick }) => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    onClick(text, !active);
    setActive(!active);
  };

  return (
    <div
      className={active ? "button_type_active button_type" : "button_type"}
      style={{ background: active ? "" : TypeColor(text) }}
      onClick={clickHandler}
    >
      {text}
    </div>
  );
};

export default Button;
