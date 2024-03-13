import styles from "./CompletedComponent.module.scss";

import { useAppSelector } from "../../App/hooks";
import { taskState } from "../../features/tasks/taskSlice";

import { nanoid } from "@reduxjs/toolkit";
import useGetAgentView from "../../hooks/useGetAgentView";
import CompletedComponentMobile from "./CompletedComponentMobile";
import CompletedComponentDesktop from "./CompletedComponentDesktop";

const CompletedComponent = () => {
    const { isMobile } = useGetAgentView();
    const tasksState = useAppSelector(taskState);

    return (
        <div className={styles.taskContainerMain}>
            {tasksState.complete?.map((el) => {
                return isMobile ? (
                    <CompletedComponentMobile {...el} key={nanoid()} />
                ) : (
                    <CompletedComponentDesktop {...el} key={nanoid()} />
                );
            })}
        </div>
    );
};

export default CompletedComponent;
