import { Suspense, lazy } from "react";
// components

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

// AUTH
export const LoginPage = Loadable(
  lazy(() => import("../pages/auth/LoginPage"))
);

// ADVERTS
export const AdvertsPage = Loadable(
  lazy(() => import("../pages/adverts/AdvertsPage"))
);

// Edit ADVERTS
export const EditAdvert = Loadable(
  lazy(() => import("../pages/adverts/EditAdvert"))
);

// Add ADVERTS
export const AddAdvert = Loadable(
  lazy(() => import("../pages/adverts/AddAdvert"))
);
