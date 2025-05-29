import { useState,useEffect } from "react";
import axios from 'axios'

export default function useFetch(url){

const [studentData, getStudentData]=useState(null);
const [fetchisLoading,setIsLoading]=useState(true);
const [fetcherror,setError]=useState(null);


useEffect(()=>{

async function getStudents(){
      try{
       
        const result= await axios.get('https://jsonplaceholder.typicode.com/users')
        getStudentData(result.data);
         setError(null);
      }
      catch(error){
        setError('Could not fetch students data');
      }
      finally{
     setIsLoading(false);
    }
    }
    
   
    getStudents();


},[url])

return {fetcherror, fetchisLoading, studentData }
}