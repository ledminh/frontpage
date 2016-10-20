#FRONTPAGE
###A front page for your website

This is a React component that can be modified to become a frontpage on your website.

##USAGE

###RUN DEMO

Clone this project to your local folder

```
git clone https://github.com/ledminh/frontpage your-project-folder
```

Install all dependencies

```
npm install
```

Run webpack-dev-server

```
webpack-dev-server --hot --inline --process --color
```

Your webpage is ready at http://localhost:8080


###USE IT IN YOUR APP

Install from npm
```
npm install frontpage --save
```

Import it to your app

```
import React from 'react';
import ReactDOM from 'react-dom';
import frontPageFactory from './frontpage';

var configure = {
  // Configuration of the frontpage
  // See example below
}

frontPageFactory.setup(configure);
const FrontPage = frontPageFactory.getComponent();

ReactDOM.render(FrontPage, document.getElementById('app'));
*/
```

Example of the configure

```
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
};

```
