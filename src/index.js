import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/**
 * App entry point. Renders the app into the <div id="root"> element in index.hmtl file.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
