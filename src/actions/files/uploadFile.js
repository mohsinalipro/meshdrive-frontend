import { UPLOAD_FILE } from "./types";

export const addFile = file => {
  return {
    type: UPLOAD_FILE,
    payload: file
  };
};

export default function uploadFile(file) {
  // return dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(files => dispatch(addFile(file)))
  //     .catch(error => console.log(error));
  // };

  return dispatch => {
    dispatch(addFile(file));
  };
}
