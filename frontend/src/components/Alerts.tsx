import { useEffect, useState } from "react";
import axios from "axios";

export default function Alerts() {

  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/alerts"
    );

    setAlerts(res.data);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        🔥 Priority Action Center
      </h2>

      <div className="space-y-4">

        {alerts.map((a, index) => (

          <div
            key={index}
            className="flex justify-between items-center p-4 rounded-xl border"
          >

            <div>
              <h3 className="font-semibold text-lg">
                {a.product}
              </h3>

              <p className="text-gray-500 text-sm">
                Reorder: {a.reorder} units
              </p>

              <p className="text-gray-500 text-sm">
                Waste Risk: {(a.waste * 100).toFixed(0)}%
              </p>
            </div>

            <span className={`px-4 py-2 rounded-full text-white font-semibold
              ${a.priority === "URGENT"
                ? "bg-red-600"
                : a.priority === "HIGH"
                ? "bg-orange-500"
                : "bg-yellow-500"}
            `}>
              {a.priority}
            </span>

          </div>

        ))}

      </div>
    </div>
  );
}