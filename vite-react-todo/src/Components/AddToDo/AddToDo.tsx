import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';

import styles from "./AddToDo.module.scss";
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { taskState } from '../../features/tasks/taskSlice';
import TaskComponent from './TaskComponent';
import FormComponent from './FormComponent';


const AddToDo = () => {

    const tasksState = useAppSelector(taskState);
    const dispatch = useAppDispatch();

    return (

        <div className={styles.main}>
            <FormComponent />
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
                                    taskId={task.taskId}
                                    error={task.error} />
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