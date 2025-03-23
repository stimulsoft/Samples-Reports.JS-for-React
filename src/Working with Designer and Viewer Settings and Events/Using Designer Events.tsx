import React from 'react';
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-react/designer';

function onSaveReport(args: Stimulsoft.Designer.SaveReportArgs) {
    alert('onSaveReport event');
}

function onCreateReport(args: Stimulsoft.Designer.CreateReportArgs) {
    var dataSet = new Stimulsoft.System.Data.DataSet('Demo');
    dataSet.readJsonFile('Data/Demo.json');
    args.report.regData('Demo', 'Demo', dataSet);
    args.report.dictionary.synchronize();
}

function onPreviewReport(args: Stimulsoft.Designer.PreviewReportArgs) {
    alert('onPreviewReport event');
}

function onExit(args: Stimulsoft.Report.EventDataArgs) {
    alert('onExit event');
}

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;

    return (
        <Designer
            options={designerOptions}
            report={report}
            onSaveReport={onSaveReport}
            onCreateReport={onCreateReport}
            onPreviewReport={onPreviewReport}
            onExit={onExit}
        />
    );
}

export default App;
