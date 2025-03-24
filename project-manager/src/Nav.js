import React from "react";
import "./index.css";
export default function Nav() {
  return (
    <div className="nav">
      <span>
        <img src="./notepad.jpeg" alt="Notepad" style={{ height: "100px" }} />
      </span>
      <span>
        <h4 style={{fontFamily:'serif', color:'whitesmoke'}}>Create and Complete</h4>
      </span>
    </div>
  );
}
