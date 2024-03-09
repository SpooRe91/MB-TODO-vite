import styles from "./CompletedComponent.module.scss";

import { useAppSelector } from "../../App/hooks";
import { taskState } from "../../features/tasks/taskSlice";
import { MdDateRange, MdGrading, MdPersonPin } from "react-icons/md";
import { nanoid } from "@reduxjs/toolkit";

const CompletedComponent = () => {
    const tasksState = useAppSelector(taskState);

    return (
        <div className={styles.taskContainerMain}>
            {tasksState.complete?.map((el) => {
                return (
                    <div className={styles.addDetails} key={nanoid()}>
                        <h3 className={styles.taskBody}>
                            <MdGrading />
                            Task body
                        </h3>
                        <p className={styles.taskBody}>{el.taskBody}</p>

                        <p className={styles.taskStart}>
                            <MdDateRange /> Task start date:
                        </p>
                        <p>
                            {el.taskStart
                                ?.toString()
                                .split("-")
                                .reverse()
                                .join("-")}
                        </p>

                        <p className={styles.taskEnd}>
                            <MdDateRange /> Task end date:
                        </p>
                        <p>
                            {el.taskEnd
                                ?.toString()
                                .split("-")
                                .reverse()
                                .join("-")}
                        </p>

                        <p className={styles.taskOwner}>
                            <MdPersonPin /> Task created by:
                        </p>
                        <p>{el.taskOwner}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CompletedComponent;
