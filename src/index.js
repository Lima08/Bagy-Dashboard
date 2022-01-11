// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
