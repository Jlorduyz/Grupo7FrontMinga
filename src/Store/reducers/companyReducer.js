import { createReducer } from "@reduxjs/toolkit";
import { fetchCompanies, updateCompanyActive } from "../actions/companyActions";

const initialState = {
    companies: [],
    isLoading: false,
    error: null,
};


const companyReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCompanies.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchCompanies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.companies = action.payload;
        })
        .addCase(fetchCompanies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || action.error.message;
        })
        .addCase(updateCompanyActive.fulfilled, (state, action) => {
            const updatedCompany = action.payload;
            const index = state.companies.findIndex(c => c._id === updatedCompany._id);
            if (index !== -1) {
                state.companies[index] = updatedCompany;
            }
        })
        .addCase(updateCompanyActive.rejected, (state, action) => {
            state.error = action.payload || action.error.message;
        });
});

export default companyReducer;
