
import { useState } from "react";
import axios from "axios";

export default function usePost(url) {
  const [newstudentData, setStudentData] = useState(null); 
  const [postisLoading, setIsLoading] = useState(false);
  const [posterror, setError] = useState(null);

  async function postStudent(newStudent) {
    setIsLoading(true);
    try {
      const response = await axios.post(url, newStudent);
      console.log("Fake POST request sent", response.data);
      setStudentData(response.data); 
      setError(null);
    } catch (error) {
    setError("Could not add new student");
    } finally {
      setIsLoading(false);
    }
  }

  return { postStudent, postisLoading, posterror, newstudentData };
}
