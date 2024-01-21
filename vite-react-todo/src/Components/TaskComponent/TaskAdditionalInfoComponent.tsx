import styles from "./TaskComp.module.scss";

import { ITask } from '../../features/tasks/taskSlice';
import {
    MdGrading,
    MdPersonPin,
    MdDateRange
} from "react-icons/md";

const TaskAdditionalInfoComponent = (task: ITask) => {

    return (
        <div className={styles.addDetails}>
            <h3 className={styles.taskBody}><MdGrading />Task body</h3>
            <p className={styles.taskBody}>{task.taskBody}</p>

            <p className={styles.taskStart}><MdDateRange /> Task start date:</p>
            <p>{task.taskStart?.toString().split("-").reverse().join('-')}</p>

            <p className={styles.taskEnd}><MdDateRange /> Task end date:</p>
            <p>{task.taskEnd?.toString().split("-").reverse().join('-')}</p>

            <p className={styles.taskOwner}><MdPersonPin /> Task created by:</p>
            <p>{task.taskOwner}</p>
        </div>
    )
}

export default TaskAdditionalInfoComponent