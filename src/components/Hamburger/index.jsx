import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const split2bin = {
  Heaven: "111",
  Wind: "110",
  Mountain: "100",
  Earth: "000",
  Thunder: "001",
  Lake: "011",
};

export default function Hamburger({ split = "Heaven" }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) {
      navigate("/");
    }
    setIsOpen(true);
  };
  return (
    <div
      tabIndex={0}
      onBlur={() => {
        setIsOpen(false);
      }}
      onClick={handleClick}
      className={"Hamburger" + (isOpen ? " Hamburger--Open" : "")}
    >
      {[...split2bin[split]].map((c, i) => {
        if (c === "0") {
          return (
            <span
              key={i}
              className="Hamburger__Bar Hamburger__Bar--Broken"
            ></span>
          );
        }
        return <span key={i} className="Hamburger__Bar"></span>;
      })}
    </div>
  );
}
