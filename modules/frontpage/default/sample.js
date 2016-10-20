import React from 'react';

require('./sample_style.scss');

var intervalID = null,
    top = 0;

export const SampleScreen = ({name}) => (
  <div className="sample-screen" id="sample-screen">
      <div className="sample-screen-name" id="sample-screen-name">{name}</div>
  </div>
);

export const startAnimation = () => {
    top = 0;
    document.getElementById('sample-screen-name').style.top = top + "px";
};

export const animation = () => {
  intervalID = setInterval(() => {
    document.getElementById('sample-screen-name').style.top = top + "px";
    top++;
  }, 100);
};

export const endAnimation = () => {
  clearInterval(intervalID);
};
