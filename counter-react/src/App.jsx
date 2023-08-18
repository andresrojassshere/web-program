import React from "react"
import {Header, Body, Footer, Button} from "./components"
function App(){

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '0px'
}

    return(
        <>
          <Header />
          <Body />
          <div style={divStyle}>
            <Button label="add"/>
            <Button label="substract"/>
          </div>
          <Footer />
        </>
    )
}

export default App

