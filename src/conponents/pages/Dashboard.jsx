import { PiStudentBold } from 'react-icons/pi';
import './Dashboard.css'
import { MdCoPresent } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { absentStudentCount, presentStudentCount, totalStudentCount } from '../api/api';
import { MdCancelPresentation } from "react-icons/md";
const Dashboard = () => {
  const [total,setTotal]=useState();
  const [pCount,setPCount]=useState();
  const [aCount,setACount]=useState();
  const today = new Date().toISOString().split('T')[0];
 useEffect(() => {
    // first time load
    fetchTotal();
    fetchPCount();
    fetchACount();
    // 🔁 live update every 5 seconds
    const interval = setInterval(() => {
      fetchTotal();
    }, 5000);

    // cleanup (VERY IMPORTANT)
    return () => clearInterval(interval);
  }, [today]);
   const fetchTotal = () => {
    totalStudentCount()
      .then((response) => {
        setTotal(response.data);
      })
      .catch(error => console.error(error));
  };
  const fetchPCount=()=>{
    presentStudentCount()
    .then((response)=>{
      setPCount(response.data)
    })
    .catch(error=>console.error(error))
  }
  const fetchACount=()=>{
    absentStudentCount()
    .then((response)=>{
      setACount(response.data)
    }).catch(error=>console.error(error))
  }

  return (
    <>
      <div className='cards'>
        <div className="card">
          <h2><PiStudentBold /></h2>
          <p>TOTAL STUDENT</p>
          <h1>{total}</h1>
        </div>
        <div className="card">
          <h2><MdCoPresent /></h2>
          <p>TOTAL PRESENT STUDENT</p>
          <p>Date: <strong>{today}</strong></p>
          <h1>{pCount}</h1>
        </div>
       <div className="card">
          <h2><MdCancelPresentation /></h2>
          <p>TOTAL ABSENT STUDENT</p>
          <p>Date: <strong>{today}</strong></p>
          <h1>{aCount}</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

