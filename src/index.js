import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let path = document.getElementById('root');

ReactDOM.render(<App/>, path);

if (module.hot) {
    module.hot.accept()
}
