import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../App/store';

export interface ILoading {
    loading: boolean;
    toDelete: boolean;
}

const initialState: ILoading = {
    loading: false,
    toDelete: false
}

export const globalActions = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setToDelete: (state, action) => {
            state.loading = action.payload.loading;
            state.toDelete = action.payload.toDelete;
        }
    }
});

export const { setLoading, setToDelete } = globalActions.actions;
export const globalState = (state: RootState) => state.globalSlice;
export default globalActions.reducer;