import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../App/store';

export interface ITask {
    taskName: string,
    taskBody: '',
    taskStart: number | string,
    taskEnd: number | string,
    taskOwner: string,
    taskId: string,
    tasks?: ITask[]
}

const initialState: ITask = {
    taskName: '',
    taskBody: '',
    taskStart: '',
    taskEnd: '',
    taskOwner: '',
    taskId: '',
    tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks') || '') : []
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

            if (localStorage.length > 0) {
                const existing = JSON.parse(localStorage.getItem('tasks') || '');
                existing.push(action.payload);
                localStorage.clear();
                localStorage.setItem('tasks', JSON.stringify(existing));
                state.tasks = existing;
            } else {
                localStorage.setItem('tasks', JSON.stringify([...[action.payload]]));
                state.tasks = JSON.parse(localStorage.getItem('tasks') || '');
            }
        },

        editTask: (state, action) => {

            if (localStorage.length > 0) {
                const existing = JSON.parse(localStorage.getItem('tasks') || '');
                let item = existing.find((el: { taskId: any; }) => el.taskId === action.payload.taskId);

                existing[existing.indexOf(item)] = action.payload;
                localStorage.clear();
                localStorage.setItem('tasks', JSON.stringify(existing));
                state.tasks = existing;
            } else {
                localStorage.setItem('tasks', JSON.stringify([...[action.payload]]));
                state.tasks = JSON.parse(localStorage.getItem('tasks') || '');
            }
        },

        deleteTask: (state, action) => {

            if (state.tasks !== undefined && state.tasks?.length > 0) {

                state.taskName = '';
                state.taskBody = '';
                state.taskStart = '';
                state.taskEnd = '';
                state.taskOwner = '';
                state.taskId = '';

                if (localStorage.length > 0) {
                    const existing = JSON.parse(localStorage.getItem('tasks') || '');
                    const toRemove = existing.find((el: { taskName: any; }) => el.taskName === action.payload);

                    existing.splice(existing.indexOf(toRemove), 1);
                    localStorage.clear();
                    localStorage.setItem('tasks', JSON.stringify(existing));
                    state.tasks = existing;
                } else {
                    localStorage.setItem('tasks', JSON.stringify([...[action.payload]]));
                }
            } else {
                null;
            }
        },
        deleteAllTasks: (state) => {
            localStorage.setItem('tasks', JSON.stringify([]));
            state.tasks = [];
        }
    }
});

export const { addTask, deleteTask, deleteAllTasks, editTask } = taskSliceActions.actions;
export const taskState = (state: RootState) => state.taskSlice; //as defined in the store file
export default taskSliceActions.reducer;