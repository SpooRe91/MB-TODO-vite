import styles from "./CompletedComponent.module.scss";

import { useAppSelector } from "../../App/hooks";
import { taskState } from "../../features/tasks/taskSlice";

import { v4 as uuidv4 } from "uuid";
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
                    <CompletedComponentMobile {...el} key={uuidv4()} />
                ) : (
                    <CompletedComponentDesktop {...el} key={uuidv4()} />
                );
            })}
        </div>
    );
};

export default CompletedComponent;
