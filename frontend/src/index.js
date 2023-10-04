import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const favicon = document.querySelector('link[rel="icon"]')

document.addEventListener("visibilitychange", () => {
    const hidden = document.hidden

    favicon.setAttribute(
        "href", 
        `/favicon${hidden ? "-hidden" : ""}.ico`
    )
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

