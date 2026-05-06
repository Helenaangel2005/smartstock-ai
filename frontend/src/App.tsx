import { useState } from "react";

import Sidebar from "./components/Sidebar";

function App() {

  const [product, setProduct] = useState("Milk");

  return (

    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar
        selected={product}
        setProduct={setProduct}
      />

      <div className="flex-1 p-6">

        <h1 className="text-5xl font-bold text-green-700">
          SmartStock AI Working 🚀
        </h1>

      </div>

    </div>

  );
}

export default App;