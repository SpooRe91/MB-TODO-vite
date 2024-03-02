
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { globalState, setToShowForm } from '../../features/globalSlice';
import { MdFormatListNumbered } from 'react-icons/md';
import useGetAgentView from '../../hooks/useGetAgentView';

const NavBar = () => {
    
    const dispatch = useAppDispatch();
    const globalStateData = useAppSelector(globalState);

    return (
        <div className={styles.container} data-cy="container">
            <nav>
                <ul role='list' data-cy="list">
                    <li>
                        <NavLink to={'/'}
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.pending
                            }
                            data-cy="all-tasks">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/all-tasks'}
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.pending
                            }
                            data-cy="all-tasks">All tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/done-deleted-tasks'}
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.pending
                            }
                            data-cy='done-tasks'>
                            Completed/Deleted tasks
                        </NavLink>
                    </li>
                    <li>
                        <button
                            className={styles['showFormButton']}
                            data-cy='showFormButton'
                            onClick={() => dispatch(setToShowForm(!globalStateData.showForm))}>
                            <MdFormatListNumbered />
                            {globalStateData.showForm ? 'Hide task from' : 'Show task form'}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar