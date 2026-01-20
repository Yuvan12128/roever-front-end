import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./conponents/MainLayout"
import Students from "./conponents/pages/Student"
import Dashboard from "./conponents/pages/Dashboard"

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="attendance" element={<div>Attendance Page</div>} />
          <Route path="reports" element={<div>Reports Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
