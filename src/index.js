import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from "react";
// i18n
import "./locales/i18n";

// scroll bar
//import "simplebar/src/simplebar.css";

// lightbox
import "react-image-lightbox/style.css";

// editor
import "react-quill/dist/quill.snow.css";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import { AuthProvider } from "./auth/JwtContext";
// ----------------------------------------------------------------------

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// @mui
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// redux
import { store, persistor } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { PersistGate } from "redux-persist/lib/integration/react";
// components
import { SettingsProvider } from "./components/settings";
import ScrollToTop from "./components/scroll-to-top";
//
import { ToastContainer } from "react-toastify";
// ----------------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    {" "}
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider>
              <BrowserRouter>
                <ScrollToTop />
                <App />
                <ToastContainer />
              </BrowserRouter>
            </SettingsProvider>
          </LocalizationProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
