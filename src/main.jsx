import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme.js';
import { BrowserRouter } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { createHead, UnheadProvider } from '@unhead/react';

// const head = createHead();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UnheadProvider head={head}> */ }
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <BrowserRouter>
        <LocalizationProvider dateAdapter={ AdapterDayjs }>
          <App />
        </LocalizationProvider>
      </BrowserRouter>
    </ThemeProvider>
    {/* </UnheadProvider> */ }
  </React.StrictMode>,
);

