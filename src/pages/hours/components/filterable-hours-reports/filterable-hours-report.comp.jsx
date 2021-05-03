import React from 'react';
import HoursReports from '../hours-reports/hours-reports.comp';

//import SearchBar from '../search-bar/search-bar.comp';


import './filterable-hours-report.style.css';


const FilterableHoursReports = (props) => {

    return (
        <div className= "filterable-hours-report-container">  
         
         FILTERABLE HOURS REPORT
        
         <HoursReports reportsList={props.reportsList}/>
         
        </div>

    );
}

export default FilterableHoursReports;