import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// redux-persist
import storage from "redux-persist/lib/storage";
// slices
import authenticationReducer from "./slices/authentication";
import advertsReducer from "./slices/adverts";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const advertsPersistConfig = {
  key: "adverts",
  storage,
  keyPrefix: "redux-",
  whitelist: ["advertId"],
};

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  adverts: persistReducer(advertsPersistConfig, advertsReducer),
});

export { rootPersistConfig, rootReducer };
