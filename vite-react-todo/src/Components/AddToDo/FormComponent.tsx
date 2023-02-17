import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { taskState, addTask, clearError } from '../../features/tasks/taskSlice';

import styles from "./AddToDo.module.scss";

const FormComponent = () => {

    const tasksState = useAppSelector(taskState);
    const dispatch = useAppDispatch();

    const [data, setData] = useState({ taskName: '', taskBody: '', taskStart: '', taskEnd: '', taskOwner: '' });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("submitted");
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }


    const submitTask = (e: React.FormEvent<EventTarget>) => {
        console.log("submitted");
        e.preventDefault();
        dispatch(addTask(data));
        setData(state => ({ ...state }));

        if (tasksState.error) {
            return setData(state => ({ ...state, taskName: '', }));
        }
        setData({ taskName: '', taskBody: '', taskStart: '', taskEnd: '', taskOwner: '' });
    }

    const handleClearError = () => dispatch(clearError());


    return (
        <form className={styles.taskForm} onSubmit={(e) => submitTask(e)}>
            <label htmlFor="taskName">Task name</label>
            <input
                className={styles.inputField}
                type="text"
                id="taskName"
                name="taskName"
                placeholder='Task Name...'
                onChange={(e) => changeHandler(e)}
                value={data.taskName}
                required
            />

            <label htmlFor="taskBody">Task body</label>
            <textarea
                className={styles.inputField}
                id="taskBody"
                name="taskBody"
                placeholder='Task description...'
                onChange={(e) => changeHandler(e)}
                value={data.taskBody}
                required
            />
            <label htmlFor="taskOwner">Task issued by</label>
            <input
                className={styles.inputField}
                type="text"
                id="taskOwner"
                name="taskOwner"
                placeholder='John Smith...'
                onChange={(e) => changeHandler(e)}
                value={data.taskOwner}
                required
            />
            <label htmlFor="taskStart">Task start date</label>
            <input
                className={styles.inputField}
                type="date"
                id="taskStart"
                name="taskStart"
                placeholder='01.01.2023...'
                required pattern="\d{4}-\d{2}-\d{2}"
                onChange={(e) => changeHandler(e)}
                value={data.taskStart}
            />
            <label htmlFor="taskEnd">Task end date (optional)</label>
            <input
                className={styles.inputField}
                type="date"
                id="taskEnd"
                name="taskEnd"
                placeholder='01.01.2023...'
                required pattern="\d{4}-\d{2}-\d{2}"
                onChange={(e) => changeHandler(e)}
                value={data.taskEnd}
            />
            <input type="submit" className={styles.submitBtn} />
            {
                tasksState.error
                    ?
                    <div>
                        <p>{tasksState.error}</p>
                        <button onClick={() => handleClearError()}>OK</button>
                    </div>
                    :
                    null
            }
        </form>
    )
}

export default FormComponent