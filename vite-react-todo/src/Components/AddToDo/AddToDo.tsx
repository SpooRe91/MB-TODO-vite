import { nanoid } from '@reduxjs/toolkit';
import { useState, Suspense } from 'react';

import TaskComponent from '../TaskComponent/TaskComponent';
import LoadingComponent from '../GlobalComponents/LoadingComponent';

import styles from "./AddToDo.module.scss";
import { globalState, setToShowForm } from '../../features/globalSlice';
import { taskState, deleteAllTasks } from '../../features/tasks/taskSlice';
import { useAppDispatch, useAppSelector } from '../../App/hooks';

const AddToDo = () => {
    const dispatch = useAppDispatch();
    const tasksState = useAppSelector(taskState);
    const globalStateData = useAppSelector(globalState);

    const [toDelete, setToDelete] = useState(false);

    const handleDeleteAll = () => {
        dispatch(deleteAllTasks())
        setToDelete(state => false);
    };

    return (
        <div className={styles.main}>
            <div>
                <button
                    className={styles.showFormButton}
                    onClick={() => dispatch(setToShowForm(!globalStateData.showForm))}>
                    {globalStateData.showForm ? 'Hide task from' : 'Show task form'}
                </button>
            </div>
            {
                tasksState?.tasks !== undefined && tasksState.tasks?.length !== 0
                    ?
                    <>
                        <h2 className={styles.tasksContanerHeader}>Your Tasks</h2>
                        <section className={styles.deleteAllSection}>
                            <div className={styles.deleteAllContainer}>
                                <button
                                    className={styles.deleteAllTasks}
                                    onClick={() => setToDelete(state => !state)}>
                                    Delete all tasks
                                </button>
                                {
                                    toDelete
                                        ?
                                        <>
                                            <p>Are you sure you want to delete all tasks.</p>
                                            <button
                                                className={styles.deleteAllTasks}
                                                onClick={() => handleDeleteAll()}>
                                                Yes
                                            </button>
                                            <button
                                                className={styles.deleteAllTasks}
                                                onClick={() => setToDelete(false)}>
                                                No
                                            </button>
                                        </>
                                        : null
                                }
                            </div>
                        </section>
                        <section className={styles.newTasksContaner}>
                            {
                                <Suspense fallback={
                                    <p>
                                        <LoadingComponent />
                                        <p className={styles.loadingText}>Loading tasks</p>
                                    </p>
                                }>
                                    <>
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
                    </>
                    :
                    <div className={styles.noTaksSign}>
                        <h2>There are no tasks yet, add one from the add task form. </h2>
                        <h2>You can use the button "Show task form" if the form is not visible!</h2>
                    </div>
            }
        </div >
    )
}

export default AddToDo