import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const enteredName = useRef();
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const name = enteredName.current.value;
        const email = enteredEmail.current.value;
        const password = enteredPassword.current.value;
        dispatch(login({ name, email, password }))
        localStorage.setItem('user', JSON.stringify({
            name, email, password
        }))

        enteredName.current.value = '';
        enteredEmail.current.value = '';
        enteredPassword.current.value = '';
        navigate('/home');
    }

    return (
        <>
            <div className="  flex flex-col items-center  py-100">
                <h2 className="font-bold text-xl text-amber-800">Login with your info</h2>
                <form className=" m-5 border rounded-lg  p-10 font-semibold" style={{ backgroundColor: '#B2D8CE' }} onSubmit={handleSubmit}>
                    <div className="flex  justify-between gap-2 mb-1">
                        <label htmlFor="email">Enter Name</label>
                        <input className="border rounded-sm" id="name" name="name" type="text" ref={enteredName} required />
                    </div>
                    <div className="flex  justify-between gap-2 mb-1">
                        <label htmlFor="email">Enter Email</label>
                        <input className="border rounded-sm" id="email" name="email" type="email" ref={enteredEmail} required />
                    </div>
                    <div className="flex  justify-between gap-2 mb-1">
                        <label htmlFor="password">Enter Password</label>
                        <input className="border rounded-sm" id="password" name="password" type="password" ref={enteredPassword} required />
                    </div>
                    <div className="flex flex-col items-center">
                        <button className=" border rounded-sm p-1 mt-2 hover:bg-lime-400">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}