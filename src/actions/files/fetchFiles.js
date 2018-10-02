import { FETCH_FILES } from "./types";

export const setFiles = files => {
  const drives = ["googledrive", "onedrive", "dropbox"];
  files.forEach((e, i) => {
    e.drive = drives[i % 3];
  });

  return {
    type: FETCH_FILES,
    payload: files
  };
};

export default function fetchFiles() {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(files => dispatch(setFiles(files)))
      .catch(error => console.log(error));
  };
}
