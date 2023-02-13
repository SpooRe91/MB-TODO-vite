import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';

import styles from "./AddToDo.module.scss";
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { addTask, taskState } from '../../features/tasks/taskSlice';
import TaskComponent from './TaskComponent';


const AddToDo = () => {

    const tasksState = useAppSelector(taskState);
    const dispatch = useAppDispatch();

    const [data, setData] = useState({ taskName: '', taskBody: '', taskDate: '', taskOwner: '' });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const submitTask = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        dispatch(addTask(data));
        setData({ taskName: '', taskBody: '', taskDate: '', taskOwner: '' });
        console.log(data);
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.target);
        // dispatch(deleteTask())
    }

    return (

        <div className={styles.main}>

            <form className={styles.taskForm}>
                <label htmlFor="taskName">Task name</label>
                <input
                    className={styles.inputField}
                    type="text"
                    id="taskName"
                    name="taskName"
                    onChange={(e) => changeHandler(e)}
                    value={data.taskName}
                    required
                />

                <label htmlFor="taskBody">Task body</label>
                <input
                    className={styles.inputField}
                    type="text"
                    id="taskBody"
                    name="taskBody"
                    onChange={(e) => changeHandler(e)}
                    value={data.taskBody}
                    required
                />
                <label htmlFor="taskBody">Task issued by</label>
                <input
                    className={styles.inputField}
                    type="text"
                    id="taskOwner"
                    name="taskOwner"
                    onChange={(e) => changeHandler(e)}
                    value={data.taskOwner}
                    required
                />
                <input type="submit" onClick={(e) => submitTask(e)} />
            </form>

            <div className={styles.newTasksContaner}>
                <h2>New Tasks</h2>
                {
                    tasksState?.tasks !== undefined
                        ?
                        tasksState?.tasks.map((task) => {
                            return (
                                <TaskComponent key={nanoid()}
                                    taskName={task.taskName}
                                    taskBody={task.taskBody}
                                    taskStart={task.taskStart}
                                    taskOwner={task.taskOwner}
                                    taskId={task.taskId} />
                            )
                        })
                        :
                        null
                }
            </div>

        </div>
    )
}

export default AddToDo