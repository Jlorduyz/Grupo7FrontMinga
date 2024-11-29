import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from "./Layouts/Root.jsx"
import Home from './Pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  children:[
    {
      path:'/',
      element: <Home/>
    }
  ],
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)