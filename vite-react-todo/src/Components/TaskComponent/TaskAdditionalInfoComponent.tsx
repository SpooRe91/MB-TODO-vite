import styles from "./ModalTask.module.scss";

import { ITask } from "../../features/tasks/taskSlice";
import { MdGrading, MdPersonPin, MdDateRange } from "react-icons/md";
import useGetAgentView from "../../hooks/useGetAgentView";

type TaskModalProps = {
    task: ITask;
    handleModalClose?: () => void;
};

export const TaskAdditionalInfoComponent = ({ task, handleModalClose }: TaskModalProps) => {
    const startDate = task.taskStart
        ?.toString()
        .split("-")
        .reverse()
        .join("-");
    const endDate = task.taskEnd
        ?.toString()
        .split("-")
        .reverse()
        .join("-");

    const { isMobile } = useGetAgentView();

    return (
        <div className={isMobile ? styles.mobileContainer : styles.dialogContainer}>
            <div className={styles.modalContent}>
                <h3 className={styles.modalTitle}>
                    <MdGrading />
                    Task body
                </h3>
                <p className={styles.modalBody}>{task.taskBody}</p>

                <h4 className={styles.taskStart}>
                    <MdDateRange /> Task start date:{" "}
                </h4>
                <p style={{ color: "coral" }}>{startDate}</p>
                <h4 className={styles.taskEnd}>
                    <MdDateRange /> Task end date:{" "}
                </h4>
                <p style={{ color: "coral" }}>{endDate}</p>

                <p className={styles.taskOwner}>
                    <MdPersonPin /> Task created by:
                </p>
                <p>{task.taskOwner}</p>
            </div>
            <button
                className={styles.closeButton}
                onClick={() => typeof handleModalClose === "function" && handleModalClose()}
            >
                X
            </button>
        </div>
    );
};
