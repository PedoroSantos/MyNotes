import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav.jsx'

const router = createBrowserRouter({
  path:"/",
  element: <App></App>

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav></Nav>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
