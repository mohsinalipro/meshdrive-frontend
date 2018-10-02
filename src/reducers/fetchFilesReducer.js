import FETCH_FILES from "../actions/types";

const initialFilesState = [];

export default function(state = initialFilesState, action) {
  switch (action.type) {
    case FETCH_FILES:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
