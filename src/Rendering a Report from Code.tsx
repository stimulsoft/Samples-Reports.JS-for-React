import React from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js-react';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');

    async function renderReport() {
        await report.renderAsync2();

        document.getElementById('message').innerText =
            'The report rendering is completed. Pages: ' + report.renderedPages.count;
        document.getElementById('reportJson').innerText = report.saveDocumentToJsonString();
    }

    return (
        <div>
            <button onClick={renderReport}>Render the Report</button>
            <br />
            <br />
            <div id='message'></div>
            <pre id='reportJson'></pre>
        </div>
    );
}

export default App;
