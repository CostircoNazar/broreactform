import React from 'react';
import './Styles.css'

function SubmitButton(props) {
    return(
        <button className='defaultButton'>{props.label}</button>
    )
}

export default SubmitButton