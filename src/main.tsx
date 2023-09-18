import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import 'react-select-search/style.css'


import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { CelebrationsTable } from './pages/CelebrationsTable/CelebrationsTable.tsx';

import { AnimatePresence } from 'framer-motion';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/celebrations" element={<CelebrationsTable />} />

        </Routes>
      </AnimatePresence>
    </BrowserRouter>

  </React.StrictMode>
)
