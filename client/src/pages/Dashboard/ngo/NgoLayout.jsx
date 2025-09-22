import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NgoLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [sidebarCollapse, setSidebarCollapse] = useState(false); // collapse state

  const navigationItems = [
    { to: "/dashboard/ngo", icon: "🏠", label: "Home" },
    { to: "/dashboard/ngo/manage-users", icon: "👥", label: "Manage Users" },
    { to: "/dashboard/ngo/settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-gradient-to-b from-blue-600 to-blue-800 text-white transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${sidebarCollapse ? "w-20" : "w-64"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">❤️</div>
            {!sidebarCollapse && <h2 className="text-2xl font-bold">DonateHub</h2>}
          </div>

          <div className="flex items-center space-x-2">
            {/* Collapse Button */}
            <button
              onClick={() => setSidebarCollapse(!sidebarCollapse)}
              className="hidden lg:block text-white hover:text-gray-200 text-xl"
            >
              {sidebarCollapse ? "➡️" : "⬅️"}
            </button>

            {/* Close Button for Mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-gray-200 text-xl"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4">
          {!sidebarCollapse && (
            <div className="bg-blue-700 rounded-lg p-3 mb-6">
              <p className="text-sm text-blue-200">NGO Dashboard</p>
              <p className="font-semibold">Welcome back!</p>
            </div>
          )}

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-700 text-white no-underline"
              >
                <span className="text-xl">{item.icon}</span>
                {!sidebarCollapse && <span className="font-medium">{item.label}</span>}
              </Link>
            ))}
          </nav>
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
                <h1 className="text-xl font-bold text-gray-900">
                  DonateHub NGO Panel
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      A
                    </div>
                    {!sidebarCollapse && (
                      <span className="hidden md:block font-medium text-gray-700">
                        NGO Admin
                      </span>
                    )}
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
                      to="/dashboard/ngo/settings"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 w-full text-left text-gray-700 no-underline"
                    >
                      <span>⚙️</span>
                      <span>Settings</span>
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-6 text-white">
              <h2 className="text-2xl font-bold mb-2">
                Welcome to DonateHub NGO Dashboard
              </h2>
              <p className="text-blue-100">
                Manage your organization's donations and impact from one place
              </p>
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
              <span className="text-gray-600">
                © 2025 DonateHub. Making a difference together.
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-gray-700 no-underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gray-700 no-underline">
                Terms of Service
              </Link>
              <Link to="/support" className="hover:text-gray-700 no-underline">
                Support
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NgoLayout;
