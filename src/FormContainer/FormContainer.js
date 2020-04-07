import React from 'react';
import Form from '../Form/Form.js';
import './styles.css'
import TabBar from "../TabBar/TabBar";

 function FormContainer() {

    return(
        <div className='formContainer'>
            <TabBar/>
            <Form/>
        </div>
    )
}

export default FormContainer

