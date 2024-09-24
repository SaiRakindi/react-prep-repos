import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
