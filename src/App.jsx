import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mangas from "./Pages/Mangas.jsx";
import Manager from "./Pages/Manager.jsx";
import { Welcome } from "./Pages/Register.jsx";
import { WelcomeBack } from "./Pages/SignIn.jsx";
import Root from "./Layouts/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/mangas", element: <Mangas /> },
      { path: "/manager", element: <Manager /> },
      { path: "/welcome", element: <Welcome></Welcome> },
      { path: "/welcomeback", element: <WelcomeBack></WelcomeBack> },
    ],
  },
]);

function App() {


  return (<>
    <RouterProvider router={router}></RouterProvider>
  </>
  );
}

export default App;