import axios from "axios";


const URL = 'http://localhost:8080/students/student-count'


export const totalStudentCount=()=>axios
.get(URL)
  const today = new Date().toISOString().split('T')[0];

const  P_URL=`http://localhost:8080/students/present-count?date=${today}`

   export const presentStudentCount=()=>axios.get(P_URL)
const A_URL=`http://localhost:8080/students/absent-count?date=${today}`
    export const absentStudentCount=()=>axios.get(A_URL)


    
const STUDENT_URL =`http://localhost:8080`
export const studentApi={
    getByRollNo:(rollNo)=>{
        return axios.get(`${STUDENT_URL}/students/${rollNo}`)

    }
}