import { useState } from "react";
import styles from "./TaskComp.module.scss";
import { MdOutlineDescription } from "react-icons/md";
import { BsFillXCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { ITask, addToComplete, deleteTask } from "../../features/tasks/taskSlice";
import { globalState, setToShowForm, setToEditTask } from "../../features/globalSlice";
import { TaskAdditionalInfoComponent } from "..";
import useGetAgentView from "../../hooks/useGetAgentView";

export const TaskComponent = (task: ITask) => {
    const { isMobile } = useGetAgentView();
    const dispatch = useAppDispatch();
    const globalStateData = useAppSelector(globalState);

    const [toShowDelete, setToShowDelete] = useState(false);
    const [toShowMoreInfo, settoShowMoreInfo] = useState(false);

    const showDeleteOptions = () => {
        setToShowDelete((state) => !state);
    };

    const handleDeleteConfirm = () => {
        dispatch(deleteTask(task));
        dispatch(addToComplete(task));
    };

    const handleDeleteCancel = () => setToShowDelete(false);
    const handleShowMoreInfo = () => settoShowMoreInfo((state) => !state);

    const handleEditTask = () => {
        dispatch(setToShowForm(!globalStateData.showForm));
        dispatch(setToEditTask(task));
    };

    return (
        <div className={styles.taskItemMain}>
            <div className={styles.taskItem}>
                <button onClick={() => handleEditTask()}>Edit</button>
                <h3 className={styles.taskName}>
                    <MdOutlineDescription /> Task name
                </h3>
                <p className={styles.taskDetails}>{task.taskName}</p>

                <div className={styles.buttonsContainer}>
                    <button
                        type="button"
                        style={{
                            color: "white",
                            backgroundColor: "transparent",
                            fontSize: isMobile ? "1rem" : "",
                        }}
                        onClick={() => handleShowMoreInfo()}
                    >
                        {toShowMoreInfo ? "Show less info" : "Show more info"}
                    </button>
                    {toShowDelete ? (
                        <div className={styles.buttonsContainer}>
                            <button className={styles.deleteButtons} onClick={() => handleDeleteConfirm()}>
                                <BsFillCheckCircleFill />
                            </button>
                            <button className={styles.deleteButtons} onClick={() => handleDeleteCancel()}>
                                <BsFillXCircleFill />
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            style={
                                toShowDelete
                                    ? { color: "white", backgroundColor: "grey" }
                                    : { color: "white", backgroundColor: "transparent" }
                            }
                            onClick={() => showDeleteOptions()}
                        >
                            Delete task
                        </button>
                    )}
                </div>
            </div>
            {toShowMoreInfo ? (
                <>
                    <TaskAdditionalInfoComponent handleModalClose={handleShowMoreInfo} task={task} />
                </>
            ) : null}
        </div>
    );
};
