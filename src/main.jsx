import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./i18n";
import "./index.css";
import "./styles/theme.css";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
