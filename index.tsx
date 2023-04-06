import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { EmployeesProvider, UIProvider, UserProvider } from './context';

import { lightTheme } from './themes';
import { App } from './App';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import "./index.css"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <UserProvider>
        <EmployeesProvider>
          <UIProvider>
            <ProSidebarProvider>
              <BrowserRouter>
                <CssBaseline />
                <ThemeProvider theme={lightTheme}>
                  <App />
                </ThemeProvider>
              </BrowserRouter>
            </ProSidebarProvider>
          </UIProvider>
        </EmployeesProvider>
      </UserProvider>
    </LocalizationProvider>
  </React.StrictMode>
);

