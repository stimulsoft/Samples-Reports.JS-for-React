import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';
import '../styles.css';

function App() {
    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.appearance.scrollbarsMode = true;
    viewerOptions.height = "100vh";

    var report1 = new Stimulsoft.Report.StiReport();
    report1.loadFile('Reports/SimpleList.mrt');

    var report2 = new Stimulsoft.Report.StiReport();
    report2.loadFile('Reports/TwoSimpleLists.mrt');

    return (
        <div className='container'>
            <h4>This sample demonstrates how to add two viewers to one page:</h4>
            <div className='container-viewer'>
                <Viewer report={report1} options={viewerOptions}/>
                <Viewer report={report2} options={viewerOptions}/>
            </div>
        </div>
    );
}

export default App;
