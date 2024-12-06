import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux"; // Importa el Provider
import store from "./Store/Store"; // Importa el store de Redux


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>

      <App />

    </Provider>
  </StrictMode>
);
