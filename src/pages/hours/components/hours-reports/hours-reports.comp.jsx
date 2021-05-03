import React, { useState } from 'react';
import HoursPage from '../../hours.page'
import TeachersName from '../teachers-name/teachers-name.comp';
import TeachersHoursReport from '../teachers-hours-report/teachers-hours-report.comp';

import './hours-reports.style.css';

const HoursReports = (props) => {

    const [teacherName, setTeacherName] = useState('');
    const [group, setGroup] =  useState('');
    const [hours, setHours] =  useState(0);
    const [date, setDate] =  useState('');

const addReport =(event)=>{
    event.preventDefault();
    console.log('Teacher Name ' + teacherName);
    console.log('Group ' + group);
    console.log('hours ' + hours);
    console.log('Date ' + date);
}

return (
    <div className="hours-reports-container">
        hours reports
<br/><br/>
        group  #hours date

        <div>
        {props.reportsList.map((teacherName, index)=>{
            return (
            <React.Fragment key={teacherName.id}>
            <TeachersName teacherName = {teacherName.name}/>
            {teacherName.teacherReport.map((report, indexReport)=>{
                return (
                <TeachersHoursReport 
                key = {report.id}
                report = {report}
                />
                );
            })}
                </React.Fragment>
            );
        })}
        </div>
<div className="report-form">
<form >
     <table>
         <tbody>

        <tr>
            <td>Select a teacher</td>
        </tr>

        <tr>
            <td>
        <select
        value={teacherName}
        onChange={(event)=>{
            setTeacherName(event.target.value);
        }}>
                <option value="d1">Juan</option>
                <option value="d2">Ana</option>
              </select>
              </td>
        </tr>

        <tr>
            <td>Group</td>
        </tr>
        <tr>
            <td><input type="text" className="form input"  
            value={group} 
            onChange ={(event)=>{
                setGroup(event.target.value);
                }}/>
            </td>
        </tr>

        <tr>
            <td>Number of hours</td>
        </tr>
        <tr>
            <td><input type="number" className="form input"
            value={hours} 
            onChange ={(event)=>{
                setHours(event.target.value);
                }}
            /></td>
        </tr>

        <tr>
            <td>date</td>
        </tr>
        <tr>
            <td><input type="date" className="form input"
            value={date}
            onChange = {(event)=>{
                setDate(event.target.value);
            }}
            /></td>
        </tr>

        <tr>
            <td>
                <button
                onClick={addReport}
                >Add report</button>
            </td>
        </tr>
        </tbody>
     </table>              
</form>
          </div>
    </div>

);

} 

export default HoursReports;