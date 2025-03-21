import React, { useState } from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    const [report, setReport] = useState<Stimulsoft.Report.StiReport>();

    function updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile('TwoSimpleLists.mrt');
        report.dictionary.databases.clear();
        report.regData('Demo', 'Demo', dataSet);
        setReport(report);
    }

    function buttonXmlClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readXmlSchemaFile('Demo.xsd');
        dataSet.readXmlFile('Demo.xml');

        updateReport(dataSet);
    }

    function buttonJsonClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile('Demo.json');

        updateReport(dataSet);
    }

    return (
        <div>
            <button onClick={buttonXmlClick}>Register XML Data</button>
            <button onClick={buttonJsonClick}>Register JSON Data</button>
            <Viewer report={report} />
        </div>
    );
}

export default App;
