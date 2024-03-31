import React from 'react';
import ReactDOM from 'react-dom';
import { NextUIProvider } from '@nextui-org/react'; // Import NextUIProvider from NEXT UI
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NextUIProvider> {/* Wrap your App component with NextUIProvider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUIProvider>
);

reportWebVitals();
