import React from 'react';
import ReactDOM from 'react-dom';

import frontPageFactory from './modules/frontpage';


const FrontPage = frontPageFactory.getComponent();

ReactDOM.render(FrontPage, document.getElementById('app'));
