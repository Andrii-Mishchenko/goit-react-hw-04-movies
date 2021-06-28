import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css'

const GoBackButton = ({ onClick }) => (
    <button className={styles.GoBackButton} type="button" onClick={onClick}> Go back </button>
)

GoBackButton.propTypes = {
    onClick: PropTypes.func.isRequired,      
}
 
export default GoBackButton;