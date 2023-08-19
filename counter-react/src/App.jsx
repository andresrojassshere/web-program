import React from "react";
import { Header, Body, Footer, Button } from "./components";
function App() {
  const backgroundStyle = {
    background: "url('https://f4.bcbits.com/img/a1924344540_10.jpg')",
    backgroundSize: "cover",
  };

  const divButtonStyle = {
    width: "84.4%",
    heigth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    borderBottomLeftRadius: "20%",
    borderBottomRightRadius: "20%",
    background: "rgba( 120,185,213)",
    border: "2px solid black",
    marginRight: "100px",
    marginLeft: "100px",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <Header />
        <Body />
        <div style={divButtonStyle}>
          <Button label="add" />
          <Button label="substract" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
