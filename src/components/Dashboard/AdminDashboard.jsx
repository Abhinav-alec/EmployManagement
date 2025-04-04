import React from "react";
import Headers from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Headers />
      <CreateTask />
      <AllTask />
    </div>
  );
};
export default AdminDashboard;
