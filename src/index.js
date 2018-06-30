import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
