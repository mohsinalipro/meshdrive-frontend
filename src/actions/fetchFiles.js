import FETCH_FILES from './types';

export const setFiles = (files)=>{
    return (
       { type: FETCH_FILES,
        files:files
    }     
    );
}
export default function fetchFiles(){

    return dispatch => 
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(files => dispatch(setFiles(files)));
    }
};


