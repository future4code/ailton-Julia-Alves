import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyled } from './Global.styled';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyled/>
    <App />
  </React.StrictMode>
);