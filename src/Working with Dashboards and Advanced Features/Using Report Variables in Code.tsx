import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/Variables.mrt');

    report.setVariable('Name', 'Andrew');
    report.setVariable('Surname', 'Fox');
    report.setVariable('Email', 'email@dot.com');
    report.setVariable('Address', 'Address');
    report.setVariable('Sex', true);
    report.setVariable('BirthDay', Stimulsoft.System.DateTime.fromString('10.10.2010'));

    return <Viewer report={report} />;
}

export default App;
