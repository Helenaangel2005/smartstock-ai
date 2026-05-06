import { useEffect, useState } from "react";
import axios from "axios";

export default function Alerts() {

  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {

    axios
      .get("https://smartstock-ai-x150.onrender.com/alerts")
      .then((res) => {

        console.log("Alerts API:", res.data);

        if (Array.isArray(res.data)) {
          setAlerts(res.data);
        } else {
          setAlerts([]);
        }

      })
      .catch((err) => {
        console.log(err);
        setAlerts([]);
      });

  }, []);

  return (

    <div className="bg-white p-6 rounded-2xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        🔥 Priority Action Center
      </h2>

      {alerts.length === 0 ? (

        <div className="bg-gray-100 p-4 rounded-xl">
          No active alerts
        </div>

      ) : (

        <div className="space-y-4">

          {alerts.map((item, index) => (

            <div
              key={index}
              className="border rounded-xl p-4 flex justify-between items-center"
            >

              <div>

                <h3 className="text-2xl font-semibold">
                  {item.product}
                </h3>

                <p className="text-gray-600">
                  Reorder: {item.reorder} units
                </p>

                <p className="text-gray-600">
                  Waste Risk: {item.waste}%
                </p>

              </div>

              <div
                className={`
                  px-6 py-3 rounded-full text-white font-bold
                  ${
                    item.priority === "URGENT"
                      ? "bg-red-500"
                      : item.priority === "HIGH"
                      ? "bg-orange-500"
                      : "bg-green-500"
                  }
                `}
              >
                {item.priority}
              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}