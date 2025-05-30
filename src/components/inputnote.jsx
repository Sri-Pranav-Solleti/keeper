import React from "react";
import { Notes } from "./notes";
import "./index.css";

function Inputarea() {
  const [expanded, setexpanded] = React.useState(false);
  function handelexpand() {
    setexpanded(true);
  }
  function Makeanote(item, index) {
    return (
      <Notes
        key={index}
        title={item.title}
        description={item.description}
        id={index}
        checked={deleteitem}
      />
    );
  }

  const [note, setnote] = React.useState({
    title: "",
    description: "",
  });
  const [head, sethead] = React.useState([]);

  function handelchange(event) {
    const { name, value } = event.target;
    setnote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handeladd() {
    sethead((prevItems) => {
      return [...prevItems, note];
    });
    setnote({
      title: "",
      description: "",
    });
  }

  function deleteitem(id) {
    sethead((prevItems) => {
      return prevItems.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="out">
      <div className="inputstyle" checked={deleteitem}>
        {expanded ? (
          <input
            name="title"
            value={note.title}
            onChange={handelchange}
            className="one"
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="description"
          onClick={handelexpand}
          value={note.description}
          onChange={handelchange}
          placeholder="Take a note..."
          rows={expanded ? 5: 1}
        />
        <button className="buttonstyle" onClick={handeladd}>
          Add
        </button>
      </div>
      <div className="notebox"> {head.map(Makeanote)}</div>
    </div>
  );
}

export { Inputarea };
