import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';
import '../styles.css';

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

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
        <div className='container'>
            <h4>This example shows how to export a report to a PDF file and adjust the export settings via code. Please, enter the password <b>123</b> to show report</h4>
            <div className='container-button'>
                <button onClick={saveReportPdf} className='button' title='Export Report to PDF File'>
                    Export PDF
                </button>
            </div>
        </div>

    );
}

export default App;
