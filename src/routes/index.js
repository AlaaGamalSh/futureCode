import { Navigate, useRoutes } from "react-router-dom";

import { LoginPage, AdvertsPage, EditAdvert, AddAdvert } from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "/",
      children: [
        { element: <Navigate to="auth/login" replace />, index: true },
        { path: "auth/login", element: <LoginPage /> },
      ],
    },
    // Dashboard
    {
      path: "dashboard",
      children: [
        {
          path: "adverts",
          children: [
            {
              path: "",
              element: <AdvertsPage />,
            },

            {
              path: "edit-advert",
              element: <EditAdvert />,
            },

            {
              path: "add-advert",
              element: <AddAdvert />,
            },
          ],
        },
      ],
    },
  ]);
}
