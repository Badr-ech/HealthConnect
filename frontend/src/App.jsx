import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import SignOut from "views/admin/SignOut";

const App = () => {
  return (
    <Routes>
      {/* Main Admin Layout */}
      <Route path="admin/*" element={<AdminLayout />} />

      {/* SignOut Route */}
      <Route path="signout" element={<SignOut />} />

      {/* Default Redirection to Admin */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
