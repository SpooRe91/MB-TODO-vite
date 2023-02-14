import { createSlice, prepareAutoBatched } from '@reduxjs/toolkit'
import type { RootState } from '../../App/store';

export interface Task {
    taskName: string,
    taskBody: '',
    taskStart: string,
    taskEnd?: string,
    taskOwner?: string,
    taskId: string,
    tasks?: Task[],
    error: string
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
            prepareAutoBatched()
        },
        deleteTask: (state, action) => {

            if (state.tasks !== undefined && state.tasks.length > 0) {
                const current = state.tasks.find(x => x.taskName === action.payload.taskName);
                console.log(current);
                state.tasks.splice(state.tasks.indexOf(action.payload.taskName), 1);
            } else {
                null;
            }
        },
        clearError: (state) => {
            state.error = '';
        }
    }
});

export const { addTask, deleteTask, clearError } = taskSliceActions.actions;
export const taskState = (state: RootState) => state.taskSlice; //as defined in the store file
export default taskSliceActions.reducer;