import React, {useState} from 'react';
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import './styles.css'


function Form(props) {

    const onPreSubmit= ()=> {
        props.onSubmit(email,password)
    };


    return(
        <form className='loginForm' onSubmit={onPreSubmit} name={props.name} >
                <Input
                    type='email'
                    autoComplete=''
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            <Input
                type='password'
                placeholder='password'
                autoComplete=''
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}


            />
            <SubmitButton label='Submit'/>
        </form>
    )
}
export default Form