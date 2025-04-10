import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/BookmarksAndHyperlinks.mrt');

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.appearance.rightToLeft = true;

    return <Viewer options={viewerOptions} report={report} />;
}

export default App;
