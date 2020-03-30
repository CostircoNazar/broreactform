import React, {useState} from 'react';
import UserListItem from "./components/UserListItem";

let userInfo;
userInfo = [
    {
        id: 'NewUser',
        userEmail: 'email',
        userName: 'Name',
        isSelected: false,
    }
];

function UserList(){
    const[userId, setUserId]=useState('NewUser');

    return(
        <div>

            <UserListItem/>
        </div>
    )
}

export default UserList