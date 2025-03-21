import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.appearance.fullScreenMode = true;

    // Add a localization file and load the file when the viewer is started
    Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile('pt.xml');

    return <Viewer options={viewerOptions} report={report} />;
}

export default App;
