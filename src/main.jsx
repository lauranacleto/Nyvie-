
import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './app/(tabs)/login/login';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
