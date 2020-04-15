import React, {useState,useEffect} from'react';
import Form from "../Form/Form";
import TabBar from "../TabBar/TabBar";
import './styles.css'


function LoginPage() {
    const[login,setLogin] = useState({email:'',password:''});
    const[signUp, setSingUp] = useState({email:'',password:''});
    const[tabBarButtonId, setTabBarButtonId] = useState('login');

        const handleLogin= (email, password)=> {
            setLogin({email, password});
        };

         const handleSignUp= (email, password)=> {
             setSingUp({email, password});
         };


    const handleChanges=(inputData, name)=> {
      if (tabBarButtonId==='login') {
          setLogin( {...login,[name]:inputData})}
      if (tabBarButtonId==='register'){
          setSingUp({...signUp, [name]:inputData})}
    };

    useEffect(()=>{
        console.log('state is changed');
    },[tabBarButtonId])

    return(
        <div className='loginPage'>

            <TabBar tabBarButtonId={tabBarButtonId}
                    setTabBarButtonId={setTabBarButtonId}

            />
            {tabBarButtonId === 'login' ?
                <Form key='login'
                      handleChanges={handleChanges}
                      onSubmit={handleLogin}
                      initValues={login}
                      name='Logged'/>
                      :
                <Form key='register'
                      handleChanges={handleChanges}
                      onSubmit={handleSignUp}
                      initValues={signUp}
                      name='new'/>
            }

        </div>
    )

}

export default LoginPage