import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import jQuery from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
window.jQuery = jQuery;

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
