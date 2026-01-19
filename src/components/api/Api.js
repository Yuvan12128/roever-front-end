import axios from "axios";

const Rest_Api_Base_Url='http://localhost:8080/students/student-count'
export const getStudentCount =()=>{
  return axios.get(Rest_Api_Base_Url)
}