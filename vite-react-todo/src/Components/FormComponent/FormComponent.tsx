import React, { useState } from 'react'

import styles from "./FormComponent.module.scss";
import {
    MdOutlineDescription,
    MdGrading,
    MdPersonPin,
    MdDateRange,
} from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from '../../App/hooks';
import { taskState, addTask, editTask } from '../../features/tasks/taskSlice';
import { globalState, setToEditTask, setToShowForm } from '../../features/globalSlice';
import { nanoid } from '@reduxjs/toolkit';

const FormComponent = () => {

    const globalStateData = useAppSelector(globalState);
    const tasksState = useAppSelector(taskState);
    const dispatch = useAppDispatch();

    const [errorMessage, setErrorMessage] = useState('');
    const [addedMessage, setaddedMessage] = useState('');

    const [data, setData] = useState(globalStateData.taskToEdit ? globalStateData.taskToEdit : {
        taskName: '',
        taskBody: '',
        taskStart: '',
        taskEnd: '',
        taskOwner: '',
        taskId: ''
    });

    const handleHideContainer = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.target === e.currentTarget
            ? (dispatch(setToShowForm(!globalStateData.showForm)))
            : null
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

        setErrorMessage(state => '');
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!errorMessage) {

            if (globalStateData.taskToEdit) {
                dispatch(editTask(data));
                setaddedMessage(state => 'Task edited!');
                dispatch(setToEditTask(null))
            } else {
                if (tasksState.tasks?.find(task => task.taskName === data.taskName)) {
                    return setErrorMessage(state => 'This name already exists!');
                }

                dispatch(addTask({ ...data, taskId: nanoid() }));
                setaddedMessage(state => 'Task added!');
            }
            setData({ taskName: '', taskBody: '', taskStart: '', taskEnd: '', taskOwner: '', taskId: '' });
        }
    };

    const handleAddedMessage = () => {
        setaddedMessage(state => '');
    };

    return (
        <section className={styles.formContainer} data-cy="form-component">
            <span className={styles.back} onClick={(e) => handleHideContainer(e)} data-cy="show-hide-background"></span>

            <form className={styles.taskForm} onSubmit={(e) => submitTask(e)}>
                <h3>Add task form</h3>
                <div className={styles.inputContainer}>
                    <label htmlFor="taskName">
                        <MdOutlineDescription className={styles.icon} /> Task name*
                    </label>

                    <input
                        className={styles.inputField}
                        style={{ background: data.taskName ? "green" : "#830000" }}
                        type="text"
                        id="taskName"
                        name="taskName"
                        placeholder='Task Name...'
                        onChange={(e) => changeHandler(e)}
                        value={data.taskName}
                        required
                        data-cy="taskName"
                    />
                </div>
                <p className={styles.errorMessage} data-cy="error-name-already-exists">{errorMessage ? errorMessage : null}</p>
                <div className={styles.inputContainer}>
                    <label htmlFor="taskBody"><MdGrading className={styles.icon} /> Task body*</label>
                    <textarea
                        className={styles.inputField}
                        style={{ background: data.taskBody ? "green" : "#830000" }}
                        id="taskBody"
                        name="taskBody"
                        placeholder='Task description...'
                        onChange={(e) => changeHandler(e)}
                        value={data.taskBody}
                        required
                        data-cy="taskBody"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="taskOwner"><MdPersonPin className={styles.icon} /> Task issued by*</label>
                    <input
                        className={styles.inputField}
                        style={{ background: data.taskOwner ? "green" : "#830000" }}
                        type="text"
                        id="taskOwner"
                        name="taskOwner"
                        placeholder='John Smith...'
                        onChange={(e) => changeHandler(e)}
                        value={data.taskOwner}
                        required
                        data-cy="taskOwner"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="taskStart"><MdDateRange className={styles.icon} /> Task start date*</label>
                    <input
                        className={styles.inputField}
                        style={{ background: data.taskStart ? "green" : "#830000" }}
                        type="date"
                        id="taskStart"
                        name="taskStart"
                        placeholder='01.01.2023...'
                        required pattern="\d{2}-\d{2}-\d{4}"
                        onChange={(e) => changeHandler(e)}
                        value={data.taskStart}
                        data-cy="taskStart"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="taskEnd"><MdDateRange className={styles.icon} /> Task end date*</label>
                    <input
                        className={styles.inputField}
                        style={{ background: data.taskEnd ? "green" : "#830000" }}
                        type="date"
                        id="taskEnd"
                        name="taskEnd"
                        placeholder='01.01.2023...'
                        required pattern="\d{2}-\d{2}-\d{4}"
                        onChange={(e) => changeHandler(e)}
                        value={data.taskEnd}
                        data-cy="taskEnd"
                    />
                </div>
                {
                    globalStateData.taskToEdit
                        ?
                        <button
                            type="submit"
                            className={styles.submitBtn}>
                            Edit
                            <BsFillCheckCircleFill />
                        </button>
                        :
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            data-cy="submit-button">
                            Submit
                            <BsFillCheckCircleFill />
                        </button>
                }
            </form>
            {
                addedMessage
                    ?
                    <div
                        className={styles.addedContainer}
                        data-cy="added-message"
                    >
                        <p>{addedMessage}</p>
                        <button
                            onClick={() => handleAddedMessage()}
                            data-cy="added-ok-button">
                            OK
                        </button>
                    </div>
                    : null
            }
        </section>
    )
}

export default FormComponent
