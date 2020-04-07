import React from 'react';
import './style.css';

function TabBarButton({id, label, isSelected, onClick}) {

    return (
        <div key={id}
             className={'tabBarButton' + (isSelected ? ' isSelected' : '')}
             onClick={onClick}>
        <button>{label}</button>

        </div>
    )
}

export default TabBarButton
