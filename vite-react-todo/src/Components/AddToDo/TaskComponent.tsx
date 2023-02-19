import { Suspense, useState } from 'react';

import styles from "./AddToDo.module.scss";
import LoadingComponent from './LoadingComponent';
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { Task, taskState, deleteTask } from '../../features/tasks/taskSlice';
import TaskAdditionalInfo from './TaskAdditionalInfo';

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
            <h3 className={styles.taskName}>Task name</h3>
            <p className={styles.taskDetails}>{task.taskName}</p>

            <h3 className={styles.taskBody}>Task body</h3>
            <p className={styles.taskBody}>{task.taskBody}</p>

            <div className={styles.buttonsContainer}>
                <button
                    type='button'
                    style={toShowMoreInfo
                        ? { color: 'white', backgroundColor: "grey" }
                        : { color: 'white', backgroundColor: 'transparent' }}
                    onClick={() => handleShowMoreInfo()}>
                    {toShowMoreInfo ? 'Show less info' : 'Show more info'}
                </button>
                <button
                    type='button'
                    style={toDelete
                        ? { color: 'white', backgroundColor: "grey" }
                        : { color: 'white', backgroundColor: 'transparent' }}
                    onClick={() => setToDelete(state => !state)}>
                    Delete task
                </button>
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
                    <TaskAdditionalInfo />
                    : null
            }
        </div>
    )
}

export default TaskComponent