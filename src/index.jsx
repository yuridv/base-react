import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Config, Routes, Layouts, Router } from '../libs/react-auto-import'

console.log('[Routes]=> ', Routes)
console.log('[Layouts]=> ', Layouts)
console.log('[Router]=> ', Router)

createRoot(document.querySelector('#root'))
  .render(
    <RouterProvider router={ createBrowserRouter(Router) } />
  );