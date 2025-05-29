// usePatch.js
import { useState } from "react";
import axios from "axios";

export default function usePatch() {
  const [patchStudent, setPatchStudent] = useState(null);
  const [patchError, setPatchError] = useState(null);
  const [patchIsLoading, setPatchIsLoading] = useState(false);

  async function patchStudents(url, updatedStudent) {
    
    try {
     setPatchIsLoading(true);
      const response = await axios.patch(url, updatedStudent); 
      console.log('Student updated successfully', response.data);
      setPatchStudent(response.data);
      setPatchError(null);
    } catch (error) {
      console.error(error);
      setPatchError('Could not update student');
    } finally {
      setPatchIsLoading(false); 
    }
  }

  return { patchError, patchStudent, patchIsLoading, patchStudents };
}
