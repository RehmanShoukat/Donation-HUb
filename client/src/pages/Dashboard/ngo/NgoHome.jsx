import React, { useState, useEffect } from "react";

const NgoHome = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState({
    totalDonations: 0,
    pendingDonations: 0,
    acceptedDonations: 0,
    totalMeals: 0
  });

  // Sample data to show the design (replace with your actual API call)
  const sampleDonations = [
    {
      _id: "1",
      donorName: "Ahmed Ali",
      donorEmail: "ahmed@example.com",
      foodType: "Rice & Vegetables",
      quantity: "10 kg",
      pickupAddress: "123 Main Street, Faisalabad",
      notes: "Fresh vegetables and basmati rice",
      status: "pending",
      createdAt: new Date().toISOString()
    },
    {
      _id: "2",
      donorName: "Fatima Khan",
      donorEmail: "fatima@example.com",
      foodType: "Prepared Meals",
      quantity: "20 meals",
      pickupAddress: "456 Garden Town, Lahore",
      notes: "Home cooked meals, ready to serve",
      status: "accepted",
      createdAt: new Date(Date.now() - 86400000).toISOString()
    },
    {
      _id: "3",
      donorName: "Muhammad Hassan",
      donorEmail: "hassan@example.com",
      foodType: "Bread & Bakery",
      quantity: "5 kg",
      pickupAddress: "789 Model Town, Karachi",
      notes: "",
      status: "pending",
      createdAt: new Date(Date.now() - 172800000).toISOString()
    }
  ];

  // Your actual fetchDonations function should look like this:
  const fetchDonations = async () => {
    try {
      setLoading(true);
      // Replace this with your actual API call
      /*
      const token = localStorage.getItem("jwt");
      const response = await axios.get("http://localhost:8000/donate/food/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const donationsData = response.data.donations || [];
      */
      
      // For demo purposes, using sample data
      setTimeout(() => {
        const donationsData = sampleDonations;
        setDonations(donationsData);
        
        // Calculate statistics
        const stats = {
          totalDonations: donationsData.length,
          pendingDonations: donationsData.filter(d => d.status === 'pending').length,
          acceptedDonations: donationsData.filter(d => d.status === 'accepted').length,
          totalMeals: donationsData.reduce((acc, donation) => {
            const quantity = donation.quantity?.toLowerCase() || '';
            const numbers = quantity.match(/\d+/);
            return acc + (numbers ? parseInt(numbers[0]) : 0);
          }, 0)
        };
        
        setStats(stats);
        setError("");
        setLoading(false);
      }, 1000);
      
    } catch (err) {
      console.error("Error fetching donations:", err);
      setError("Failed to fetch donations. Please try again.");
      setLoading(false);
    }
  };

  // Update donation status function
  const updateDonationStatus = async (donationId, newStatus) => {
    try {
      // Your actual API call should be:
      /*
      const token = localStorage.getItem("jwt");
      await axios.put(
        `http://localhost:8000/donate/food/update-status/${donationId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      */
      
      // For demo, update local state
      setDonations(prev => 
        prev.map(donation => 
          donation._id === donationId 
            ? { ...donation, status: newStatus }
            : donation
        )
      );
      
      // Recalculate stats
      const updatedDonations = donations.map(donation => 
        donation._id === donationId 
          ? { ...donation, status: newStatus }
          : donation
      );
      
      const newStats = {
        totalDonations: updatedDonations.length,
        pendingDonations: updatedDonations.filter(d => d.status === 'pending').length,
        acceptedDonations: updatedDonations.filter(d => d.status === 'accepted').length,
        totalMeals: updatedDonations.reduce((acc, donation) => {
          const quantity = donation.quantity?.toLowerCase() || '';
          const numbers = quantity.match(/\d+/);
          return acc + (numbers ? parseInt(numbers[0]) : 0);
        }, 0)
      };
      
      setStats(newStats);
      
    } catch (err) {
      console.error("Error updating donation status:", err);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'accepted': return 'bg-green-100 text-green-800 border-green-200';
      case 'declined': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading donations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">NGO Dashboard Overview</h1>
        <p className="text-blue-100">Monitor and manage all food donations in your organization</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Donations</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalDonations}</p>
            </div>
            <div className="text-4xl">📦</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Review</p>
              <p className="text-3xl font-bold text-yellow-600">{stats.pendingDonations}</p>
            </div>
            <div className="text-4xl">⏳</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Accepted</p>
              <p className="text-3xl font-bold text-green-600">{stats.acceptedDonations}</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Est. Meals</p>
              <p className="text-3xl font-bold text-purple-600">{stats.totalMeals}+</p>
            </div>
            <div className="text-4xl">🍽️</div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <span className="text-2xl mr-3">❌</span>
            <p className="text-red-800">{error}</p>
          </div>
        </div>
      )}

      {/* Donations List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="mr-3">📋</span>
              Recent Food Donations
            </h2>
            <button
              onClick={fetchDonations}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              🔄 Refresh
            </button>
          </div>
        </div>

        <div className="p-6">
          {donations.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No donations yet</h3>
              <p className="text-gray-600">Food donations will appear here once they start coming in.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {donations.map((donation) => (
                <div
                  key={donation._id}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* Donation Info */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {donation.donorName}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(donation.status)}`}
                        >
                          {donation.status?.charAt(0).toUpperCase() + donation.status?.slice(1)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <span className="mr-2">📧</span>
                          {donation.donorEmail}
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">🥘</span>
                          <strong>{donation.foodType}</strong>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">⚖️</span>
                          {donation.quantity}
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">📅</span>
                          {formatDate(donation.createdAt)}
                        </div>
                      </div>
                      
                      <div className="flex items-start mt-2">
                        <span className="mr-2">📍</span>
                        <p className="text-sm text-gray-700">
                          <strong>Pickup:</strong> {donation.pickupAddress}
                        </p>
                      </div>
                      
                      {donation.notes && (
                        <div className="flex items-start mt-2">
                          <span className="mr-2">📝</span>
                          <p className="text-sm text-gray-700">
                            <strong>Notes:</strong> {donation.notes}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    {donation.status === 'pending' && (
                      <div className="flex space-x-3">
                        <button
                          onClick={() => updateDonationStatus(donation._id, 'accepted')}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>✅</span>
                          <span>Accept</span>
                        </button>
                        <button
                          onClick={() => updateDonationStatus(donation._id, 'declined')}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>❌</span>
                          <span>Decline</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NgoHome;