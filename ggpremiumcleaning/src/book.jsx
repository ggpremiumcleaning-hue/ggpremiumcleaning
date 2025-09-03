import React from "react";

export default function Book() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Book a Cleaning Service</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4">
        <input type="text" placeholder="Full Name" required className="w-full border p-2 rounded" />
        <input type="tel" placeholder="Phone Number" required className="w-full border p-2 rounded" />
        <input type="text" placeholder="Address" required className="w-full border p-2 rounded" />
        <input type="date" required className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Home Cleaning</option>
          <option>Office Cleaning</option>
          <option>Deep Cleaning</option>
          <option>Window Cleaning</option>
          <option>Car Interior</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
