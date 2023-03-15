import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <nav>
                <ul role='list'>
                    <li>
                        <NavLink to={'/all-tasks'}
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.pending
                            }
                        >All tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/done-deleted-tasks'}
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.pending
                            } >
                            Completed/Deleted tasks
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar