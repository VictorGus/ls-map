import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

function Root(props) {
  return(
      <App/>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
