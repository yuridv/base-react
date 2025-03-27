import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Config, Routes as Test } from 'react-auto-import2'

Config({
  Routes: {
    dir: '/src/routes2',
  },
});

console.log('[Result]=> ', Test)

createRoot(document.querySelector('#root'))
  .render(
    <BrowserRouter>
      <Routes>
        {/* <Route path={ '/' } element={ <a>Page /</a> } /> */}
        { Test }
      </Routes>
    </BrowserRouter>
  );