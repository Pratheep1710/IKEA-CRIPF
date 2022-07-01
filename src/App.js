import "./App.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import DailyAnalysisPage from "./pages/daily-analysis/daily-analysis.page";
import PIP_Monitoring_V1 from "./pages/PIP-Monitoring-V1/PIP-Monitoring-V1.page";
import PIP_Monitoring_V2 from "./pages/PIP-Monitoring-V2/PIP-Monitoring-V2.page";
import DigitalAPIHealthCheck from "./pages/Digital-API-Health-check/Digital-API-Health-check.page";
import ART_SPRView from "./pages/ART_SPR-view/ART_SPR-view.page";
import PriceChange from "./pages/price-change/price-change.component";

import Middleware from "./store/Middleware";

import { Routes, Route } from "react-router-dom";

import axios from "axios";

function App() {
  //const [intialToken, setInitialToken] = useState({});
  const dispatch = useDispatch();

  var bodyFormData = new FormData();
  bodyFormData.append("user", "cripf");
  bodyFormData.append("password", "api");

  useEffect(() => {
    dispatch(Middleware.initialToken());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DailyAnalysisPage />} />
        <Route path="/PIP_Monitoring_V1" element={<PIP_Monitoring_V1 />} />
        <Route path="/PIP_Monitoring_V2" element={<PIP_Monitoring_V2 />} />
        <Route
          path="/DigitalAPIHealthCheck"
          element={<DigitalAPIHealthCheck />}
        />
        <Route path="/ART_SPRView" element={<ART_SPRView />} />
        <Route path="/price_change" element={<PriceChange />} />
      </Routes>
    </div>
  );
}

export default App;
