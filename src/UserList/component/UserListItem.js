import React from 'react';


function UserListItem({id, userName, userEmail, isSelected, onSelect}){


    return(
        <div className= {isSelected ? 'userListItem' : ''}
             onClick={()=>onSelect(id)}>

            <span>{userName}</span>
            <span>{userEmail}</span>

            {console.log(isSelected + ' isSelected')}
        </div>
    )
}


export default UserListItem