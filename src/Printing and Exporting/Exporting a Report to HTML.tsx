import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';

async function saveReportHtml() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    await report.renderAsync2();

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.html', 'text/html;charset=utf-8');
}

function App() {
    return (
        <div>
            <button onClick={saveReportHtml}>Export and Save HTML report to file</button>
        </div>
    );
}

export default App;
