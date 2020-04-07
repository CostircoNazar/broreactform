import React, {useState} from'react';
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



    return(
        <div className='loginPage'>

            <TabBar tabBarButtonId={tabBarButtonId}
                    setTabBarButtonId={setTabBarButtonId}

            />

            {tabBarButtonId === 'login' ?
                <Form onSubmit={handleLogin} initValues={login} name='Logged'/> :
                <Form onSubmit={handleSignUp} initValues={signUp} name='new'/>
            }

        </div>
    )

}

export default LoginPage