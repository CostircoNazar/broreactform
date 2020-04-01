import React from 'react';

function UserListItem({id, userName, userEmail, isSelected, onSelect}, props){

    return(
        <div className='userListItem' onClick={()=>onSelect(id)}>
            <span>{userName}</span>
            <span>{userEmail}</span>
        </div>
    )
}

export default UserListItem