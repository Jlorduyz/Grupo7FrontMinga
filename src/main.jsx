import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // Importa el nuevo App.jsx
import { Provider } from "react-redux"; // Importa el Provider
import store from "./Store/Store"; // Importa el store de Redux

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App /> {/* Usa el nuevo App.jsx */}
    </Provider>
  </StrictMode>
);
