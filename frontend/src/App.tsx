import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import Alerts from "./components/Alerts";
import KPICards from "./components/KPICards";

function App() {

  const [product, setProduct] = useState("Milk");

  return (

    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar
        selected={product}
        setProduct={setProduct}
      />

      {/* MAIN */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">

        {/* HERO */}
        <Hero product={product} />

        {/* ALERTS */}
        <Alerts />

        {/* PRODUCT TITLE */}
        <h2 className="text-3xl font-bold text-gray-800">
          Product: {product}
        </h2>

        {/* KPI CARDS */}
        <KPICards product={product} />

      </div>

    </div>

  );
}

export default App;