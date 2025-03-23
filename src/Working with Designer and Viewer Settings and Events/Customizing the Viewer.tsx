import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.appearance.theme = Stimulsoft.Viewer.StiViewerTheme.Office2022LightGrayTeal;
    viewerOptions.appearance.fullScreenMode = true;
    viewerOptions.toolbar.showOpenButton = false;
    viewerOptions.exports.showExportToPdf = false;

    return <Viewer options={viewerOptions} report={report} />;
}

export default App;
