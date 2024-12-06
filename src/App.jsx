import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import EditChapter from "./Pages/EditChapter.jsx";
import AdminPanel from "./Pages/AdminPanel.jsx";
import Root from "./Layouts/Root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "mangas", element: <Mangas /> },
            { path: "manager", element: <Manager /> },
            { path: "edit-chapter", element: <EditChapter /> },
            { path: "admin-panel", element: <AdminPanel /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
