import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContext';

const favicon = document.querySelector('link[rel="icon"]')

document.addEventListener("visibilitychange", () => {
    const hidden = document.hidden

    favicon.setAttribute(
        "href", 
        `/favicon${hidden ? "-hidden" : ""}.ico`
    )
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

