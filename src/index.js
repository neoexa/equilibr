import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
