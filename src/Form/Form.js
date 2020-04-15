import React, {useState} from 'react';
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import './styles.css'


function Form(props) {

    const onPreSubmit= ()=> {
        props.onSubmit(props.initValues.email,props.initValues.password)
    };

    const getValue=(inputData, name)=> {
        props.handleChanges(inputData, name)
    };

    return(
        <form className='loginForm' onSubmit={onPreSubmit} name={props.name} >
                <Input
                    type='email'
                    autoComplete=''
                    placeholder='email'
                    name='email'
                    value={props.initValues.email}
                    onChange={(e) => getValue(e.target.value, 'email')}
                />
            <Input
                type='password'
                placeholder='password'
                autoComplete=''
                name='password'
                value={props.initValues.password}
                onChange={(e) => getValue(e.target.value, 'password')}


            />
            <SubmitButton label='Submit'/>
        </form>
    )
}
export default Form