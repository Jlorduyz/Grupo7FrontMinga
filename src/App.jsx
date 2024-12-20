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
import ReadManga from "./Pages/ReadManga.jsx";
import NewRole from "./Pages/NewRole.jsx";
import Error404 from "./Pages/Error404.jsx";
import Profile from "./Pages/Profile";
import Favourites from "./Pages/Favourites";
import PrivateRoute from "./Components/Routes/PrivateRoute.jsx";
import SignRoute from "./Components/Routes/SignRoute.jsx";
import NewChapter from "./Pages/NewChapter.jsx"
import PrivateUpdAuthor from "./Components/Routes/PrivateUpdAuthor.jsx";
import NewAuthor from "./Pages/NewAuthor.jsx";
import NewManga from "./Pages/NewManga.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/mangas", element: <Mangas/> },
      { path: "/manager", element: <PrivateRoute><Manager /></PrivateRoute> },
      { path: "/edit-chapter", element: <EditChapter /> },
      { path: "/admin-panel", element: <AdminPanel /> },
      { path: "/welcome", element: <SignRoute><Welcome /></SignRoute> },
      { path: "/welcomeback", element: <SignRoute><WelcomeBack /></SignRoute> },
      { path: "/detailManga", element: <PrivateRoute><DetailsManga /></PrivateRoute> },
      { path: "/new-role", element: <NewRole /> },
      { path: "/readManga", element: <PrivateRoute><ReadManga /></PrivateRoute> },
      { path: "/favourites", element: <Favourites /> },
      { path: "/profile", element: <PrivateUpdAuthor><Profile/></PrivateUpdAuthor> },
      { path: "/new-chapter", element: <NewChapter /> },
      { path: "/new-author", element: <NewAuthor /> },
      { path: "/new-manga", element: <NewManga /> },


      { path: "/*", element: <Error404 /> },
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
  const dispatch = useDispatch(setUser);
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

