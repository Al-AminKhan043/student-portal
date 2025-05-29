import { useState, useRef } from "react"
import { useSelector } from "react-redux";
export default function Card({ student, onRemove, onUpdate }) {
    const user = useSelector((state) => state.auth.user)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const [isEditing, setIsEditing] = useState(false);
    const enteredName = useRef();
    const enteredEmail = useRef();
    const enteredId = useRef();
    const enteredUsername = useRef();
    const enteredPhone = useRef();
    const enteredWebsite = useRef();
    const enteredCompanyName = useRef();
    function handleSave(e) {
  e.preventDefault();
  const updatedStudent = {
    id: parseInt(student.id, 10), 
    name: enteredName.current.value,
    username: enteredUsername.current.value,
    email: enteredEmail.current.value,
    phone: enteredPhone.current.value,
    website: enteredWebsite.current.value,
    company: {
      name: enteredCompanyName.current.value,
    }
  };
  onUpdate(updatedStudent);
  setIsEditing(false);
}

    return (
        <>
            {isEditing ? (<>
                <div className="border rounded-lg p-4 bg-orange-300 shadow-md transform transition duration-300 hover:scale-105">
                    <input
                        name="name"
                        defaultValue={student.name}
                        ref={enteredName}
                        className="block mb-1 p-1 rounded font-semibold"
                    />
                    <input
                        name="username"
                        defaultValue={student.username}
                        ref={enteredUsername}
                        className="block mb-1 p-1 rounded font-semibold"
                    />
                    <input
                        name="email"
                        defaultValue={student.email}
                        ref={enteredEmail}
                        className="block mb-1 p-1 rounded font-semibold"
                    />
                    <input
                        name="id"
                        defaultValue={student.id}
                        ref={enteredId}
                        className="block mb-1 p-1 rounded font-semibold"
                        disabled

                    />
                    <input
                        name="phone"
                        defaultValue={student.phone}
                        ref={enteredPhone}
                        className="block mb-1 p-1 rounded font-semibold"

                    />

                    <input
                        name="website"
                        defaultValue={student.website}
                        ref={enteredWebsite}
                        className="block mb-1 p-1 rounded font-semibold"

                    />
                    <input
                        name="company"
                        defaultValue={student.company.name}
                        ref={enteredCompanyName}
                        className="block mb-1 p-1 rounded font-semibold"

                    />
                    <button className="border p-1 m-1 px-1 py-1 rounded-lg hover:bg-green-600 hover:cursor-pointer font-semibold" onClick={handleSave}>Save</button>
                    <button className="border p-1 m-1 px-1 py-1 rounded-lg hover:bg-red-600 hover:cursor-pointer font-semibold" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>


            </>) : (<>
                <div className="border rounded-lg p-4 bg-orange-300 shadow-md transform transition duration-300 hover:scale-105">
                    <h2 className="font-bold text-lg ">
                        Student Info
                    </h2>
                    <p className="text-grey-700 mb-1 font-semibold">{student.id}</p>
                    <p className="text-grey-700 mb-1 font-semibold">{student.name}</p>
                    <p className="text-grey-700 mb-1 font-semibold">{student.username}</p>
                    <p className="text-grey-700 mb-1 font-semibold">{student.email}</p>
                    <p className="text-grey-700 mb-1 font-semibold">{student.phone}</p>
                    <p className="text-grey-700 mb-1 font-semibold">{student.website}</p>
                    <p className="text-grey-700 mb-1 font-semibold">{student.company.name }</p>
                    {isLoggedIn && <button className="border p-1  px-1 py-1 m-1 rounded-lg hover:bg-teal-600 hover:cursor-pointer font-semibold" onClick={onRemove}>Remove</button>}
                    {isLoggedIn && <button className="border p-1 m-1 px-1 py-1 rounded-lg hover:bg-red-600 hover:cursor-pointer font-semibold" onClick={() => setIsEditing(true)}>Update</button>}
                </div>
            </>)}



        </>
    )
}