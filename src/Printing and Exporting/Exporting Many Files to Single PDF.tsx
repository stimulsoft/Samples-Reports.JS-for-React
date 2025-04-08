import React, { useState } from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';
import '../styles.css';

async function exportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.renderedPages.clear();
    report.reportUnit = Stimulsoft.Report.StiReportUnitType.HundredthsOfInch;

    var tempReport = new Stimulsoft.Report.StiReport();
    for (var index = 0; index < 6; index++) {
        tempReport.loadDocumentFile('Reports/MasterDetailSubdetail.mdc');

        for (var page of tempReport.renderedPages.list) {
            page.report = tempReport;
            page.guid = Stimulsoft.System.Guid.newGuidString();
            report.renderedPages.add(page);
        }
    }

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}

function App() {
    const [isLoading, setIsLoading] = useState(false)
    
    const handleClick = () => {
        setIsLoading(true);
        setTimeout(async () => {
            await exportPdf();
            setIsLoading(false);
        }, 0);
    } 

    return (
        <div className='container'>
            <h4>This sample demonstrates how to export a report to a PDF file and save it:</h4>
            <div className='container-button'>
                <button onClick={handleClick} disabled={isLoading} className='button' title='Export Report to PDF File'>
                    {isLoading ? "Please, wait..." : "Export to PDF"}
                </button>
            </div>
        </div>
    );
}

export default App;
