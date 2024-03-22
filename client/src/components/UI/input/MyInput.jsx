import React from 'react';
import classes from './MyInput.module.css';

// Компонент стилизованной инпута
const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput}/>
    )
}

export default MyInput;