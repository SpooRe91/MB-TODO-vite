import styles from "./TaskComp.module.scss";

import { ITask } from '../../features/tasks/taskSlice';

const TaskAdditionalInfoComponent = (task: ITask) => {

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

        </div>
    )
}

export default TaskAdditionalInfoComponent