import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Config, Routes } from 'react-auto-import2'

console.log('[Result]=> ', Routes)

createRoot(document.querySelector('#root'))
  .render(
    <RouterProvider router={ Routes.router } />
  );