// routes

// API
// ----------------------------------------------------------------------

export const HOST_API_KEY = "http://34.228.110.113:8010";
export const FIREBASE_API = {
  apiKey: "AIzaSyBgjesi5CWy7MX3Dpb53SmItbaQdRf6aKg",
  authDomain: "muzn-software.firebaseapp.com",
  projectId: "muzn-software",
  storageBucket: "muzn-software.appspot.com",
  messagingSenderId: "30765755605",
  appId: "1:30765755605:web:e84d733152d6dd5f0b065c",
  measurementId: "G-Z86EV5FV57",
};

export const COGNITO_API = {
  userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
  clientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
};

export const AUTH0_API = {
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
};

export const MAPBOX_API = process.env.REACT_APP_MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  H_MOBILE: 71,
  H_MAIN_DESKTOP: 83,
  H_DASHBOARD_DESKTOP: 71,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 252,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};
