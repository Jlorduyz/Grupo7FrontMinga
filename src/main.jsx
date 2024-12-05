import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Layouts/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import { Welcome } from "./Pages/Register.jsx";
import { WelcomeBack } from "./Pages/RegisterBack.jsx";

import ProfilePage from "./Pages/Profile.jsx";
import '/app.css'

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
        element: <Manager />,
      },
      {
        path: "welcome", // Ruta para Register
        element: <Welcome></Welcome>,
      },
      {
        path: "welcomeback", // Ruta para RegisterBack
        element: <WelcomeBack></WelcomeBack>,
      },
      {
        path: "profile", // Ruta para Profile
        element: <ProfilePage></ProfilePage>,
      },
      
       
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
