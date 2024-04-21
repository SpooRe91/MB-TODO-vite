import styles from "./ModalTask.module.scss";

import { ITask } from "../../features/tasks/taskSlice";

import useGetAgentView from "../../hooks/useGetAgentView";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
                    <AssignmentIcon />
                    Task info
                </h3>
                <div className={styles.modalInfoContainer}>
                    <p className={styles.modalBody}>{task.taskBody}</p>
                </div>
                <h4 className={styles.taskStart}>
                    <DateRangeIcon /> Task start date:{" "}
                </h4>
                <p style={{ color: "coral" }}>{startDate}</p>
                <h4 className={styles.taskEnd}>
                    <DateRangeIcon /> Task end date:{" "}
                </h4>
                <p style={{ color: "coral" }}>{endDate}</p>

                <p className={styles.taskOwner}>
                    <PersonIcon /> Task created by:
                </p>
                <p>{task.taskOwner}</p>
            </div>
            <button
                className={styles.closeButton}
                onClick={() => typeof handleModalClose === "function" && handleModalClose()}
            >
                <CloseIcon />
            </button>
        </div>
    );
};
