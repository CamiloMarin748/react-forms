import React from 'react';

import './teachers-hours-report.style.css';


const TeachersHoursReport = (props) => { 
    return (
    <div className="teachers-hours-report-container">
            
                 <span> {props.report.group} </span>
                 {props.report.date}

    </div>
    );
}

export default TeachersHoursReport;