import { PiStudentBold } from 'react-icons/pi';
import './Dashboard.css'
import { MdCoPresent } from 'react-icons/md';

const Dashboard = () => {

  

 
 
  return (
    <>
      <div className='cards'>
        <div className="card">
          <h2><PiStudentBold /></h2>
          <p>Total Students</p>
          <h1>{3}</h1>
        </div>
        <div className="card">
          <h2><MdCoPresent /></h2>
          <p>Total Present Students</p>
          <h1>{3}</h1>
        </div>
      
      </div>
    </>
  );
};

export default Dashboard;

