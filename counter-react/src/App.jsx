import React from "react"
import {Header, Body, Footer, Button} from "./components"
function App(){

  const divButtonStyle = {
    width: '100%',
    heigth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px'
}

    return(
        <>
          <Header />
          <Body />
          <div style={divButtonStyle}>
            <Button label="add"/>
            <Button label="substract"/>
          </div>
          <Footer />
        </>
    )
}

export default App

