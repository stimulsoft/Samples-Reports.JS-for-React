import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { default as LocalizingTheDesigner } from './Localizing the Designer';
import { default as LocalizingTheViewer } from './Localizing the Viewer';
import { default as GlobalizingReport } from './Globalizing Report';

import { default as UsingCustomFont } from './Using a Custom Font';
import { default as AddingFontToTheResource } from './Adding a Font to the Resource';

import { default as PrintingTheReportFromCode } from './Printing the Report from Code';
import { default as ExportingReportToPDF } from './Exporting a Report to PDF';
import { default as ExportingReportToHTML } from './Exporting a Report to HTML';
import { default as ExportingReportFromCodeWithChangingExportSettings } from './Exporting a Report from Code with Changing Export Settings';
import { default as ExportingManyFilesToSinglePDF } from './Exporting Many Files to Single PDF';

import { default as CreatingNewDataConnectionFromCode } from './Creating a new Data Connection from code';
import { default as RegisteringDataFromCode } from './Registering Data from Code';
import { default as UsingSqlDataSources } from './Using SQL Data Sources';
import { default as UsingParametersInSqlQuery } from './Using Parameters in SQL Query';
import { default as UsingCustomDataAdapter } from './Using a Custom Data Adapter';
import { default as SupplyCustomHeadersForJsonDatabase } from './Supply Custom Headers for JSON Database';

import { default as CustomizingTheDesigner } from './Customizing the Designer';
import { default as ChangingTheDesignerTheme } from './Changing the Designer Theme';
import { default as CustomizingTheViewer } from './Customizing the Viewer';
import { default as ChangingTheViewerTheme } from './Changing the Viewer Theme';
import { default as ShowingReportInTheViewerWithoutToolbar } from './Showing a Report in the Viewer without Toolbar';
import { default as UsingDesignerEvents } from './Using Designer Events';
import { default as UsingViewerEvents } from './Using Viewer Events';
import { default as WorkingWithOnDesignAndOnExitEvents } from './Working with onDesign and onExit Events';
import { default as UsingTheTwoViewerInTheOneProject } from './Using the two Viewer in the One Project';
import { default as GetModifiedReportFromTheDesigner } from './Get a modified Report from the Designer';
import { default as UsingTheRightToLeftModeInTheViewer } from './Using the Right-To-Left Mode in the Viewer';

import { default as HowToActivateTheProduct } from './How to Activate the Product';
import { default as RenderingReportFromCode } from './Rendering a Report from Code';
import { default as UsingReportVariablesInCode } from './Using Report Variables in Code';
import { default as CreatingReportAtRuntime } from './Creating Report at Runtime';

import ListSamples from './ListSamples';

function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ListSamples />} />

                    <Route path="Localizing_the_Designer" element={<LocalizingTheDesigner />} />
                    <Route path="Localizing_the_Viewer" element={<LocalizingTheViewer />} />
                    <Route path="Globalizing_Report" element={<GlobalizingReport />} />

                    <Route path="Using_Custom_Font" element={<UsingCustomFont />} />
                    <Route path="Adding_a_Font_to_the_Resource" element={<AddingFontToTheResource />} />

                    <Route path="Printing_the_Report_from_Code" element={<PrintingTheReportFromCode />} />
                    <Route path="Exporting_a_Report_to_PDF" element={<ExportingReportToPDF />} />
                    <Route path="Exporting_a_Report_to_HTML" element={<ExportingReportToHTML />} />
                    <Route path="Exporting_a_Report_from_Code_with_Changing_Export_Settings" element={<ExportingReportFromCodeWithChangingExportSettings />} />
                    <Route path="Exporting_Many_Files_to_Single_PDF" element={<ExportingManyFilesToSinglePDF />} />

                    <Route path="Creating_a_new_Data_Connection_from_code" element={<CreatingNewDataConnectionFromCode />} />
                    <Route path="Registering_Data_from_Code" element={<RegisteringDataFromCode />} />
                    <Route path="Using_SQL_Data_Sources" element={<UsingSqlDataSources />} />
                    <Route path="Using_Parameters_in_SQL_Query" element={<UsingParametersInSqlQuery />} />
                    <Route path="Using_a_Custom_Data_Adapter" element={<UsingCustomDataAdapter />} />
                    <Route path="Supply_Custom_Headers_for_JSON_Database" element={<SupplyCustomHeadersForJsonDatabase />} />

                    <Route path="Customizing_the_Designer" element={<CustomizingTheDesigner />} />
                    <Route path="Changing_the_Designer_Theme" element={<ChangingTheDesignerTheme />} />
                    <Route path="Customizing_the_Viewer" element={<CustomizingTheViewer />} />
                    <Route path="Changing_the_Viewer_Theme" element={<ChangingTheViewerTheme />} />
                    <Route path="Showing_a_Report_in_the_Viewer_without_Toolbar" element={<ShowingReportInTheViewerWithoutToolbar />} />
                    <Route path="Using_Designer_Events" element={<UsingDesignerEvents />} />
                    <Route path="Using_Viewer_Events" element={<UsingViewerEvents />} />
                    <Route path="Working_with_onDesign_and_onExit_Events" element={<WorkingWithOnDesignAndOnExitEvents />} />
                    <Route path="Using_the_two_Viewer_in_the_One_Project" element={<UsingTheTwoViewerInTheOneProject />} />
                    <Route path="Get_a_modified_Report_from_the_Designer" element={<GetModifiedReportFromTheDesigner />} />
                    <Route path="Using_the_Right-To-Left_Mode_in_the_Viewer" element={<UsingTheRightToLeftModeInTheViewer />} />

                    <Route path="How_to_Activate_the_Product" element={<HowToActivateTheProduct />} />
                    <Route path="Rendering_a_Report_from_Code" element={<RenderingReportFromCode />} />
                    <Route path="Using_Report_Variables_in_Code" element={<UsingReportVariablesInCode />} />
                    <Route path="Creating_Report_at_Runtime" element={<CreatingReportAtRuntime />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
