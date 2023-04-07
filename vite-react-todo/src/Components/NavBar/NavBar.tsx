import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles.container} data-cy="container">
            <nav>
                <ul role='list' data-cy="list">
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
                </ul>
            </nav>
        </div>
    )
}

export default NavBar