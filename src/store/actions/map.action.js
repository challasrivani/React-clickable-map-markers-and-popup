import { 
    MAP_DATA_UPDATE,
    MAP_DATA_LOADING,
    MAP_DATA_LOADING_COMPLETE,
    MAP_DATA_LOADING_ERROR } from "../actions";

const updateMapData = (mapData) => {
    return {
        type: MAP_DATA_UPDATE,
        payload: mapData
    }
}

const updateMapDataLoading = () => {
    return {
        type: MAP_DATA_LOADING
    }
}

const updateMapDataLoadingComplete = () => {
    return {
        type: MAP_DATA_LOADING_COMPLETE
    }
}

const updateMapDataLoadingError= () =>  {
    return {
        type: MAP_DATA_LOADING_ERROR
    }
}

const fetchMapData = (url) => (dispatch) => {
    dispatch(updateMapDataLoading());
    fetch(url)
    .then(response => response.json())
    .then(data => {
        dispatch(updateMapData(data));
        dispatch(updateMapDataLoadingComplete());
    })
    .catch(error => {
        dispatch(updateMapDataLoadingError());
        console.error('There was an error getting map data!', error);
    });
}

export const getMapData = () => (dispatch) => {
    dispatch(fetchMapData('/getData/map-data.json'));
}