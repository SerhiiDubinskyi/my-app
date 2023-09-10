import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./pages/Index/App";
import { AuthProvider } from "./Auth";
import "./index.css"
import AccountCreator from "./pages/AccountCreator/AccountCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accountcreator",
    element: <AccountCreator/>
  }
]);

let rootElement = document.getElementById("root") || document.createElement("div");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </React.StrictMode>
);