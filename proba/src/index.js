import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App1';
import './css/main.css';

// 👇 если в index.html есть <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
