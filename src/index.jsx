import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Config, Routes as routes } from 'react-auto-import2'

console.log('[Result]=> ', Routes)

createRoot(document.querySelector('#root'))
  .render(
    <BrowserRouter>
      <Routes>
        { routes }
      </Routes>
    </BrowserRouter>
  );