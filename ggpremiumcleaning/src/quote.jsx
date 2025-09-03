import React, { useState } from "react";

export default function Quote() {
  const [price, setPrice] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const size = Number(e.target.size.value);
    const frequency = e.target.frequency.value;

    let base = size * 1.2; // €1.2 за м²
    if (frequency === "weekly") base *= 0.9;
    if (frequency === "monthly") base *= 0.95;

    setPrice(base.toFixed(2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Get a Quote</h1>
      <form onSubmit={handleCalculate} className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4">
        <select name="property" className="w-full border p-2 rounded">
          <option>Apartment</option>
          <option>House</option>
          <option>Office</option>
        </select>
        <input type="number" name="size" placeholder="Size in m²" required className="w-full border p-2 rounded" />
        <select name="frequency" className="w-full border p-2 rounded">
          <option value="one-time">One-time</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Calculate
        </button>
      </form>

      {price && <p className="mt-6 text-lg font-bold">Estimated Price: €{price}</p>}
    </div>
  );
}
