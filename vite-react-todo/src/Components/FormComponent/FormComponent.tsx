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
import { taskState, addTask, globalState, setToShowForm } from '../../features/tasks/taskSlice';
import { globalState, setToShowForm } from '../../features/globalSlice';

const FormComponent = () => {
    const globalStateData = useAppSelector(globalState);
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
    
      const handleHideContainer = (e: React.MouseEvent<HTMLDivElement>) => {
    e.target === e.currentTarget
      ? dispatch(setToShowForm(!globalStateData.showForm))
      : null
  }


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
                <span className={styles.back} onClick={()=>handleHideContainer()}></span>
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
                    />
                </div>
                <p className={styles.errorMessage}>{errorMessage ? errorMessage : null}</p>
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
                        required pattern="\d{4}-\d{2}-\d{2}"
                        onChange={(e) => changeHandler(e)}
                        value={data.taskStart}
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
                        required pattern="\d{4}-\d{2}-\d{2}"
                        onChange={(e) => changeHandler(e)}
                        value={data.taskEnd}
                    />
                </div>
                <button type="submit" className={styles.submitBtn}> Submit <BsFillCheckCircleFill /> </button>
            </form>
            {
                addedMessage
                    ?
                    <div className={styles.addedContainer}>
                        <p>{addedMessage}</p>
                        <button onClick={() => handleAddedMessage()}>OK</button>
                    </div>
                    : null
            }
        </section>
    )
}

export default FormComponent
