import React from "react";
import Tilt from "react-tilt";
import brain from "./icons8-brain-64.png";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="logo" style={{ paddingTop: "14px" }} />{" "}
        </div>
      </Tilt>
      ;
    </div>
  );
};

export default Logo;
