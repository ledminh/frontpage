/*
===============================
BUTTON COMPONENT
===============================
import Button from './components/button';

Button.createComponent({name: "Your Button",
                        style: {
                          add-your: button,
                          style: here
                        },
                        hoverStyle: {
                          your-button: style,
                          when-being: hover
                        },
                        onClick: a-function
                    });

*/

import React from 'react';
import Button from './button';

var numComponents = 0;

function createComponent({name, style, hoverStyle, onClick, onMouseOver, onMouseLeave}){
  numComponents++;

  var id = "button_" + numComponents + new Date().getTime();

  return <Button key={numComponents} id={id} name={name}
            style={style} hoverStyle={hoverStyle}
            onClick={onClick} onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}/>;
}

export default {
    createComponent
}
