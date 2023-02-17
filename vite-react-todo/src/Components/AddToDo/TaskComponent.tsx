import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';


import styles from "./AddToDo.module.scss";

import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { Task, taskState, deleteTask } from '../../features/tasks/taskSlice';

const TaskComponent = (task: Task) => {

    const tasksState = useAppSelector(taskState);
    const dispatch = useAppDispatch();

    const [toDelete, setToDelete] = useState(false);
    const [toShowMoreInfo, settoShowMoreInfo] = useState(false);

    const handleDeleteConfirm = () => dispatch(deleteTask(task.taskName));
    const handleDeleteCancel = () => setToDelete(state => false);
    const handleShowMoreInfo = () => settoShowMoreInfo(state => !state);


    return (
        <div className={styles.taskItem}>
            <p className={styles.taskDetails}>{task.taskName}</p>
            <p className={styles.taskBody}>{task.taskBody}</p>
            <div className={styles.buttonsContainer}>
                <button type='button' onClick={() => setToDelete(state => !state)}>Delete task</button>
                <button type='button' onClick={() => handleShowMoreInfo()}>More info...</button>
            </div>
            {toDelete
                ?
                <div className={styles.buttonsContainer}>
                    <p>Are you sure you want to delete this task?</p>
                    <button onClick={() => handleDeleteConfirm()}> Yes</button>
                    <button onClick={() => handleDeleteCancel()}>No</button>
                </div>
                : null
            }
            {
                toShowMoreInfo
                    ?
                    <div className={styles.taskItem}>
                        <p>Task start date</p>
                        <p>{tasksState.taskStart}</p>
                        {
                            tasksState.taskEnd ?
                                <>
                                    <p>Task end date</p>
                                    <p>{tasksState.taskStart}</p>
                                </>
                                : null
                        }
                        <p className={styles.taskDetails}>Task created by: {task.taskOwner}</p>
                    </div>
                    : null
            }
        </div>
    )
}

export default TaskComponent