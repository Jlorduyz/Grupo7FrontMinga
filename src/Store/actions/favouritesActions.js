import axios from "axios";

export const FETCH_FAVOURITES_REQUEST = "FETCH_FAVOURITES_REQUEST";
export const FETCH_FAVOURITES_SUCCESS = "FETCH_FAVOURITES_SUCCESS";
export const FETCH_FAVOURITES_FAILURE = "FETCH_FAVOURITES_FAILURE";

export const fetchFavourites = () => async (dispatch) => {
    dispatch({ type: FETCH_FAVOURITES_REQUEST });
    try {
        const response = await axios.get("http://localhost:8080/api/reactions/favorite");
        dispatch({ type: FETCH_FAVOURITES_SUCCESS, payload: response.data?.response });
    } catch (error) {
        dispatch({ type: FETCH_FAVOURITES_FAILURE, payload: error.message });
    }
};
