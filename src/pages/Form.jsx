import { useRef } from "react"
import { useNavigate } from "react-router-dom";
export default function Form({ onSave }) {
    const navigate = useNavigate()
    const entererName = useRef();
    const enteredEmail = useRef();
    const enteredId = useRef();
    const enteredUsername = useRef();
    const enteredPhone = useRef();
    const enteredWebsite = useRef();
    const enteredCompany = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const name = entererName.current.value;
        const email = enteredEmail.current.value;
        const id = enteredId.current.value;
        const username = enteredUsername.current.value;
        const phone = enteredPhone.current.value;
        const website = enteredWebsite.current.value;
        const company = { name: enteredCompany.current.value };
        const student = {
            name, email, id, username, phone, website, company
        }
        onSave(student);
        entererName.current.value = '';
        enteredEmail.current.value = '';
        enteredId.current.value = '';
        enteredUsername.current.value = '';
        enteredPhone.current.value = '';
        enteredWebsite.current.value = '';
        enteredCompany.current.value = '';

        navigate('/dashboard');
    }
    return (
        <>
            <div className="flex flex-col items-center px-4 py-4 sm:px-6 md:px-8 w-full">
                <h2 className="text-xl font-bold text-amber-700 flex justify-center py-38">Fill Up Student Info</h2>
                <div className=" rounded-lg  flex justify-between " style={{ backgroundColor: '#B2D8CE' }}>

                    <form className=" flex flex-col p-28  " style={{ color: '#52357B' }} onSubmit={handleSubmit}>
                        <div className="flex m-1  mb-5  justify-between">
                            <label className="text-xl font-bold" htmlFor="name">Enter Name </label>
                            <input className="ml-3 border rounded " type="text" id="name" name="name" ref={entererName} required />
                        </div>
                        <div className="flex m-1 mb-5 justify-between">
                            <label className="text-xl font-bold" htmlFor="username">Enter Username</label>
                            <input className="ml-3 border rounded" type="text" id="username" name="username" ref={enteredUsername} required />
                        </div>
                        <div className="flex m-1 mb-5 justify-between">
                            <label className="text-xl font-bold" htmlFor="email">Enter Email</label>
                            <input className="ml-3 border rounded" type="email" id="email" name="email" ref={enteredEmail} required />
                        </div>
                        <div className="flex m-1 mb-5 justify-between">
                            <label className="text-xl font-bold" htmlFor="id">Enter ID</label>
                            <input className="ml-3 border rounded" type="text" id="id" name="id" ref={enteredId} required />
                        </div>
                        <div className="flex m-1 mb-5 justify-between">
                            <label className="text-xl font-bold" htmlFor="phone">Enter Phone</label>
                            <input className="ml-3 border rounded" type="text" id="phone" name="phone" ref={enteredPhone} required />
                        </div>
                        <div className="flex m-1 mb-5 justify-between">
                            <label className="text-xl font-bold" htmlFor="website">Enter Website</label>
                            <input className="ml-3 border rounded" type="text" id="website" name="website" ref={enteredWebsite} required />
                        </div>
                        <div className="flex m-1 mb-5 justify-between">
                            <label className="text-xl font-bold" htmlFor="company">Enter Company</label>
                            <input className="ml-3 border rounded" type="text" id="company" name="company" ref={enteredCompany} required />
                        </div>

                        <div className="flex flex-col  justify-center p-2">
                            <button className="border rounded-lg font-bold text-amber-700 p-1 m-1 bg-yellow-400 hover:cursor-pointer hover:bg-lime-500" >Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}