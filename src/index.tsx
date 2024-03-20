import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

declare global {
  interface Window {
    Desmos: any;
  }
}

declare global {
  interface Window {
    MathJax: any;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.MathJax = {
  loader: { load: ["[tex]/cases"] },
  tex: { packages: { "[+]": ["cases"] } },
};

window.MathJax = {
  tex: {
    autoload: {
      cases: [[], ['numcases', 'subnumcases']]
    }
  }
};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
