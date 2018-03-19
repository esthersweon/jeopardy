import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
