import React, { useState } from 'react'

import styles from "./FormComponent.module.scss";
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { taskState, addTask } from '../../features/tasks/taskSlice';


const FormComponent = () => {

    const tasksState = useAppSelector(taskState);
    const dispatch = useAppDispatch();

    const [errorMessage, setErrorMessage] = useState('');
    const [addedMessage, setaddedMessage] = useState('');

    const [data, setData] = useState({
        taskName: '',
        taskBody: '',
        taskStart: '',
        taskEnd: '',
        taskOwner: ''
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

        setErrorMessage(state => '');
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (tasksState.tasks?.find(task => task.taskName === data.taskName)) {
            return setErrorMessage(state => 'This name already exists!');
        }
        if (!errorMessage) {
            dispatch(addTask(data));
            setData({ taskName: '', taskBody: '', taskStart: '', taskEnd: '', taskOwner: '' });
            setaddedMessage(state => 'Task added!');
        }
    }

    const handleAddedMessage = () => {
        setaddedMessage(state => '');
    }

    return (
        <section className={styles.formContainer}>

            {
                addedMessage
                    ?
                    <div className={styles.addedContainer}>
                        <p>{addedMessage}</p>
                        <button onClick={() => handleAddedMessage()}>OK</button>
                    </div>
                    : null
            }
            <form className={styles.taskForm} onSubmit={(e) => submitTask(e)}>
                <h3>Add task form</h3>
                <label htmlFor="taskName">Task name*</label>
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
                <p className={styles.errorMessage}>{errorMessage ? errorMessage : null}</p>

                <label htmlFor="taskBody">Task body*</label>
                <textarea
                    className={styles.inputField}
                    id="taskBody"
                    name="taskBody"
                    placeholder='Task description...'
                    onChange={(e) => changeHandler(e)}
                    value={data.taskBody}
                    required
                />
                <label htmlFor="taskOwner">Task issued by*</label>
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
                <label htmlFor="taskStart">Task start date*</label>
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
                <label htmlFor="taskEnd">Task end date*</label>
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
                <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
        </section>
    )
}

export default FormComponent