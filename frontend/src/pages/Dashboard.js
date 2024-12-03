import React from "react";
import AddPasswordForm from "../components/AddPasswordForm";
import PasswordList from "../components/PasswordList";
const Dashboard = () => {
  return (
    <div>
      {" "}
      <h1>Dashboard</h1> <AddPasswordForm /> <PasswordList />{" "}
    </div>
  );
};
export default Dashboard;
