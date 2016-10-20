import React from 'react';
import {SampleScreen, startAnimation, animation, endAnimation} from './sample';


const defaultConfigure = {
  title: "MINH LE",
  buttons: {
    "GOOGLE": {
      link: "http://www.google.com",
      screen: <SampleScreen name="GOOGLE"/>,
      startAnimation: startAnimation,
      animation: animation,
      endAnimation: endAnimation
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

export default defaultConfigure;
