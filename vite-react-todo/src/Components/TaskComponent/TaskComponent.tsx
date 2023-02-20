import { useState } from 'react';

import styles from "../AddToDo/AddToDo.module.scss";
import TaskAdditionalInfoComponent from './TaskAdditionalInfoComponent';

import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { ITask, deleteTask } from '../../features/tasks/taskSlice';
import { globalState, setToDelete } from '../../features/globalSlice';

const TaskComponent = (task: ITask) => {

    const dispatch = useAppDispatch();

    const globalStateData = useAppSelector(globalState);
    const [toShowMoreInfo, settoShowMoreInfo] = useState(false);


    const showDeleteOptions = () => {
        dispatch(setToDelete({
            loading: !globalStateData.loading,
            toDelete: !globalStateData.toDelete
        }));
    };

    const handleDeleteConfirm = () => {
        dispatch(deleteTask(task.taskName));
        dispatch(setToDelete({
            loading: false,
            toDelete: false
        }));
    }

    const handleDeleteCancel = () => {
        dispatch(setToDelete({
            loading: false,
            toDelete: false
        }));
    }

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
                    style={globalStateData.toDelete
                        ? { color: 'white', backgroundColor: "grey" }
                        : { color: 'white', backgroundColor: 'transparent' }}
                    onClick={() => showDeleteOptions()}>
                    Delete task
                </button>
            </div>

            {
                globalStateData.toDelete
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
                    <TaskAdditionalInfoComponent />
                    : null
            }
        </div >
    )
}

export default TaskComponent