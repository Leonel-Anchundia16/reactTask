import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskContextProvider>
  </React.StrictMode>
);