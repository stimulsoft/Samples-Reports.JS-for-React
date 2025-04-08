import React, { useState } from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';
import '../styles.css';

function App() {
    const [selectedCountry, setSelectedCountry] = useState('en-US');

    const locFile = `Localizations/` + selectedCountry.substring(0, 2) + '.xml';
    Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(locFile);

    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Reports/Globalization.mrt');
    report.culture = selectedCountry;

    return (
        <div className='container'>
            <div className='container-control'>
                <label className='label-globalization'>Select Language</label>
                <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className='select-globalization'
                >
                    <option value='en-US'>English</option>
                    <option value='de-DE'>Deutsch</option>
                    <option value='ru-RU'>Russian</option>
                </select>
            </div>
            <div>
                <Viewer key={selectedCountry} report={report} />
            </div>
        </div>

    );
}

export default App;
