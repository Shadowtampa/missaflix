import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import 'react-select-search/style.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CelebrationsTable } from './pages/CelebrationsTable/CelebrationsTable.tsx';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

import SelectSearch from 'react-select-search';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/celebrations",
    element: <CelebrationsTable />,
  },
]);

const options = [
  {name: 'Santa Terezinha', value: 'stte'},
  {name: 'Perpétuo Socorro', value: 'prsc'},
];


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MissaFlix
          </Typography>

          <SelectSearch options={options} placeholder="Todas as Igrejas" />

        </Toolbar>
      </AppBar>


      <RouterProvider router={router} />
    </Box>
  </React.StrictMode>
)
