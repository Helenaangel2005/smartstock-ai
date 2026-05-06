import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";

function App() {

  const [product, setProduct] = useState("Milk");

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar
        selected={product}
        setProduct={setProduct}
      />

      <div className="flex-1 p-6 space-y-6">

        <Hero product={product} />

      </div>

    </div>

  );
}

export default App;