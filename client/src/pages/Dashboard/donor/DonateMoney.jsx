import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

const DonateMoney = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    donorName: "",
    amount: "",
    accountType: "",
    notes: "",
  });

  const accountOptions = [
    { label: "EasyPaisa", value: "EasyPaisa" },
    { label: "JazzCash", value: "JazzCash" },
    { label: "Bank Transfer", value: "Bank" },
    { label: "Other", value: "Other" },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const { donorName, amount, accountType } = formData;

    if (!donorName || !amount || !accountType) {
      message.error("Please fill in all required fields (Name, Amount, Account Type)");
      return;
    }

    const token = localStorage.getItem("token"); // match your login storage key
    if (!token) {
      message.error("You must be logged in to donate.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/donate/money/donate",
        {
          donorName,
          amount,
          ngoAccountType: accountType, // match backend field
          notes: formData.notes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      message.success(res.data.message);
      setFormData({ donorName: "", amount: "", accountType: "", notes: "" });
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.message || "Failed to submit donation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Donate Money</h2>

        {/* Donor Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
          <input
            type="text"
            value={formData.donorName}
            onChange={e => handleInputChange("donorName", e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount *</label>
          <input
            type="number"
            value={formData.amount}
            onChange={e => handleInputChange("amount", e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Account Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Account Type *</label>
          <select
            value={formData.accountType}
            onChange={e => handleInputChange("accountType", e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="">Select Account Type</option>
            {accountOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Additional Notes (Optional)</label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={e => handleInputChange("notes", e.target.value)}
            placeholder="Any additional instructions..."
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting Donation..." : "Donate Now"}
        </button>
      </div>
    </div>
  );
};

export default DonateMoney;
