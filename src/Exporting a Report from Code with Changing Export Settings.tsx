import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');

    await report.renderAsync2();

    var settings = new Stimulsoft.Report.Export.StiPdfExportSettings();
    settings.creatorString = 'My Company Name';
    settings.keywordsString = 'SimpleList Report Export';
    settings.embeddedFonts = false;
    settings.passwordInputUser = '123';

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, null, settings);
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
