import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function onEmailReport(args: Stimulsoft.Viewer.EmailReportArgs) {
    alert(`Email: ${args.settings.email} File name:${args.fileName}`);
}

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.toolbar.showSendEmailButton = true;

    return <Viewer options={viewerOptions} report={report} onEmailReport={onEmailReport} />;
}

export default App;
