import { 
     MAP_DATA_UPDATE,
     MAP_DATA_LOADING,
     MAP_DATA_LOADING_COMPLETE,
     MAP_DATA_LOADING_ERROR } from "../actions";

const initState = {
    data: [],
    isLoading: null,
    hasError: null
}

const mapReducer = (state =initState, action) => {
    switch(action.type){
        case MAP_DATA_UPDATE:
            return {
                ...state,
                data: action.payload
            };
        case MAP_DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case MAP_DATA_LOADING_COMPLETE:
            return {
                ...state,
                isLoading: false,
                hasError: false
        };
        case MAP_DATA_LOADING_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
        };
        default:
            return state;
    }
}

export default mapReducer;

