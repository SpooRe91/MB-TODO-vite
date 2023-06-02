import styles from "./HomeComp.module.scss"
const HomeComp = () => {
    return (
        <div className={styles["main-container"]}>
            <div className={styles["homepage-container"]}>
                <h1 className={styles['homepage-header']}>
                    TO DO APP
                </h1>
                <h3 className={styles['homepage-secondary-header']}>
                    Keep track of your tasks and objectives
                </h3>
            </div>
        </div>
    )
}

export default HomeComp