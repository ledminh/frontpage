import React from 'react';

import functions from './functions';

require('./styles.scss');

const Button = ({id, name, link, style, onMouseOver, onMouseLeave, onClick}) => (
  <div className="button" id={id} style={style}
        onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
        onClick={onClick}>{name}</div>
);

export default functions(Button);
