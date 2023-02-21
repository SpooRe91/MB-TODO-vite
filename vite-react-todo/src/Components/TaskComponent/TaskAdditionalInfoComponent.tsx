import styles from "../AddToDo/AddToDo.module.scss";

import { ITask, taskState } from '../../features/tasks/taskSlice';
import { useAppSelector } from '../../App/hooks';

const TaskAdditionalInfoComponent = (task: ITask) => {

    const tasksState = useAppSelector(taskState);

    return (
        <div className={styles.addDetails}>
            <h3 className={styles.taskBody}>Task body</h3>
            <p className={styles.taskBody}>{task.taskBody}</p>

            <p className={styles.taskStart}>Task start date</p>
            <p>{tasksState.taskStart}</p>
            {
                tasksState.taskEnd ?
                    <>
                        <p className={styles.taskEnd}>Task end date</p>
                        <p>{tasksState.taskEnd}</p>
                    </>
                    : null
            }
            <div className={styles.taskDetails}>
                <p
                    className={styles.taskOwner}>
                    Task created by:
                </p>
                <p>
                    {tasksState.taskOwner}
                </p>
            </div>
        </div>
    )
}

export default TaskAdditionalInfoComponent