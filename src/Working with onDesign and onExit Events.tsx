import React, { useState } from 'react';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-react/viewer';
import { Designer } from 'stimulsoft-reports-js-react/designer';

var report = new Stimulsoft.Report.StiReport();
report.loadFile('SimpleList.mrt');

function App() {
    function onDesignReport(args: Stimulsoft.Viewer.DesignReportArgs) {
        setIsViewer(false);
    }

    function onOpenedReport(args: Stimulsoft.Viewer.OpenedReportArgs) {
        report = args.report;
    }

    async function onExitDesigner() {
        await report.renderAsync2();
        setIsViewer(true);
    }

    function onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
        report = args.report;
    }

    const [isViewer, setIsViewer] = useState(true);

    var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
    viewerOptions.appearance.fullScreenMode = true;
    viewerOptions.toolbar.displayMode = Stimulsoft.Viewer.StiToolbarDisplayMode.Separated;
    viewerOptions.toolbar.showFullScreenButton = false;
    viewerOptions.toolbar.showDesignButton = true;

    var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
    designerOptions.appearance.fullScreenMode = true;
    designerOptions.toolbar.showFileMenuExit = true;

    if (isViewer)
        return (
            <Viewer
                options={viewerOptions}
                report={report}
                onDesignReport={onDesignReport}
                onOpenedReport={onOpenedReport}
            />
        );
    else
        return (
            <Designer
                options={designerOptions}
                report={report}
                onExit={onExitDesigner}
                onAssignedReport={onAssignedReport}
            />
        );
}

export default App;
