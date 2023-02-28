import styles from "./TaskComp.module.scss";

import { ITask } from '../../features/tasks/taskSlice';
import { useState } from "react";

interface ITaskProps {
    task: ITask,
    toShowMoreInfo: boolean,
    settoShowMoreInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const TaskAdditionalInfoComponent = ({ task, toShowMoreInfo, settoShowMoreInfo }: ITaskProps) => {

    const handleShowMoreInfo = () => settoShowMoreInfo(state => false);

    return (
        <div className={styles.addDetails}>
            <h3 className={styles.taskBody}>Task body</h3>
            <p className={styles.taskBody}>{task.taskBody}</p>

            <p className={styles.taskStart}>Task start date:</p>
            <p>{task.taskStart}</p>

            <p className={styles.taskEnd}>Task end date:</p>
            <p>{task.taskEnd}</p>

            <p className={styles.taskOwner}>Task created by:</p>
            <p>{task.taskOwner}</p>
            {/* <div className={styles.buttonsContainer}>
                <button
                    type='button'
                    style={toShowMoreInfo
                        ? { color: 'white', backgroundColor: "grey" }
                        : { color: 'white', backgroundColor: 'transparent' }}
                    onClick={() => handleShowMoreInfo()}>
                    {toShowMoreInfo ? 'Show less info' : 'Show more info'}
                </button>
            </div> */}
        </div>
    )
}

export default TaskAdditionalInfoComponent