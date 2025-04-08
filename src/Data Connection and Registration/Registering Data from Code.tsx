import React, { useState } from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';
import '../styles.css';


function App() {
    const [report, setReport] = useState<Stimulsoft.Report.StiReport>();

    function updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile('Reports/TwoSimpleLists.mrt');
        report.dictionary.databases.clear();
        report.regData('Demo', 'Demo', dataSet);
        setReport(report);
    }

    function buttonXmlClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readXmlSchemaFile('Data/Demo.xsd');
        dataSet.readXmlFile('Data/Demo.xml');

        updateReport(dataSet);
    }

    function buttonJsonClick() {
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile('Data/Demo.json');

        updateReport(dataSet);
    }

    return (
        <div className='container'>
            <div className='container-button'>
                <button onClick={buttonXmlClick} className='button'>Register XML Data</button>
                <button onClick={buttonJsonClick} className='button'>Register JSON Data</button>
            </div>
            <div>
                <Viewer report={report} />
            </div>
        </div>
    );
}

export default App;
