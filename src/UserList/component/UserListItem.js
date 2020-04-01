import React from 'react';


function UserListItem({id, userName, userEmail, isSelected, onSelect}, props){
    const style = isSelected ?
        {
            border:'2px solid green',
            maxHeight:'50px',
            maxWidth:'-webkit-fill-available'} : {};

    const spanStyle = {
        display:'flex',
        flexWrap:'wrap'
    };

    return(
        <div style={style} className='userItem' onClick={()=>onSelect(id)}>
            <span style={spanStyle}>{userName}</span>
            <span style={spanStyle}>{userEmail}</span>
        </div>
    )
}

export default UserListItem