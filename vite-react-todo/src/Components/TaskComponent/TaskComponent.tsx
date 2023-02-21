import { useState } from 'react';

import styles from "../AddToDo/AddToDo.module.scss";
import TaskAdditionalInfoComponent from './TaskAdditionalInfoComponent';

import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { ITask, deleteTask } from '../../features/tasks/taskSlice';
import { globalState } from '../../features/globalSlice';

const TaskComponent = (task: ITask) => {

    const dispatch = useAppDispatch();
    const globalStateData = useAppSelector(globalState);

    const [toShowDelete, setToShowDelete] = useState(globalStateData.toDelete);
    const [toShowMoreInfo, settoShowMoreInfo] = useState(false);

    const showDeleteOptions = () => setToShowDelete(state => !state);
    const handleDeleteConfirm = () => { dispatch(deleteTask(task.taskName)) };
    const handleDeleteCancel = () => setToShowDelete(state => false);
    const handleShowMoreInfo = () => settoShowMoreInfo(state => !state);


    return (
        <div className={styles.taskItem}>
            <h3 className={styles.taskName}>Task name</h3>
            <p className={styles.taskDetails}>{task.taskName}</p>

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
                    style={globalStateData.toDelete
                        ? { color: 'white', backgroundColor: "grey" }
                        : { color: 'white', backgroundColor: 'transparent' }}
                    onClick={() => showDeleteOptions()}>
                    Delete task
                </button>
            </div>

            {
                toShowDelete
                    ?
                    <div className={styles.buttonsContainer}>
                        <p>Are you sure you want to delete this task?</p>
                        <button onClick={() => handleDeleteConfirm()}>Yes</button>
                        <button onClick={() => handleDeleteCancel()}>No</button>
                    </div>
                    : null
            }
            {
                toShowMoreInfo
                    ?
                    <TaskAdditionalInfoComponent {...task} />
                    : null
            }
        </div >
    )
}

export default TaskComponent