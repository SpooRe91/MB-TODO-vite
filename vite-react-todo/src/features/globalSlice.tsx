import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../App/store';
import { ITask } from './tasks/taskSlice';

export interface ILoading {
    loading: boolean;
    showForm: boolean;
    taskToEdit: ITask | null;
}

const initialState: ILoading = {
    loading: false,
    showForm: false,
    taskToEdit: null
}

export const globalActions = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setToShowForm: (state, action) => {
            state.showForm = action.payload;
            state.taskToEdit = null;
        },

        setToEditTask: (state, action) => {
            state.taskToEdit = action.payload;
        }
    }
});

export const { setLoading, setToShowForm, setToEditTask } = globalActions.actions;
export const globalState = (state: RootState) => state.globalSlice;
export default globalActions.reducer;