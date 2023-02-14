import { nanoid } from '@reduxjs/toolkit';

import styles from "./AddToDo.module.scss";
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { taskState } from '../../features/tasks/taskSlice';
import TaskComponent from './TaskComponent';
import FormComponent from './FormComponent';
import { useState } from 'react';


const AddToDo = () => {

    const tasksState = useAppSelector(taskState);
    const [toAddTask, setToAddTask] = useState(false);

    return (

        <div className={styles.main}>
            <button className={styles.showFormButton} onClick={() => setToAddTask(state => !state)}>{toAddTask ? 'Hide task from' : 'Show task form'}</button>
            {
                toAddTask
                    ?
                    <FormComponent />
                    : null
            }
            <div className={styles.newTasksContaner}>
                <h2>New Tasks</h2>
                {
                    tasksState?.tasks !== undefined
                        ?
                        tasksState?.tasks.map((task) => {
                            return (
                                <TaskComponent key={nanoid()} {...task} />
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