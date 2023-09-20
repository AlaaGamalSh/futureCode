import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useCallback } from "react";
// utils
import axios from "../utils/axios";
//
import { isValidToken, setSession } from "./utils";

// ----------------------------------------------------------------------

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  isRegister: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      isRegister: false,
      user: action.payload.user,
    };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthenticated: true,
      isRegister: true,
      email: action.payload.email,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : "";

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
      } else {
        dispatch({
          type: "INITIAL",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "INITIAL",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = async (loginForm) => {
    const response = await axios.post("/api/login", loginForm);
    console.log(response);
    setSession(response.data.token);

    dispatch({
      type: "LOGIN",
      payload: {},
    });

    if (response.status === 1) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          email_verified_at: response.data.user.email_verified_at,
          phone: response.data.user.phone,
          phone_verified_at: response.data.user.phone_verified_at,
          account_type: response.data.user.account_type,
          role_id: response.data.user.role_id,
          points: response.data.user.points,
          invite_code: response.data.user.invite_code,
          restrict_to: response.data.user.restrict_to,
          identity: response.data.user.identity,
          image: response.data.user.image,
          created_at: response.data.user.created_at,
          updated_at: response.data.user.updated_at,
        })
      );
      window.location.href = "/dashboard/adverts";
    } else if (response.status === 0) {
      window.location.href = "/auth/login";
    }
  };

  // LOGOUT
  const logout = async () => {
    const response = await axios.post("/api/logout");
    if (
      response.message === "Logout Successful" ||
      response.message === "تم تسجيل الخروج بنجاح"
    ) {
      localStorage.clear();
      setSession(null);
      dispatch({
        type: "LOGOUT",
      });
      window.location.href = "/";
    }
  };
  //_________________________________________________________

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
