import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Write from './components/Routes/Write.jsx'
import List from './components/Routes/List.jsx'
import Favorites from './components/Routes/Favorites.jsx'
const router = createBrowserRouter([{
  path:"/write",
  element: <Write></Write>,
},{
  path:"/",
  element: <List></List>,
},{
  path:"/favorites",
  element: <Favorites></Favorites>,
},{
  path:"/write",
  element: <Write></Write>,
},])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav></Nav>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
