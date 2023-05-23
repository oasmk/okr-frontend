import React from 'react';
import CIcon from '@coreui/icons-react'
import deleteIcon from '../all_icon/delete.svg'

function Remove(props) {
    return (
        <div>
            <CIcon src={deleteIcon} className="normalIcon" alt="Logo"/>
            
        </div>
    );
}

export default Remove;