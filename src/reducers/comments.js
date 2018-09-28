import { FETCH_POST_COMMENTS_BY_ID } from "../actions/types";

const initialCommentsState = [];

export default function(state = initialCommentsState, action) {
  switch (action.type) {
    case FETCH_POST_COMMENTS_BY_ID:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}
