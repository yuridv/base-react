import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Config, Configuration, Test, Routes } from 'react-auto-import2'

console.log('[Config(1)]=> ', Configuration)
console.log('[Test(1)]=> ', Test)

Config({
  routes: 'src/routes'
})

console.log('[Config(2)]=> ', Configuration)
console.log('[Test(2)]=> ', Test)

createRoot(document.querySelector('#root'))
  .render(
    <BrowserRouter>
      { Routes }
    </BrowserRouter>
  );