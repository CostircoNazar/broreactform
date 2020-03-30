import React from 'react';

function UserListItem({id, userEmail, userName, isSelected, onSelect}){

    return(
        <div className='userListItem'>
            {userEmail}
            {userName}
        </div>
    )
}

export default UserListItem