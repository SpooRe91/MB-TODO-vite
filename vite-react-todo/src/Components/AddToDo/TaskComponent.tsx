import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from '../../App/hooks';

import styles from "./AddToDo.module.scss";
import { Task, taskState } from '../../features/tasks/taskSlice';

const TaskComponent = (task: Task) => {


    const tastState = useAppSelector(taskState);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.taskItem} key={nanoid()}>
            <p className={styles.taskDetails}>{task.taskName}</p>
            <p className={styles.taskBody}>{task.taskBody}</p>
            <p className={styles.taskDetails}>{task.taskOwner}</p>
            {/* <button type='button' onClick={() => handleDelete(task.taskName)}>Delete task</button> */}
        </div>
    )
}

export default TaskComponent