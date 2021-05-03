import React from 'react';
import FilterableHoursReports from './components/filterable-hours-reports/filterable-hours-report.comp';

const HoursPage = () => {

    let reportsList = [
        {
            id:"d1",
            name: 'Juan',
            teacherReport: [
                {
                    id: "d1r1",
                    group: "UNAL 1",
                    date: "02/03/2021",
                    numHours: 2, 
                },
                {
                    id: "d1r2",
                    group: "UNAL 2",
                    date: "03/03/2021",
                    numHours: 3,
                },
                {
                    id: "d1r3",
                    group: "UNAL 3",
                    date: "04/03/2021",
                    numHours: 4,
                }
            ]
        },

        {
            id: "d2",
            name: 'Ana',
            teacherReport: [
                {
                    id:"d2r1",
                    group: "UCaldas 1",
                    date: "02/03/2021",
                    numHours: 2, 
                },
                {
                    id:"d2r2",
                    group: "UCaldas 2",
                    date: "03/03/2021",
                    numHours: 3,
                },
                {
                    id:"d2r3",
                    group: "UCaldas 3",
                    date: "04/03/2021",
                    numHours: 4,
                }
            ]
        }
    ];
    

    return (

        <>
          <FilterableHoursReports reportsList={reportsList}/>
          
        </>
        );
}

export default HoursPage;



