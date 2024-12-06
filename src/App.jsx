import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import EditChapter from "./Pages/EditChapter.jsx";
import AdminPanel from "./Pages/AdminPanel.jsx";
import { Welcome } from "./Pages/Register.jsx";
import { WelcomeBack } from "./Pages/SignIn.jsx";
import Root from "./Layouts/Root.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/home", element: <Home /> },
            { path: "/mangas", element: <Mangas /> },
            { path: "/manager", element: <Manager /> },
            { path: "/edit-chapter", element: <EditChapter /> },
            { path: "/admin-panel", element: <AdminPanel /> },
            { path: "/welcome", element: <Welcome /> },
            { path: "/welcomeback", element: <WelcomeBack /> },
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
