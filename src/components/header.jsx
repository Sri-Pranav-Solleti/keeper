import React from "react";
import "./index.css";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <div className="header">
      <h1 className="cursive">
        <HighlightIcon /> Keeper
      </h1>
    </div>
  );
}
export { Header };
