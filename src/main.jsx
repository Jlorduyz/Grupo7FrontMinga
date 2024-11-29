import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from "./Layouts/Root.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)