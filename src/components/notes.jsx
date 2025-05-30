import React from "react";
import "./index.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Notes(props) {
  function now() {
    props.checked(props.id);
  }
  return (
    <div className="notestyle">
      <h1>
        <b>{props.title}</b>
      </h1>
      <p> {props.description}</p>
      <button onClick={now} className="buttonstyle">
        <DeleteIcon />
      </button>
    </div>
  );
}
export { Notes };
