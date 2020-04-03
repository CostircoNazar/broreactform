import React,{useState} from'react';
import TabBarButton from "./Components/TapBarButton";

const initSchema=[
    {
        id: 'Register',
        label:'New Account',
    },
    {
        id: 'Login',
        label:'Sign In',
    }
];

function TabBar(){
    const[tabBarButtonId, setTabBarButtonId]=useState('Login');

    return(
        <div>
            {initSchema.map(({id,label},index)=>{
                return (
                    <TabBarButton
                        key={index}
                        isSelected={tabBarButtonId === id}
                        onClick = { (id)=> {
                            if (tabBarButtonId !== id){
                                setTabBarButtonId(id)
                            }
                          }
                        }
                        id={id}
                        label={label}
                    />
                )
            })}
        </div>
    )
}

export default TabBar