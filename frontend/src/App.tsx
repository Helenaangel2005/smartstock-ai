import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import KPICards from "./components/KPICards";
import ForecastChart from "./components/ForecastChart";
import Simulator from "./components/Simulator";
import Alerts from "./components/Alerts";

function App() {

  const [product, setProduct] = useState("Milk");

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar
        selected={product}
        setProduct={setProduct}
      />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">

        {/* HERO */}
        <Hero product={product} />

        {/* 🔥 NEW ALERTS PANEL */}
        <Alerts />

        {/* PRODUCT TITLE */}
        <h2 className="text-3xl font-bold text-gray-800">
          Product: {product}
        </h2>

        {/* KPI CARDS */}
        <KPICards product={product} />

        {/* FORECAST CHART */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-6">
            📊 Demand Forecast (Next 7 Days)
          </h2>

          <ForecastChart product={product} />

        </div>

        {/* WHAT-IF SIMULATOR */}
        <Simulator product={product} />

      </div>

    </div>

  );
}

export default App;