import React from 'react';

import Button from './components/button';
import functions from './functions';

require('./styles.scss');


const FrontPage = ({title, buttons, design, buttonStyle, buttonHoverStyle, buttonOnMouseOver, buttonOnMouseLeave}) => (
  <div>
      <div className="layer-1" style={{"top": design.top, "height": design.height,
                                        "background-color": design["layer-1-color"]}} />

      <div className="layer-2" id="layer-2" style={{"top": design.top, "height": design.height}}></div>

      <div className="layer-3" style={{"top": design.top, "height": design.height}}>
          <div className="title" style={{"color": design["title-color"]}}>{title}</div>
      </div>


      <div className="layer-4" style={{"background-color": "rgba(0,0,0," + design["layer-4-opacity"] + ")",
                                      "top": design.top, "height": design.height}}>
        <div className="buttons">
            {
              (()=>{
                var results = [];
                Object.keys(buttons).forEach((name, i) => {
                    results.push(Button.createComponent({name, style:buttonStyle, hoverStyle: buttonHoverStyle,
                                        onClick: () => {location.href = buttons[name].link},
                                        onMouseOver: buttonOnMouseOver(name),
                                        onMouseLeave: buttonOnMouseLeave(name)}));
                });

                return results;
              })()

            }
        </div>
      </div>
  </div>
);


export default functions(FrontPage);
