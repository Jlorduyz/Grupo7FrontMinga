import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Layouts/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Importa el Provider
import store from "./Store/Store.js"; // Importa el store de Redux
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import EditChapter from "./Pages/EditChapter.jsx";
import AdminPanel from "./Pages/AdminPanel.jsx"; // Importa la nueva página

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
        path: "edit-chapter", // Ruta para EditChapter
        element: <EditChapter />, // Componente EditChapter
      },
      {
        path: "admin-panel", // Nueva ruta para AdminPanel
        element: <AdminPanel />, // Componente AdminPanel
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Envuelve toda la aplicación con Provider */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
