import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';
import '../styles.css';

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    await report.renderAsync2();

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}

function App() {
    return (
        <div className='container'>
            <h4>This sample demonstrates how to export a report to a PDF file and save it:</h4>
            <div className='container-button'>
                <button onClick={saveReportPdf} className='button' title='Export Report to PDF File'>
                    Export to PDF
                </button>
            </div>
        </div>

    );
}

export default App;
