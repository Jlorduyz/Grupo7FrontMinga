import { createReducer } from "@reduxjs/toolkit";
import { fetchAuthors, updateAuthorActive } from "../actions/authorActions";

const initialState = {
    authors: [],
    isLoading: false,
    error: null,
};


const authorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAuthors.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchAuthors.fulfilled, (state, action) => {
            state.isLoading = false;
            state.authors = action.payload;
        })
        .addCase(fetchAuthors.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || action.error.message;
        })
        .addCase(updateAuthorActive.fulfilled, (state, action) => {
            const updatedAuthor = action.payload;
            const index = state.authors.findIndex(a => a._id === updatedAuthor._id);
            if (index !== -1) {
                state.authors[index] = updatedAuthor;
            }
        })
        .addCase(updateAuthorActive.rejected, (state, action) => {
            state.error = action.payload || action.error.message;
        });
});

export default authorReducer;
