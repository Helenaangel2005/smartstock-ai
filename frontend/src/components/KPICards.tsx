import { useEffect, useState } from "react";
import axios from "axios";

export default function KPICards({ product }: any) {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/insights/${product}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

  }, [product]);

  // LOADING
  if (!data) {
    return <p>Loading...</p>;
  }

  // ERROR STATE
  if (data.error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-xl">
        No sales data found.
      </div>
    );
  }

  return (

    <div className="space-y-4">

      {/* ALERT */}
      <div
        className={`p-4 rounded-xl font-semibold
        ${
          data.recommended_reorder > 0
            ? "bg-yellow-200 text-yellow-800"
            : "bg-green-200 text-green-800"
        }`}
      >
        {data.alert}
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">

        <Card
          title="💰 Savings"
          value={`₹${data.estimated_savings}`}
        />

        <Card
          title="📉 Waste"
          value={`${(data.expected_waste * 100).toFixed(1)}%`}
        />

        <Card
          title="📦 Reorder"
          value={
            data.recommended_reorder === 0
              ? "NO REORDER"
              : data.recommended_reorder
          }
        />

        <Card
          title="📊 Trend"
          value={data.trend}
        />

        <Card
          title="🎯 Accuracy"
          value={`${data.accuracy}%`}
        />

        <Card
          title="🧠 Model"
          value={data.model_used}
        />

      </div>

      {/* EXTRA INFO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Mini
          title="Stock"
          value={data.current_stock}
        />

        <Mini
          title="Safety Stock"
          value={data.safety_stock}
        />

        <Mini
          title="Lead Demand"
          value={data.demand_lead_time}
        />

      </div>

      {/* AI COPILOT */}
      <div className="bg-green-900 text-white p-6 rounded-xl">

        <h2 className="text-xl font-bold mb-2">
          🤖 AI Retail Copilot
        </h2>

        <p className="text-gray-100">
          {data.summary}
        </p>

      </div>

    </div>
  );
}

/* =========================
   SMALL COMPONENTS
========================= */

function Card({ title, value }: any) {

  return (

    <div className="bg-white p-4 rounded-xl shadow">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-xl font-bold mt-2 break-words">
        {value}
      </h2>

    </div>
  );
}

function Mini({ title, value }: any) {

  return (

    <div className="bg-white p-4 rounded-xl shadow text-center">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-lg font-bold">
        {value}
      </h2>

    </div>
  );
}