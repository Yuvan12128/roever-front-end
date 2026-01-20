import axios from "axios";

    
const BASE_URL =`http://localhost:8080`


const URL = `${BASE_URL}/students/student-count`
export const totalStudentCount=()=>axios
.get(URL)
const today = new Date().toISOString().split('T')[0];

const  P_URL=`${BASE_URL}/students/present-count?date=${today}`

   export const presentStudentCount=()=>axios.get(P_URL)
const A_URL=`${BASE_URL}/students/absent-count?date=${today}`
    export const absentStudentCount=()=>axios.get(A_URL)


    
export const studentApi={
    getByRollNo:(rollNo)=>{
        return axios.get(`${BASE_URL}/students/${rollNo}`)

    }
}

export const addStudentApi={
    addStudentApi : (student)=>{
        axios.post(`${BASE_URL}/students/add`)
        
    }
}