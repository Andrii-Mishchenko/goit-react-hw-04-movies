import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from './routes'
import styles from '../styles.module.css';



const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <ul className={styles.NavigationList}>
                <li><NavLink exact to={routes.HomePage} className={styles.NavLink} activeClassName={styles.NavLinkActive}>Home</NavLink></li>
                <li><NavLink to={routes.MoviesPage} className={styles.NavLink} activeClassName={styles.NavLinkActive}>Movies</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default Navigation;