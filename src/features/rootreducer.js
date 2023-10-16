import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { filmReducer } from "./filmReducer";

const rootReducer = combineReducers({
  film: filmReducer,
  user: userReducer,
});

export { rootReducer };
