import { studentApi } from "../api/api";
import "./Student.css";
import { useState } from "react";

const Student = () => {
  // post student

  const [addStudent,setAddStudent]=useState({
    rollNo:"",
    name:"",
    department:"",
    year:"",
    section:""
  })



  // student fetch
  const [rollNo, setRollNo] = useState("");
  const [student, setStudent] = useState([]);
  const [error, setError] = useState("");

  const fetchStudent = async () => {
    try {
      setError("");
      setStudent(null);

      const res = await studentApi.getByRollNo(rollNo); // ✅ await + one param
      setStudent(res.data);
      console.log(res.data);
    } catch (err) {
      setStudent(null);
      setError("Student not found");
      console.error(err);
    }
  };

  return (
    <div className="student-page">
      <h2>View Student Details</h2>

      {/* Search */}
      <div className="search-box">
        <input
          placeholder="Enter Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <button onClick={fetchStudent}>View</button>
      </div>

      {error && <p className="error">{error}</p>}

      {/* TABLE */}
      {student && (
        <div className="table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Marked By</th>
                <th>Period</th>
                <th>Status</th>
                <th>Section</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {student.map((r) => (
                <tr key={r.id}>
                  <td data-lable="Date">{r.date}</td>
                  <td data-lable="Roll NO">{r.student.rollNo}</td>
                  <td data-lable="name">{r.student.name}</td>
                  <td data-lable="Department">{r.student.department}</td>
                  <td date-lable='Marked by'>{r.markBy}</td>
                  <td data-lable="Period">{r.period}</td>
                  <td data-lable="Status">{r.status}</td>
                  <td data-lable="section">{r.student.section}</td>
                  <td date-lable='time'>{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Student;
