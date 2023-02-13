import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../App/store';

export interface Task {
    taskName: string,
    taskBody: '',
    taskStart: string,
    taskEnd?: string,
    taskOwner?: string,
    taskId: string,
    tasks?: Task[],
    error?: string
}

const initialState: Task = {
    taskName: '',
    taskBody: '',
    taskStart: '',
    taskEnd: '',
    taskOwner: '',
    taskId: '',
    tasks: [],
    error: ''
}

export const taskSliceActions = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {

            if (state.tasks?.find(task => task.taskName === action.payload.taskName)) {
                state.error = 'A task with such name already exists. Please enter a different name!';

            } else {
                state.taskName = action.payload.taskName;
                state.taskBody = action.payload.taskBody;
                state.taskStart = action.payload.taskStart;
                state.taskEnd = action.payload.taskEnd;
                state.taskOwner = action.payload.taskOwner;
                state.taskId = action.payload.id;
                state.tasks?.push(action.payload);
            }
        }
    }
});

export const { addTask } = taskSliceActions.actions;
export const taskState = (state: RootState) => state.taskSlice; //as defined in the store file
export default taskSliceActions.reducer;