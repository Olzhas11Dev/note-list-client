import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  // <React.StrictMode>   // materia ui givs a problem
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <App />,
// document.getElementById('root')
// );
