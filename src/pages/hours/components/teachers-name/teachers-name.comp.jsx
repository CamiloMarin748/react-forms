import React from 'react';

import './teachers-name.style.css';


const TeachersName = (props) =>{
    return (
<div className="teachers-name-container">
    {props.teacherName}
</div>

    ); 
    
}

export default TeachersName;