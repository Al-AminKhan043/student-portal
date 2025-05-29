import {  Route, Routes,HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Form from './pages/Form'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Spinner from './components/Spinner'
import Login from './pages/Login'
import Error from './components/Error'
import axios from 'axios'
import {login} from './store/authSlice'
import { useDispatch } from 'react-redux'
import { useState } from "react"
import { useEffect } from 'react'
import useDelete from './hooks/useDelete'
import useFetch from './hooks/useFetch'
import usePost from './hooks/usePost'
import usePatch from './hooks/usePatch'
function App() {
  const [student, setStudent] = useState([]);
  const [error, setError]=useState(null);
  const [isLoading,setIsLoading]=useState(null);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const prevUser=localStorage.getItem('user');
    if(prevUser){
      dispatch(login(JSON.parse(prevUser)))
    }
  },[dispatch])


  
  const {fetcherror,fetchisLoading,  studentData}= useFetch('https://jsonplaceholder.typicode.com/users');

   
  useEffect(() => {
  if (studentData) {
    setStudent(studentData);
    setError(fetcherror);
    setIsLoading(fetchisLoading);
  }
}, [studentData]);

const {
    postStudent,
    postisLoading,
    posterror,
    newstudentData
  } = usePost("https://jsonplaceholder.typicode.com/users");

  async function addNewStudent(newStudent) {
    setError(null);
    await postStudent(newStudent);
  }

 
  useEffect(() => {
    if (newstudentData) {
      setStudent((prev) => [...prev, newstudentData]);
    }
  }, [newstudentData]);


  useEffect(() => {
  setIsLoading(postisLoading);

  if (posterror) {
    setError(posterror);
  }
}, [postisLoading, posterror]);


 const {deleteError, deleteIsLoading, deleteStudent, deletestudentData} = useDelete();

 async function removeStudent(sid){
  
   await deleteStudent({ url: `https://jsonplaceholder.typicode.com/users/${sid}`, sid });
  setError(null);
 }
  
  useEffect(()=>{
    if(deletestudentData){
       setStudent((prevState) => {
      return prevState.filter((f) => f.id !== deletestudentData);
    })
    }
  },[deletestudentData])

   useEffect(() => {
  setIsLoading(deleteIsLoading);

  
    setError(deleteError);
  
}, [deleteIsLoading, deleteError]);

  
   const {patchError, patchStudent,patchIsLoading, patchStudents} = usePatch();
  


   async function updateStudent(updatedStudent) {
    
      await patchStudents(`https://jsonplaceholder.typicode.com/users/${updatedStudent.id}`,updatedStudent);
      
      
            
  }
  useEffect(()=>{
    if(patchStudent){
      setStudent((prevState) => {
      return prevState.map((s) => s.id === patchStudent.id ? patchStudent: s)
    })
    }
  },[patchStudent])


  useEffect(()=>{
   
    setError(patchError)
 
    setIsLoading(patchIsLoading)
  },[patchError,patchIsLoading])

  
   
  return (
    <>
      <div className='bg-stone-300'>
        <HashRouter >
          <Navbar></Navbar>
          {error? <Error message={error} ></Error>:(
            <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/' element={<Welcome></Welcome>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/dashboard' element={
              isLoading? <Spinner></Spinner>: 
              <Dashboard student={student} onRemove={removeStudent} onUpdate={updateStudent}></Dashboard>}></Route>
            <Route path='/form' element={<Form onSave={addNewStudent} ></Form>}></Route>
          </Routes>
          )}
          
          <Footer></Footer>
        </HashRouter>
      </div>

    </>
  )
}

export default App
