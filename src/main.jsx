import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './lib/index.js'
import { Suspense, lazy } from "react";
import Suspanse from "./components/suspance/Suspanse.jsx";
const App = lazy(() => import("./App.jsx"));


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Suspanse/>}>
        <App />
      </Suspense>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
