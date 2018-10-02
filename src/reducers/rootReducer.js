import { combineReducers } from "redux";
import fetchFilesReducer from "./fetchFilesReducer";

export default combineReducers({
  files: fetchFilesReducer
});
