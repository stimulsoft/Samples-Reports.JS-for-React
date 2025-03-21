import React from 'react';
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-react/designer';

function App() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('SimpleList.mrt');

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;

    Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile('de.xml');

    // Add a localization file to the menu and use a custom label. Note that the file will not load until it is chosen
    Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile('ja.xml', false, 'MyLabel');

    // Add a localization file to the menu and load the file when the designer is started
    Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile('ko.xml', true);

    // Add a localization file and set it as the default. The default file will be loaded before the designer starts
    Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile('pt.xml', true);
    Stimulsoft.Base.Localization.StiLocalization.cultureName = 'Portuguese';

    return <Designer options={designerOptions} report={report} />;
}

export default App;
