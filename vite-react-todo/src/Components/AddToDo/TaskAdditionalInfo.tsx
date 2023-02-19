import styles from "./AddToDo.module.scss";

import { taskState } from '../../features/tasks/taskSlice';
import { useAppSelector } from '../../App/hooks';

const TaskAdditionalInfo = () => {

    const tasksState = useAppSelector(taskState);

    return (
        <div className={styles.taskItem}>
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

export default TaskAdditionalInfo