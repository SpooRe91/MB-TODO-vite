import { nanoid } from "@reduxjs/toolkit";
import { useState, Suspense } from "react";

import { LoadingComponent, TaskComponent } from "..";

import styles from "./AddToDo.module.scss";
import { taskState, deleteAllTasks } from "../../features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

export type exportType = {
    type: string;
};

const AddToDo = () => {
    const dispatch = useAppDispatch();
    const tasksState = useAppSelector(taskState);
    const [toDelete, setToDelete] = useState(false);

    const handleDeleteAll = () => {
        dispatch(deleteAllTasks());
        setToDelete(false);
    };

    return (
        <div className={styles.main}>
            {tasksState?.tasks !== undefined && tasksState.tasks?.length ? (
                <>
                    <h2 className={styles.tasksContanerHeader}>Your Tasks</h2>
                    <section className={styles.deleteAllSection}>
                        <div className={styles.deleteAllContainer}>
                            <button
                                className={styles.deleteAllTasks}
                                onClick={() => setToDelete((state) => !state)}
                            >
                                Delete all tasks
                            </button>
                            {toDelete ? (
                                <>
                                    <p>Are you sure you want to delete all tasks.</p>
                                    <button
                                        className={styles.deleteAllTasks}
                                        onClick={() => handleDeleteAll()}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        className={styles.deleteAllTasks}
                                        onClick={() => setToDelete(false)}
                                    >
                                        No
                                    </button>
                                </>
                            ) : null}
                        </div>
                    </section>
                    <section className={styles.newTasksContaner}>
                        {
                            <Suspense
                                fallback={
                                    <p>
                                        <LoadingComponent />
                                        <p className={styles.loadingText}>Loading tasks</p>
                                    </p>
                                }
                            >
                                <>
                                    {tasksState?.tasks.map((task) => {
                                        return <TaskComponent key={nanoid()} {...task} />;
                                    })}
                                </>
                            </Suspense>
                        }
                    </section>
                </>
            ) : (
                <div className={styles.noTaksSign}>
                    <h2>
                        There are no tasks yet, add one from the add task form. You can use the button "Show
                        task form" if the form is not visible!
                    </h2>
                </div>
            )}
        </div>
    );
};
export default AddToDo;