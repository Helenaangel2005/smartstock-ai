import axios from "axios";

export default function Hero({ product }: any) {

  const upload = async (e: any) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const form = new FormData();
      form.append("file", file);

      await axios.post("https://smartstock-ai-x150.onrender.com/upload", form);

      alert("✅ Sales data uploaded successfully!");

      // Optional: refresh page to reload insights
      window.location.reload();

    } catch (err) {
      console.error(err);
      alert("❌ Upload failed. Check backend.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-900 to-green-700 text-white p-10 rounded-xl">

      <p className="text-sm text-green-300 mb-2">
        Indian retail decision system
      </p>

      <h1 className="text-4xl font-bold leading-tight">
        AI-powered retail inventory intelligence for demand forecasting, reorder optimization, and waste reduction. <br />
      </h1>

      <p className="mt-3 text-gray-200 max-w-xl">
        Upload your store’s sales data to get AI-driven demand forecasting,
        reorder alerts, and waste reduction insights.
      </p>

      <div className="mt-6 flex items-center gap-4">

        {/* FILE UPLOAD */}
        <input
          type="file"
          accept=".csv"
          onChange={upload}
          className="bg-white text-black px-3 py-2 rounded cursor-pointer"
        />

        <span className="text-sm text-gray-300">
          Upload sales data to start
        </span>

      </div>

      {/* LIVE STATUS */}
      {product && (
        <div className="mt-6 bg-black/30 px-4 py-2 rounded-lg text-sm inline-block">
          📦 Currently analyzing: <b>{product}</b>
        </div>
      )}

    </div>
  );
}