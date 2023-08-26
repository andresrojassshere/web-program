import React from "react";
import { Header, Body, Footer, Button, Number } from "./components";
function App() {
  const backgroundStyle = {
    background: "white",
    backgroundSize: "cover",
  };

  const divButtonStyle = {
    width: "100%",
    heigth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <Header />
        <Body />
        <div style={divButtonStyle}>
          <Button label="add" />
          <Number />
          <Button label="substract" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
