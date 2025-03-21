import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';

var report: Stimulsoft.Report.StiReport;

function printPdf_Click() {
    report.printToPdf();
}

function printHtml_Click() {
    report.print();
}

function App() {
    report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');

    return (
        <div>
            <button onClick={printPdf_Click}>Print Report as PDF</button>
            <button onClick={printHtml_Click}>Print Report as HTML</button>
        </div>
    );
}

export default App;
