/*
========================
USAGE
========================
import React from 'react';
import ReactDOM from 'react-dom';
import frontPageFactory from './frontpage';

var configure = {
  title: "MINH LE"
  buttons: {
    "GOOGLE": {
      link: "http://www.google.com",
      screen: <SampleScreen name="GOOGLE"/>,
      startAnimation: startAnimation, //function
      animation: animation, //function
      endAnimation: endAnimation //function
    },
    "YAHOO" : {
      link: "http://www.yahoo.com",
      screen: <SampleScreen name="YAHOO"/>,
      startAnimation: startAnimation,
      animation: animation,
      endAnimation: endAnimation
    },
    "LEDMINH" : {
      link: "http://www.ledminh.com",
      screen: <SampleScreen name="LEDMINH"/>,
      startAnimation: startAnimation,
      animation: animation,
      endAnimation: endAnimation
    }
  },
  design: {
    "top": "100px",
    "height": "400px",
    "layer-1-color": "cyan",
    "layer-4-opacity": ".5",
    "title-color": "white",
    "button": {
      "background-color": "orange",
      "color" : "black",
      "font-weight": "bold",
      "margin-right": "5px",
      "hover": {
        "background-color": "black",
        "color": "white"
      }
    }
  }
}

frontPageFactory.setup(configure);
const FrontPage = frontPageFactory.getComponent();

ReactDOM.render(FrontPage, document.getElementById('app'));
*/


import React from 'react';
import FrontPage from './frontpage';

import defaultConfigure from './default/configure';

var configure = {};

export const setup = (conf) => {
  configure = Object.assign({}, defaultConfigure, conf);
};

function getComponent() {
  return <FrontPage title={configure.title || defaultConfigure.title}
                    buttons={configure.buttons || defaultConfigure.buttons}
                    design={configure.design || defaultConfigure.design}/>;
}

export default {
  setup,
  getComponent
}
