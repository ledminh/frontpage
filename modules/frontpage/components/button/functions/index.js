import React from 'react';

const functions = (Button) => {
  class ButtonWrapper extends React.Component{
      constructor(props){
          super(props);

          this.onMouseOver = this.onMouseOver.bind(this);
          this.onMouseLeave = this.onMouseLeave.bind(this);
      }

      onMouseOver(){
          Object.keys(this.props.hoverStyle).forEach((style) => {
            document.getElementById(this.props.id).style[style] = this.props.hoverStyle[style];
          });

          this.props.onMouseOver();
      }

      onMouseLeave(){
        Object.keys(this.props.style).forEach((style) => {
            document.getElementById(this.props.id).style[style] = this.props.style[style];
        });

        this.props.onMouseLeave();
      }


      render(){
        return <Button id={this.props.id}
                  name={this.props.name} link={this.props.link}
                  style={this.props.style} onMouseOver={this.onMouseOver}
                  onMouseLeave={this.onMouseLeave}
                  onClick={this.props.onClick}/>;
      }
  }

  return ButtonWrapper;
}

export default functions;
