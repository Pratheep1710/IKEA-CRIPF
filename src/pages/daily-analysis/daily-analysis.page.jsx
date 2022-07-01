import React from "react";

import { useSelector } from "react-redux";

import "./daily-analysis.styles.scss";

import Header from "../../components/header/header.component";
import NavTab from "../../components/navTabs/navtabs.component";
import FormInput from "../../components/formInput/formInput.component";
import SpreadSheetArea from "../../components/spreadsheet-area/spreadsheet-area.component";

const DailyAnalysisPage = () => {
  const buttonToggle = useSelector((state) => state.fetchAll.toggleButton);

  return (
    <div>
      <Header />
      <hr className="demo-divider__hr-horizontal" />
      <NavTab />
      <hr className="demo-divider__hr-horizontal1" />
      {!buttonToggle ? (
        <div>
          <FormInput />
          <b>OR</b>
          <SpreadSheetArea />
        </div>
      ) : (
        <DataTable />
      )}
    </div>
  );
};

export default DailyAnalysisPage;
