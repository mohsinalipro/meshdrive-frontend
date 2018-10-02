import { FETCH_FILES, UPLOAD_FILE } from "../actions/files/types";

const initialFilesState = [];

export default function(state = initialFilesState, action) {
  switch (action.type) {
    case FETCH_FILES:
      return [...state, ...action.payload];

    case UPLOAD_FILE:
      console.log(action);
      return [...state, action.payload];

    default:
      return state;
  }
}
