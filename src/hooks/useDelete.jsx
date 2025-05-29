import { useState } from "react";
import axios from 'axios'

export default function useDelete(){

const [deletestudentData, setdeleteStudentData]=useState(null);
const [deleteError, setDeleteError]= useState(null);
const [deleteIsLoading, setDeleteIsLoading]=useState(false);


async function  deleteStudent({url,sid}){
setDeleteIsLoading(true);
try{
const response= await axios.delete(url);
console.log('student deletion success', response);
    setdeleteStudentData(sid);
     
     setDeleteIsLoading(false); 
     setDeleteError(null);
    }
   catch(error){
    
      setDeleteError('could not delete student');
    }
    finally{
        setDeleteIsLoading(false);
    }

}

return {  deleteError, deleteIsLoading, deleteStudent,deletestudentData }
}
 

