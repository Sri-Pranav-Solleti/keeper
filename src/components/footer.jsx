import React from "react";
import "./index.css";

let date = new Date().getFullYear();
function Footer() {
  return <p className="footerstyle">copyright @{date}</p>;
}

export { Footer };
