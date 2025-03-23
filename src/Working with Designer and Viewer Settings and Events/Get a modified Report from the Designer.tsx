import React from 'react';
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-react/designer';

var report = new Stimulsoft.Report.StiReport();
report.loadFile('Reports/SimpleList.mrt');

function App() {
    function onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
        alert('The link to the report has been changed');
        report = args.report;
    }

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;

    return <Designer options={designerOptions} report={report} onAssignedReport={onAssignedReport} />;
}

export default App;
