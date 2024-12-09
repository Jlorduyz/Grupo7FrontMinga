import axios from "axios";

export const SET_MANGA_LIST = "editChapter/setMangaList";
export const SET_SELECTED_MANGA = "editChapter/setSelectedManga";
export const SET_CHAPTER_LIST = "editChapter/setChapterList";
export const SET_SELECTED_CHAPTER = "editChapter/setSelectedChapter";
export const SET_EDIT_DATA = "editChapter/setEditData";
export const SET_LOADING = "editChapter/setLoading";
export const SET_ERROR = "editChapter/setError";

export const setMangaList = (payload) => ({
    type: SET_MANGA_LIST,
    payload,
});

export const setSelectedManga = (payload) => ({
    type: SET_SELECTED_MANGA,
    payload,
});

export const setChapterList = (payload) => ({
    type: SET_CHAPTER_LIST,
    payload,
});

export const setSelectedChapter = (payload) => ({
    type: SET_SELECTED_CHAPTER,
    payload,
});

export const setEditData = (payload) => ({
    type: SET_EDIT_DATA,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

export const fetchMangas = () => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
        const token = getState().authStore.token;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get("http://localhost:8080/api/mangas/all", config);
        const mangas = response.data.response;
        dispatch(setMangaList(mangas));
        dispatch(setLoading(false));
    } catch (error) {
        console.error("Error fetching mangas:", error);
        dispatch(setError("Failed to fetch mangas."));
        dispatch(setLoading(false));
    }
};

export const fetchChapters = (mangaId) => async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
        const token = localStorage.getItem("token");

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get("http://localhost:8080/api/chapters/all", config);
        const allChapters = response.data.response;
        const filteredChapters = allChapters.filter(chapter => chapter.manga_id === mangaId);
        dispatch(setChapterList(filteredChapters));
        dispatch(setLoading(false));
    } catch (error) {
        console.error("Error fetching chapters:", error);
        dispatch(setError("Failed to fetch chapters."));
        dispatch(setLoading(false));
    }
};

export const updateChapter = (chapterId, variable, newData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        console.log("se ejecuto updateChapter");
        
        await axios.put(`http://localhost:8080/api/chapters/update/${chapterId}`, {
            [variable]: newData
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}` 
            }
        });
        dispatch(setLoading(false));

        dispatch(setChapterList(updatedChapters));

        alert("Capítulo actualizado exitosamente.");
    } catch (error) {
        console.error("Error updating chapter:", error);
        dispatch(setLoading(false));
        throw error; 
    }
};

export const deleteChapter = (chapterId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get("http://localhost:8080/api/chapters/all");
        const allChapters = response.data.response;
        const chapterToDelete = allChapters.find(ch => ch._id === chapterId);
        if (!chapterToDelete) {
            throw new Error("Chapter not found.");
        }

        await axios.delete(`http://localhost:8080/api/chapters/delete/${chapterId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        dispatch(setLoading(false));
        alert("Capítulo eliminado exitosamente.");

        dispatch(fetchChapters(chapterToDelete.manga_id));
    } catch (error) {
        console.error("Error deleting chapter:", error);
        dispatch(setError("Failed to delete chapter."));
        dispatch(setLoading(false));
        throw error; 
    }
};
