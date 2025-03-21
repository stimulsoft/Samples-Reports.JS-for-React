import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    Stimulsoft.StiOptions.WebServer.url = 'http://localhost:9615/';

    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleListSQL.mrt');

    report.onBeginProcessData = function (args) {
        // You can change the SQL query parameters with the required values
        // For example: SELECT * FROM @Parameter1 WHERE Id = @Parameter2 AND Date > @Parameter3
        if (args.dataSource === 'customers') {
            args.parameters[0].value = 'Germany';
        }
    };

    return <Viewer report={report} />;
}

export default App;
