import React from 'react';


function UserListItem({id, userName, userEmail, isSelected, onSelect}){


    return(
        <div className= {'userListItem ' + (isSelected ? 'userListItemIsSelected' : ' ')}
             onClick={()=>onSelect(id)}>

            <span>{userName}</span>
            <span>{userEmail}</span>

        </div>
    )
}


export default UserListItem