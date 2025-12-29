import React from 'react';
// React 18+ uses the `react-dom/client` entry and createRoot API
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
// createRoot returns a root where you call render
const root = createRoot(container);

root.render(
    <App />
);