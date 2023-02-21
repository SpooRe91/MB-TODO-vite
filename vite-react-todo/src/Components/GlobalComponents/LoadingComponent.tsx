import { DetailedHTMLProps, HTMLAttributes } from "react";
import BarLoader from "react-spinners/BarLoader";

import styles from "./LoadingComponent.module.scss";

const LoadingComponent = (props:
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {

    return (
        <div className={styles.loaderComp}>
            <BarLoader
                width={"100%"}
                color={'coral'}
            />
        </div>
    )
}

export default LoadingComponent