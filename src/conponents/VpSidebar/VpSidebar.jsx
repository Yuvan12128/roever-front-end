import { Link, Outlet } from "react-router-dom";
import "./VpSidebar.css";

const VpSidebar = () => {
  return (
    <>
      <div className="layout">
     
        <aside className="sidebar">
          <Link to="dashboard" data-title="Dashboard">
            <span className="icon">📊</span>
            <span className="text">Dashboard</span>
          </Link>

          <Link to="students" data-title="Students">
            <span className="icon">🎓</span>
            <span className="text">Students</span>
          </Link>

          <Link to="attendance" data-title="Attendance">
            <span className="icon">📝</span>
            <span className="text">Attendance</span>
          </Link>

          <Link to="reports" data-title="Reports">
            <span className="icon">📈</span>
            <span className="text">Reports</span>
          </Link>

          <Link to="settings" data-title="Settings">
            <span className="icon">⚙️</span>
            <span className="text">Settings</span>
          </Link>
          
        </aside>
    <main className="main"> 
        <Outlet />
    </main>
        
      </div>
    </>
  );
};

export default VpSidebar;
