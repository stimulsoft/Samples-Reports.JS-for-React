import React from 'react';
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-react/designer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.theme = Stimulsoft.Designer.StiDesignerTheme.Office2022WhiteViolet;
    designerOptions.appearance.fullScreenMode = true;

    return <Designer options={designerOptions} report={report} />;
}

export default App;
