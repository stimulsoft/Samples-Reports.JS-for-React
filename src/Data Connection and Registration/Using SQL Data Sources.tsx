import React from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';

function App() {
    Stimulsoft.StiOptions.WebServer.url = 'http://localhost:9615/';

    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/SimpleListSQL.mrt');

    report.onBeginProcessData = function (args) {
        // In this event, it is possible to handle the data request, and replace the connection parameters
        // You can change the connection string
        // This example uses the 'Northwind' SQL database, it is located in the 'Data' folder
        // You need to import it and correct the connection string to your database

        if (args.connection === 'MySQL')
            args.connectionString = 'Server=localhost; Database=northwind; UserId=root; Pwd=;';

        // You can change the SQL query
        if (args.dataSource === 'customers') args.queryString = 'SELECT * FROM MyTable';
    };

    return <Viewer report={report} />;
}

export default App;
