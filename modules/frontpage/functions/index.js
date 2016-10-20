import React from 'react';
import ReactDOM from 'react-dom';


const functions = (FrontPage) => {
  class FrontPageWrapper extends React.Component {
    constructor(props){
        super(props);

        //Binding
        this.buttonOnMouseOver = this.buttonOnMouseOver.bind(this);
        this.buttonOnMouseLeave = this.buttonOnMouseLeave.bind(this);
    }

    buttonOnMouseOver(name) {
        return () => {
            var layer2_DOM = document.getElementById('layer-2');
            var Screen = this.props.buttons[name].screen;

            ReactDOM.render(Screen, layer2_DOM);

            layer2_DOM.style.display = "block";
            this.props.buttons[name].startAnimation();
            this.props.buttons[name].animation();
        }

    }

    buttonOnMouseLeave(name){
        return () => {
          document.getElementById('layer-2').style.display = "none";
          this.props.buttons[name].endAnimation();
        };
    }

    render(){
        var buttonHoverStyle = this.props.design.button.hover;
        var buttonStyle = {};

        Object.keys(this.props.design.button).forEach((style) => {
          if(style !== "hover"){
              buttonStyle[style] = this.props.design.button[style];
          }
        });

        return <FrontPage title={this.props.title} buttons={this.props.buttons} design={this.props.design}
                    buttonStyle={buttonStyle} buttonHoverStyle={buttonHoverStyle}
                    buttonOnMouseOver={this.buttonOnMouseOver} buttonOnMouseLeave={this.buttonOnMouseLeave}/>
    }
  }

  return FrontPageWrapper;
}

export default functions;
