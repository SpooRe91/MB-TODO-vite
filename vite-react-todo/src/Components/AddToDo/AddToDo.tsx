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
            <div>
                <button className={styles.showFormButton} onClick={() => setToAddTask(state => !state)}>{toAddTask ? 'Hide task from' : 'Show task form'}</button>
            </div>
            <section className={styles.formContainer}>
                {
                    toAddTask
                        ?
                        <FormComponent />
                        :
                        null
                }
            </section>
            {
                tasksState?.tasks !== undefined && tasksState.tasks.length !== 0
                    ?
                    <section className={styles.newTasksContaner}>

                        {

                            <>
                                <h2>New Tasks</h2>
                                {
                                    tasksState?.tasks.map((task) => {
                                        return (
                                            <TaskComponent key={nanoid()} {...task} />
                                        )
                                    })
                                }
                            </>
                        }
                    </section>
                    :
                    <h2 className={styles.noTaksSign}>
                        There are no tasks yet, add one from the add task form. You can use the button "Show task form" if the form is not visible!
                    </h2>
            }
        </div>
    )
}

export default AddToDo