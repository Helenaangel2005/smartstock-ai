import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({ selected, setProduct }: any) {

  const products = [
    "Milk",
    "Bread",
    "Eggs",
    "Rice",
    "Tomatoes",
    "Chicken",
    "Bananas",
    "Cheese",
    "Curd",
    "Onions"
  ];

  const [riskMap, setRiskMap] = useState<any>({});
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD RISKS
  // =========================

  const loadRisks = async () => {

    try {

      setLoading(true);

      const res = await axios.get(
        "http://127.0.0.1:8000/bulk-insights"
      );

      setRiskMap(res.data);

    } catch (err) {

      console.error("Sidebar Error:", err);

    } finally {

      setLoading(false);
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {
    loadRisks();
  }, []);

  // =========================
  // BADGE COLORS
  // =========================

  const getBadgeStyle = (risk: string) => {

    switch (risk) {

      case "URGENT":
        return "bg-red-500 text-white";

      case "HIGH":
        return "bg-orange-500 text-white";

      case "SPOILAGE":
        return "bg-yellow-500 text-white";

      case "STABLE":
        return "bg-green-500 text-white";

      default:
        return "bg-gray-500 text-white";
    }
  };

  return (

    <div className="w-64 min-h-screen bg-gradient-to-b from-[#0f2d2b] to-[#123d3a] text-white p-5">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-8">
        SmartStock AI • Retail Demand Intelligence
      </h1>

      {/* PRODUCTS */}
      <div className="space-y-4">

        {products.map((p) => {

          const risk = riskMap[p]?.risk || "STABLE";

          return (

            <div
              key={p}
              onClick={() => setProduct(p)}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200
              
              ${selected === p
                  ? "bg-green-700 shadow-lg scale-[1.02]"
                  : "bg-[#123d3a] hover:bg-[#1b4d49]"
                }`}
            >

              {/* PRODUCT */}
              <span className="font-medium text-lg">
                {p}
              </span>

              {/* BADGE */}
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold tracking-wide
                ${getBadgeStyle(risk)}`}
              >
                {loading ? "..." : risk}
              </span>

            </div>
          );
        })}

      </div>

      {/* REFRESH BUTTON */}
      <button
        onClick={loadRisks}
        className="mt-8 w-full bg-green-700 hover:bg-green-600 transition py-3 rounded-xl font-semibold"
      >
        Refresh Insights
      </button>

    </div>
  );
}