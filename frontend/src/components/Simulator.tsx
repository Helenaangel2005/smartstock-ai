import { useState } from "react";
import axios from "axios";

export default function Simulator({ product }: any) {

  const [festival, setFestival] = useState(false);
  const [weather, setWeather] = useState("normal");
  const [result, setResult] = useState<any>(null);

  const runSimulation = async () => {
    try {
      const res = await axios.post("https://smartstock-ai-x150.onrender.com/simulate", {
        product: product,
        festival: festival,
        weather: weather,
        demand: "high",
        stock: 50
      });

      setResult(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">

      <h2 className="text-lg font-semibold mb-4">
        🔮 What-if Simulator
      </h2>

      {/* CONTROLS */}
      <div className="flex gap-4 mb-4">

        <label>
          <input
            type="checkbox"
            onChange={() => setFestival(!festival)}
          />
          Festival Spike 🎉
        </label>

        <select onChange={(e) => setWeather(e.target.value)}>
          <option value="normal">Normal Weather</option>
          <option value="rain">Rainy ☔</option>
        </select>

      </div>

      {/* BUTTON */}
      <button
        onClick={runSimulation}
        className="bg-green-700 text-white px-4 py-2 rounded"
      >
        Run Simulation
      </button>

      {/* RESULT */}
      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded">

          <p>📦 Reorder: <b>{result.reorder}</b></p>
          <p>📊 Demand: {result.demand}</p>
          <p>🛡 Safety Stock: {result.safety_stock}</p>

        </div>
      )}

    </div>
  );
}