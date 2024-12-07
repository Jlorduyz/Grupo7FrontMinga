import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import EditChapter from "./Pages/EditChapter.jsx";
import AdminPanel from "./Pages/AdminPanel.jsx";
import { Welcome } from "./Pages/Register.jsx";
import { WelcomeBack } from "./Pages/SignIn.jsx";
import Root from "./Layouts/Root.jsx";
import Home from "./Pages/Home.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./Store/actions/AuthActions.js";
import DetailsManga from "./Pages/DetailsManga.jsx";
import NewRole from "./Pages/NewRole.jsx";
import Error404 from "./Pages/Error404.jsx";
const router = createBrowserRouter([
  
    {element: <Root />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/mangas", element: <Mangas /> },
            { path: "/manager", element: <Manager /> },
            { path: "/edit-chapter", element: <EditChapter /> },
            { path: "/admin-panel", element: <AdminPanel /> },
            { path: "/welcome", element: <Welcome /> },
            { path: "/welcomeback", element: <WelcomeBack /> },
            { path: "/detailManga", element: <DetailsManga /> },
            { path: "/new-role", element: <NewRole /> },
            {path:"/*",element:<Error404/>},
        ],
    },
]);

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/api/users/validationToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    return (
      response.data.response
    )
  } catch (error) {
    console.log("error", error);

  }
}

function App() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }))
    })
  }
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

