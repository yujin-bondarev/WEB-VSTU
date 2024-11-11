import axios from 'axios';

export const FETCH_RACERS_REQUEST = 'FETCH_RACERS_REQUEST';
export const FETCH_RACERS_SUCCESS = 'FETCH_RACERS_SUCCESS';
export const FETCH_RACERS_FAILURE = 'FETCH_RACERS_FAILURE';

export const fetchRacers = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_RACERS_REQUEST });
        try {
            const response = await axios.get('http://localhost:8080/api/racers'); // URL вашего API
            dispatch({
                type: FETCH_RACERS_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: FETCH_RACERS_FAILURE,
                payload: error.message,
            });
        }
    };
};