import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
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

      {/* MAIN */}
      <div className="flex-1 p-6 space-y-6">

        {/* HERO */}
        <Hero product={product} />

        {/* ALERTS */}
        <Alerts />

      </div>

    </div>

  );
}

export default App;