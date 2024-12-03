import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Layouts/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "mangas",
        element: <Mangas />,
      },
      {
        path: "manager", // Ruta para Manager
        element: <Manager />, // Componente Manager
      },
      {
        path: "RegisterPage",
        element: <RegisterPage />,
      },
      {
        path: "LoginPage",
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
