import React from 'react';
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-react/designer';

function App() {
    Stimulsoft.Report.Dictionary.StiCustomDatabase.registerCustomDatabase({
        serviceName: 'MyDatabase',
        sampleConnectionString: '123',
        designerCategory: '',
        process: function (command, callback) {
            if (command.command === 'TestConnection') callback({ success: false, notice: 'Error' });
            if (command.command === 'RetrieveSchema') callback({ success: true, data: demoData, types: demoDataTypes });
            if (command.command === 'RetrieveData')
                callback({
                    success: true,
                    data: demoData[command.queryString],
                    types: demoDataTypes[command.queryString],
                });
        },
        // data is only needed to specify the column types; it is enough to pass only the first line
        // if there is no data, then types are taken from types
        // and vice versa, if there are no types, the types are taken from data
    });

    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('CustomAdapter.mrt');

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;

    var demoData = {
        Table1: [
            {
                Column1: 'value1',
                Column2: 1,
                Column3: Stimulsoft.System.Guid.newGuidString(),
            },
            {
                Column1: 'value2',
                Column2: 2,
                Column3: Stimulsoft.System.Guid.newGuidString(),
            },
            {
                Column1: 'value3',
                Column2: 3,
            },
        ],
        Table2: [
            {
                Column1: 'value1',
                Column2: 1,
            },
            {
                Column1: 'value2',
                Column2: 2,
            },
            {
                Column1: 'value3',
                Column2: 3,
            },
        ],
    };

    var demoDataTypes = {
        Table1: {
            Column1: 'string',
            Column2: 'number',
            Column3: 'Stimulsoft.System.Guid',
        },
        Table2: {
            Column1: 'string',
            Column2: 'Stimulsoft.System.Int32',
        },
    };

    return <Designer options={designerOptions} report={report} />;
}

export default App;
