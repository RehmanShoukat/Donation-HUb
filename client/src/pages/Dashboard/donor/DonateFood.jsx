// import React, { useState } from "react";
// import axios from "axios";
// import { message } from "antd";

// const DonateFood = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     donorName: '', // User's name
//     donorEmail: '', // User's email
//     foodType: '',
//     quantity: '',
//     pickupAddress: '',
//     notes: ''
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = async () => {
//     const { donorName, donorEmail, foodType, quantity, pickupAddress } = formData;
//     if (!donorName || !donorEmail || !foodType || !quantity || !pickupAddress) {
//       message.error("Please fill in all required fields");
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       const res = await axios.post("http://localhost:8000/donate/food/donate", formData);
//       message.success(res.data.message);
//       setFormData({
//         donorName: '',
//         donorEmail: '',
//         foodType: '',
//         quantity: '',
//         pickupAddress: '',
//         notes: ''
//       }); // reset form
//     } catch (err) {
//       console.error(err);
//       message.error(err.response?.data?.message || "Failed to submit donation");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const foodCategories = [
//     "Rice & Grains",
//     "Bread & Bakery",
//     "Vegetables",
//     "Fruits",
//     "Prepared Meals",
//     "Dairy Products",
//     "Canned Foods",
//     "Dry Foods",
//     "Other"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Food</h1>
//           <p className="text-gray-600 text-lg">Every meal counts. Your donation can feed families in need.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
//               <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
//                 <h2 className="text-2xl font-bold text-white">Food Donation Details</h2>
//               </div>
//               <div className="p-8 space-y-6">
                
//                 {/* Name */}
//                 <input
//                   type="text"
//                   placeholder="Your Name *"
//                   value={formData.donorName}
//                   onChange={(e) => handleInputChange('donorName', e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 />

//                 {/* Email */}
//                 <input
//                   type="email"
//                   placeholder="Your Email *"
//                   value={formData.donorEmail}
//                   onChange={(e) => handleInputChange('donorEmail', e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 />

//                 {/* Food Type */}
//                 <select
//                   value={formData.foodType}
//                   onChange={(e) => handleInputChange('foodType', e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 >
//                   <option value="">Select food type *</option>
//                   {foodCategories.map(cat => (
//                     <option key={cat} value={cat}>{cat}</option>
//                   ))}
//                 </select>

//                 {/* Quantity */}
//                 <input
//                   type="text"
//                   placeholder="Quantity *"
//                   value={formData.quantity}
//                   onChange={(e) => handleInputChange('quantity', e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                 />

//                 {/* Pickup Address */}
//                 <textarea
//                   rows={4}
//                   placeholder="Pickup Address *"
//                   value={formData.pickupAddress}
//                   onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
//                 />

//                 {/* Notes */}
//                 <textarea
//                   rows={3}
//                   placeholder="Additional Notes (Optional)"
//                   value={formData.notes}
//                   onChange={(e) => handleInputChange('notes', e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
//                 />

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Food Donation"}
//                 </button>

//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Your Impact</h3>
//               <p className="text-gray-600 text-sm">1 meal = 1 person fed. Help families and reduce food waste!</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonateFood;

import React, { useState } from "react";
import axios from "axios";
import { message, Spin } from "antd";

const DonateFood = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    donorName: '',
    donorEmail: '',
    foodType: '',
    quantity: '',
    pickupAddress: '',
    notes: ''
  });

  const foodCategories = [
    "Rice & Grains",
    "Bread & Bakery",
    "Vegetables",
    "Fruits",
    "Prepared Meals",
    "Dairy Products",
    "Canned Foods",
    "Dry Foods",
    "Other"
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    const { donorName, donorEmail, foodType, quantity, pickupAddress } = formData;
    if (!donorName || !donorEmail || !foodType || !quantity || !pickupAddress) {
      message.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await axios.post("http://localhost:8000/donate/food/donate", formData);
      message.success(res.data.message);
      setFormData({
        donorName: '',
        donorEmail: '',
        foodType: '',
        quantity: '',
        pickupAddress: '',
        notes: ''
      });
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.message || "Failed to submit donation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Food</h1>
          <p className="text-gray-600 text-lg">Every meal counts. Your donation can feed families in need.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h2 className="text-2xl font-bold text-white">Food Donation Details</h2>
              </div>
              <div className="p-8 space-y-4">

                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.donorName}
                  onChange={(e) => handleInputChange('donorName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.donorEmail}
                  onChange={(e) => handleInputChange('donorEmail', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />

                <select
                  value={formData.foodType}
                  onChange={(e) => handleInputChange('foodType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select food type *</option>
                  {foodCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Quantity *"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />

                <textarea
                  rows={4}
                  placeholder="Pickup Address *"
                  value={formData.pickupAddress}
                  onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                />

                <textarea
                  rows={3}
                  placeholder="Additional Notes (Optional)"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg"
                >
                  {isSubmitting ? <Spin /> : "Submit Food Donation"}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Impact</h3>
              <p className="text-gray-600 text-sm">1 meal = 1 person fed. Help families and reduce food waste!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;
