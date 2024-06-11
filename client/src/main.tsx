import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import InitialiseKeycloak from "./helpers/auth.ts";
import AuthContext from "./context/authContext.tsx";
import Blogs from "./pages/blogs.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const auth = await InitialiseKeycloak();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs",
    element: <Blogs/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContext.Provider value={auth ?? false}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>
);
