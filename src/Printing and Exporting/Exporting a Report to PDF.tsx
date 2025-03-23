import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    await report.renderAsync2();

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}

function App() {
    return (
        <div>
            <button onClick={saveReportPdf}>Export and Save PDF report to file</button>
        </div>
    );
}

export default App;
