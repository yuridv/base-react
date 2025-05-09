import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Config, Routes } from '../libs/react-auto-import'

createRoot(document.querySelector('#root'))
  .render(
    <RouterProvider router={ Routes.router } />
  );