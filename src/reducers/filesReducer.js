import { FETCH_FILES, UPLOAD_FILE } from "../actions/files/types";

const initialFilesState = [];

export default function(state = initialFilesState, action) {
  switch (action.type) {
    case FETCH_FILES:
      return [...action.payload];

    case UPLOAD_FILE:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
