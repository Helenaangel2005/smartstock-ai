import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function ForecastChart({ product }: any) {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`https://smartstock-ai-x150.onrender.com/insights/${product}`)
      .then(res => {
        const preds = res.data.predictions;

        const chartData = preds.map((p: number, i: number) => ({
          day: `Day ${i + 1}`,
          forecast: p
        }));

        setData(chartData);
      });
  }, [product]);

  return (
    <LineChart width={700} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="forecast" stroke="#10b981" />
    </LineChart>
  );
}