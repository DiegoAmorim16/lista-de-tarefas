import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>,
);
