import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('MasterDetail.mrt');

    report.onBeginProcessData = function (args) {
        if (args.database === 'JSON' && args.command === 'GetData') {
            // Add custom header to pass through backend server protection
            args.headers.push({ key: 'X-Auth-Token', value: '*YOUR TOKEN*' });
        }
    };

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.appearance.fullScreenMode = true;

    return <Viewer options={viewerOptions} report={report} />;
}

export default App;
