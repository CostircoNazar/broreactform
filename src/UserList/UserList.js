import React,{useState} from 'react';
import UserListItem from "./component/UserListItem";
import './styles.css'

const usersInfo=[
    {
        id:1,
        userName:'user',
        userEmail:'user@email.com',
        isSelected: false
    } ,
    {
        id:2,
        userName:'user',
        userEmail:'user@email.com',
        isSelected:false
    }
];

function UserList() {
    const [userId, setUserId] = useState(0);

    const selectItemHandler=(id)=> {
        if (id !== userId) {
            console.log(id);
            setUserId(id);
        }
    };


    return(
        <div className='userListItem'>
            {usersInfo.map((value,index)=> (
                <UserListItem
                    key={index}
                    id={value.id}
                    userName={value.userName}
                    userEmail={value.userEmail}
                    isSelected={userId === value.id}
                    onSelect={selectItemHandler}
                />

                    )
                )
            }

        </div>
    )

}

export default UserList