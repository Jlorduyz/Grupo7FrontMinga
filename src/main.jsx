import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Router router={router}></Router>
  </StrictMode>,
)