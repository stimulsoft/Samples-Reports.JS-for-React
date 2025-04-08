import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';
import '../styles.css';

async function saveReportHtml() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleList.mrt');

    await report.renderAsync2();

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.html', 'text/html;charset=utf-8');
}

function App() {
    return (
        <div className='container'>
            <h4>This sample demonstrates how to export a report to an HTML file and save it:</h4>
            <div className='container-button'>
                <button onClick={saveReportHtml} className='button' title='Export Report to HTML File'>
                    Export to HTML
                </button>
            </div>
        </div>

    );
}

export default App;
