import React from "react";
import ReactDOM from 'react-dom/client'; // Ensure you're using the correct import
import './styles/output.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Create root with React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally, you can enable service worker
serviceWorker.unregister();
