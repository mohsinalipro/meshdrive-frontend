import FETCH_FILES from '../actions/types';


export default function(state=[] ,action={}){
    
switch(action.type){
    case FETCH_FILES: 
        return action.files;
    default: 
        return state;
}

}