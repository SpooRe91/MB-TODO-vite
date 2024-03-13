import styles from "./CompletedComponent.module.scss";

import { ITask } from "../../features/tasks/taskSlice";
import { MdDateRange, MdGrading, MdPersonPin } from "react-icons/md";

const CompletedComponentMobile: React.FC<ITask> = ({ taskBody, taskEnd, taskOwner, taskStart }) => {
    return (
        <div className={styles.addDetails}>
            <div className={styles.taskBodyContainer}>
                <h3 className={styles.taskBodyMobile}>
                    <MdGrading />
                    Task body
                </h3>
                <p className={styles.taskBodyMobile}>{taskBody}</p>
            </div>
            <div className={styles.dateContainer}>
                <b className={styles.taskStartMobile}>
                    <MdDateRange /> Task start date:
                </b>
                <p className={styles.taskStartMobile}>
                    {taskStart
                        ?.toString()
                        .split("-")
                        .reverse()
                        .join("-")}
                </p>
                <b className={styles.taskEndMobile}>
                    <MdDateRange /> Task end date:
                </b>
                <p className={styles.taskEndMobile}>
                    {taskEnd
                        ?.toString()
                        .split("-")
                        .reverse()
                        .join("-")}
                </p>
            </div>
            <div className={styles.ownerCotainer}>
                <p className={styles.taskOwnerMobile}>
                    <MdPersonPin /> Task created by:
                </p>
                <p className={styles.taskOwnerMobile}>{taskOwner}</p>
            </div>
        </div>
    );
};

export default CompletedComponentMobile;
