import { nanoid } from '@reduxjs/toolkit';

import styles from "./AddToDo.module.scss";

import { useState, lazy, Suspense } from 'react';
import { taskState } from '../../features/tasks/taskSlice';
import { useAppSelector } from '../../App/hooks';
import LoadingComponent from './LoadingComponent';

const AddToDo = () => {

    const tasksState = useAppSelector(taskState);
    const [toAddTask, setToAddTask] = useState(false);

    const FormComponent = lazy(() => import('./FormComponent'));
    const TaskComponent = lazy(() => import('./TaskComponent'));

    return (

        <div className={styles.main}>
            <div>
                <button
                    className={styles.showFormButton}
                    onClick={() => setToAddTask(state => !state)}>
                    {toAddTask ? 'Hide task from' : 'Show task form'}
                </button>
            </div>

            <section className={styles.formContainer}>
                {
                    toAddTask
                        ?
                        <Suspense fallback={<LoadingComponent />}>
                            <FormComponent />
                        </Suspense>
                        :
                        null
                }
            </section>
            {
                tasksState?.tasks !== undefined && tasksState.tasks.length !== 0
                    ?
                    <section className={styles.newTasksContaner}>

                        {
                            <Suspense fallback={<LoadingComponent />}>
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
                            </Suspense>
                        }
                    </section>
                    :
                    <div className={styles.noTaksSign}>
                        <h2>There are no tasks yet, add one from the add task form. </h2>
                        <h2>You can use the button "Show task form" if the form is not visible!</h2>
                    </div>
            }
        </div>
    )
}

export default AddToDo