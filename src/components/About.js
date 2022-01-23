import React from "react";
import Experience from "./Experience";
import Education from "./Education";

const about = () => {
  return (
    <div className="wrapper">
    <h1>About me</h1>
      <div style={{ width: "60%", float: "left" }}>
      <Experience />
      </div>
      <div style={{ width: "40%", float: "right" }}>
        
        <Education />
      </div>
    </div>
  );
};

export default about;
