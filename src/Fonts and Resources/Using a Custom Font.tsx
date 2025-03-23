import React from 'react';
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-react/designer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/CusomFontSimpleList.mrt');

    // Adding Custom Font
    Stimulsoft.Base.StiFontCollection.addFontFile('Fonts/LongCang-Regular.ttf');

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;

    return <Designer options={designerOptions} report={report} />;
}

export default App;
