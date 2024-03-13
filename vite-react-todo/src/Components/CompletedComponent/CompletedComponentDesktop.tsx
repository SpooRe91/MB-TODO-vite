import styles from "./CompletedComponent.module.scss";

import { ITask } from "../../features/tasks/taskSlice";
import { MdDateRange, MdGrading, MdPersonPin } from "react-icons/md";

const CompletedComponentDesktop: React.FC<ITask> = ({ taskBody, taskEnd, taskOwner, taskStart }) => {
    return (
        <div className={styles.addDetails}>
            <div className={styles.taskBodyContainer}>
                <h3 className={styles.taskBody}>
                    <MdGrading />
                    Task body
                </h3>
                <p className={styles.taskBody}>{taskBody}</p>
            </div>
            <div className={styles.dateContainer}>
                <b className={styles.taskStart}>
                    <MdDateRange /> Task start date:
                </b>
                <p>
                    {taskStart
                        ?.toString()
                        .split("-")
                        .reverse()
                        .join("-")}
                </p>
                <b className={styles.taskEnd}>
                    <MdDateRange /> Task end date:
                </b>
                <p>
                    {taskEnd
                        ?.toString()
                        .split("-")
                        .reverse()
                        .join("-")}
                </p>
            </div>
            <div className={styles.ownerCotainer}>
                <p className={styles.taskOwner}>
                    <MdPersonPin /> Task created by:
                </p>
                <p className={styles.taskOwner}>{taskOwner}</p>
            </div>
        </div>
    );
};

export default CompletedComponentDesktop;
