import axios from "axios";

export const SET_LOADING = "newManga/setLoading";
export const SET_ERROR = "newManga/setError";
export const CREATE_MANGA_SUCCESS = "newManga/createMangaSuccess";

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

export const createMangaSuccess = (payload) => ({
    type: CREATE_MANGA_SUCCESS,
    payload,
});

export const createManga = (newMangaData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(
            "http://localhost:8080/api/mangas/create",
            newMangaData,
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
        dispatch(createMangaSuccess(response.data));
        alert("Manga creado exitosamente.");
    } catch (error) {
        console.error("Error creating manga:", error);
        dispatch(setError("Failed to create manga."));
        throw error;
    } finally {
        dispatch(setLoading(false));
    }
};
