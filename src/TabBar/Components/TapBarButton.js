import React from 'react';

function TabBarButton({id, label, isSelected, onClick}) {

    return (
        <button onClick={()=> onClick(id)} type='submit'>{label}</button>
    )
}

export default TabBarButton
