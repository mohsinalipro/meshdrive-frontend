export default function({ dispatch }) {
  return next => action => {
    console.log(action);
    if (!action.payload || !action.payload.then) {
      return next(action);
    } else {
      action.payload.then(response => {
        const newAction = { ...action, payload: response };
        return dispatch(newAction);
      });
    }
  };
}
