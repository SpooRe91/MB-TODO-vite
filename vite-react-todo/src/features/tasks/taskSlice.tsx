import { createSlice, prepareAutoBatched } from '@reduxjs/toolkit'
import type { RootState } from '../../App/store';

export interface Task {
    taskName: string,
    taskBody: '',
    taskStart: number | string,
    taskEnd: number | string,
    taskOwner?: string,
    taskId: string,
    tasks?: Task[],
}

const initialState: Task = {
    taskName: '',
    taskBody: '',
    taskStart: '',
    taskEnd: '',
    taskOwner: '',
    taskId: '',
    tasks: [],
}

export const taskSliceActions = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {

            state.taskName = action.payload.taskName;
            state.taskBody = action.payload.taskBody;
            state.taskStart = action.payload.taskStart;
            state.taskEnd = action.payload.taskEnd;
            state.taskOwner = action.payload.taskOwner;
            state.taskId = action.payload.id;
            state.tasks?.push(action.payload);

        },

        deleteTask: (state, action) => {

            if (state.tasks !== undefined && state.tasks.length > 0) {

                state.tasks.splice(state.tasks.indexOf(action.payload.taskName), 1);
                state.taskName = '';
                state.taskBody = '';
                state.taskStart = '';
                state.taskEnd = '';
                state.taskOwner = '';
                state.taskId = '';
            } else {
                null;
            }
        }
    }
});

export const { addTask, deleteTask } = taskSliceActions.actions;
export const taskState = (state: RootState) => state.taskSlice; //as defined in the store file
export default taskSliceActions.reducer;