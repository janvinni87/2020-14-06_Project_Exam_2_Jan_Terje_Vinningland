import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const reactDom = target => {
  ReactDOM.render(
    <App />,
    target,
  );
};

const target = document.querySelector('#root');

if (target) {
  reactDom(target);
}
