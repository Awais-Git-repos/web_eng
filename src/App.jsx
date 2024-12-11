import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./components/Tasks";
import Settings from "./components/Settings";
import Login from "./pages/LoginPage";
import TaskAssignment from "./components/TaskAssignment";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsSidebarOpen(open);
  };

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  return (
    <Router>
      <div>
        <Header onMenuClick={toggleDrawer(true)} />
        <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/assign-task" element={<TaskAssignment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
