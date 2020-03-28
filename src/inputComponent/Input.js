import React from 'react';
import './Input.css'

function Input(props) {
    return(
        <input {...props} className='defaultInput'/>
    )
}

export default Input