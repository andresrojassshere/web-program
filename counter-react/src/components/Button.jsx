import React from "react";

export function Button({label}) {
    let buttonStyle;

    if(label == 'add'){
        buttonStyle ={
            backgroundColor: 'rgba( 68, 255, 51)',
            color : 'black',
            width: '200px',
            height:'100px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft : '20px',
            margintRight : '20px'
        }
    }

    if(label == 'substract'){
        buttonStyle = {
            backgroundColor: 'rgba( 239, 54, 26)',
            color : 'black',
            width: '200px',
            height:'100px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft : '20px',
            margintRight : '20px'
        }
    }

    return (
        <div>
            <button style={buttonStyle}> 
                {label} 
            </button>
        </div>
    )
}