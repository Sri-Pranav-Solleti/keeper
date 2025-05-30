import React from "react";
import { createRoot } from "react-dom/client";
import { App, Appfoot } from "./App";

const root = createRoot(document.getElementById("root"));
const root1 = createRoot(document.getElementById("root1"));

const bodyStyle = document.body.style;
bodyStyle.margin = 0;
bodyStyle.padding = 0;

root.render(
  <>
    <App></App>
  </>
);

root1.render(<Appfoot></Appfoot>);
