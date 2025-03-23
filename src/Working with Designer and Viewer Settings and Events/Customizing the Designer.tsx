import React from 'react';
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-react/designer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.theme = Stimulsoft.Designer.StiDesignerTheme.Office2022LightGrayTeal;
    designerOptions.appearance.fullScreenMode = true;
    designerOptions.toolbar.showPreviewButton = false;
    designerOptions.toolbar.showFileMenu = false;
    designerOptions.components.showImage = false;
    designerOptions.components.showShape = false;
    designerOptions.components.showPanel = false;
    designerOptions.components.showCheckBox = false;
    designerOptions.components.showSubReport = false;

    return <Designer options={designerOptions} report={report} />;
}

export default App;
