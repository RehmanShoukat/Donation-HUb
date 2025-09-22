import React from "react";
import { Routes, Route } from "react-router-dom";


import DonorLayout from "./donor/DonorLayout";
import DonateFood from "./donor/DonateFood";
import DonateMoney from "./donor/DonateMoney";
import History from "./donor/History";

import NgoLayout from "./ngo/NgoLayout";
import NgoHome from "./ngo/NgoHome";
import ManageUsers from "./ngo/ManageUsers";
import Settings from "./ngo/Settings";
import Home from "./donor/Home";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="donor" element={<DonorLayout />}>
        <Route index element={<Home />} />
        <Route path="donate-food" element={<DonateFood />} />
        <Route path="donate-money" element={<DonateMoney />} />
        <Route path="history" element={<History />} />
      </Route>

      <Route path="ngo" element={<NgoLayout />}>
        <Route index element={<NgoHome />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
