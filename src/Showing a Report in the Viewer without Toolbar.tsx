import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.toolbar.visible = false;

    return <Viewer options={viewerOptions} report={report} />;
}

export default App;
