import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');
    report.dictionary.clear();

    var database = new Stimulsoft.Report.Dictionary.StiJsonDatabase('Demo', 'Demo.json');
    report.dictionary.databases.add(database);
    report.dictionary.synchronize();

    return <Viewer report={report} />;
}

export default App;
