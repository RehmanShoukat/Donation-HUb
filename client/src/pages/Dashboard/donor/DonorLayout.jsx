import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DonorLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navigationItems = [
    { to: "/dashboard/donor", icon: "🏠", label: "Home" },
    { to: "/dashboard/donor/donate-food", icon: "🍎", label: "Donate Food" },
    { to: "/dashboard/donor/donate-money", icon: "💰", label: "Donate Money" },
    { to: "/dashboard/donor/history", icon: "📋", label: "History" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-green-500 to-emerald-700 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between p-4 border-b border-green-400">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">❤️</div>
            <h2 className="text-2xl font-bold">DonateHub</h2>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-gray-200 text-xl"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          <div className="bg-green-600 rounded-lg p-3 mb-6">
            <p className="text-sm text-green-100">Donor Dashboard</p>
            <p className="font-semibold">Make a Difference!</p>
          </div>
          
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-green-600 text-white no-underline"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="mt-6 p-3 bg-green-600 rounded-lg">
            <p className="text-sm text-green-100 mb-2">Your Impact</p>
            <div className="flex items-center space-x-2">
              <div className="text-lg">🌟</div>
              <span className="text-sm">Ready to make a difference!</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-xl"
              >
                ☰
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-xl">❤️</span>
                <h1 className="text-xl font-bold text-gray-900">DonateHub Donor Panel</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-full hover:bg-gray-100">
                <span className="text-xl">🔔</span>
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      D
                    </div>
                    <span className="hidden md:block font-medium text-gray-700">Donor</span>
                  </div>
                  <span className="text-gray-500">▼</span>
                </button>

                {profileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 w-full text-left text-gray-700 no-underline"
                    >
                      <span>👤</span>
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/dashboard/donor/history"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 w-full text-left text-gray-700 no-underline"
                    >
                      <span>📋</span>
                      <span>My Donations</span>
                    </Link>
                    <hr className="my-1" />
                    <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 w-full text-left text-red-600">
                      <span>🚪</span>
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 mb-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome to DonateHub Donor Portal</h2>
              <p className="text-green-100">Your generosity creates lasting impact. Start making a difference today!</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Link
                to="/dashboard/donor/donate-food"
                className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-lg text-white hover:from-orange-500 hover:to-orange-600 transition-all duration-200 no-underline"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🍎</span>
                  <div className="text-left">
                    <h3 className="font-semibold">Donate Food</h3>
                    <p className="text-sm text-orange-100">Share meals with those in need</p>
                  </div>
                </div>
              </Link>
              
              <Link
                to="/dashboard/donor/donate-money"
                className="bg-gradient-to-r from-blue-400 to-blue-500 p-4 rounded-lg text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-200 no-underline"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💰</span>
                  <div className="text-left">
                    <h3 className="font-semibold">Donate Money</h3>
                    <p className="text-sm text-blue-100">Support various causes financially</p>
                  </div>
                </div>
              </Link>
              
              <Link
                to="/dashboard/donor/history"
                className="bg-gradient-to-r from-purple-400 to-purple-500 p-4 rounded-lg text-white hover:from-purple-500 hover:to-purple-600 transition-all duration-200 no-underline"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <div className="text-left">
                    <h3 className="font-semibold">View History</h3>
                    <p className="text-sm text-purple-100">Track your donation journey</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Content Area - This will be replaced by your components */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <Outlet />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <span className="text-red-500 text-lg">❤️</span>
              <span className="text-gray-600">© 2025 DonateHub. Empowering generosity, creating change.</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <Link to="/how-it-works" className="hover:text-gray-700 no-underline">How It Works</Link>
              <Link to="/impact" className="hover:text-gray-700 no-underline">Our Impact</Link>
              <Link to="/support" className="hover:text-gray-700 no-underline">Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DonorLayout;