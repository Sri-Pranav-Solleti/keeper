import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Inputarea } from "./components/inputnote";

function App() {
  return (
    <div>
      <Header></Header>
      <Inputarea />
    </div>
  );
}

function Appfoot() {
  return <Footer></Footer>;
}

export { App, Appfoot };
